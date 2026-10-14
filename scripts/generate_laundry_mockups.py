import os
from PIL import Image, ImageDraw, ImageFilter

def render_laundry_laptop_mockup(src_image_path, output_path, route_url):
    W, H = 1600, 1000
    
    # 1. Background studio lighting
    # Elegant slate-blue commercial studio tone
    bg = Image.new('RGBA', (W, H), (245, 248, 253, 255))
    
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    for r in range(480, 0, -25):
        alpha = int(30 * (1 - r / 480.0))
        glow_draw.ellipse((W//2 - r, H//2 - r + 30, W//2 + r, H//2 + r + 30), fill=(14, 116, 144, alpha))
    for r in range(320, 0, -20):
        alpha = int(22 * (1 - r / 320.0))
        glow_draw.ellipse((W//2 - r, H//2 - r - 40, W//2 + r, H//2 + r - 40), fill=(59, 130, 246, alpha))
    
    glow = glow.filter(ImageFilter.GaussianBlur(65))
    bg.paste(glow, (0, 0), glow)
    
    # 2. Contact Shadow beneath laptop base
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.ellipse((W//2 - 680, 840, W//2 + 680, 920), fill=(15, 23, 42, 70))
    s_draw.ellipse((W//2 - 760, 850, W//2 + 760, 960), fill=(15, 23, 42, 45))
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    
    # 3. Screen Dimensions
    lid_w = 1200
    lid_h = 750
    lid_x0 = (W - lid_w) // 2
    lid_y0 = 100
    lid_x1 = lid_x0 + lid_w
    lid_y1 = lid_y0 + lid_h
    corner_r = 24
    
    # Lid Chassis (Space Gray)
    lid = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    lid_draw = ImageDraw.Draw(lid)
    
    lid_draw.rounded_rectangle((lid_x0 - 2, lid_y0 - 2, lid_x1 + 2, lid_y1 + 2), radius=corner_r+2, fill=(148, 163, 184, 255))
    lid_draw.rounded_rectangle((lid_x0, lid_y0, lid_x1, lid_y1), radius=corner_r, fill=(15, 23, 42, 255))
    
    bezel_pad_x = 18
    bezel_pad_top = 22
    bezel_pad_bottom = 26
    screen_x0 = lid_x0 + bezel_pad_x
    screen_y0 = lid_y0 + bezel_pad_top
    screen_x1 = lid_x1 - bezel_pad_x
    screen_y1 = lid_y1 - bezel_pad_bottom
    screen_w = screen_x1 - screen_x0
    screen_h = screen_y1 - screen_y0
    
    # Webcam & LED
    webcam_x = W // 2
    webcam_y = lid_y0 + (bezel_pad_top // 2)
    lid_draw.ellipse((webcam_x - 4, webcam_y - 4, webcam_x + 4, webcam_y + 4), fill=(30, 41, 59, 255))
    lid_draw.ellipse((webcam_x - 2, webcam_y - 2, webcam_x + 2, webcam_y + 2), fill=(15, 75, 120, 255))
    lid_draw.ellipse((webcam_x + 14, webcam_y - 1.5, webcam_x + 17, webcam_y + 1.5), fill=(34, 197, 94, 200))
    
    # Inner screen canvas
    screen_canvas = Image.new('RGBA', (screen_w, screen_h), (255, 255, 255, 255))
    sc_draw = ImageDraw.Draw(screen_canvas)
    
    # Browser chrome top bar
    bar_h = 32
    sc_draw.rectangle((0, 0, screen_w, bar_h), fill=(241, 245, 249, 255))
    sc_draw.line((0, bar_h - 1, screen_w, bar_h - 1), fill=(226, 232, 240, 255), width=1)
    
    # Traffic light dots
    sc_draw.ellipse((14, 11, 24, 21), fill=(244, 63, 94, 255))
    sc_draw.ellipse((30, 11, 40, 21), fill=(251, 191, 36, 255))
    sc_draw.ellipse((46, 11, 56, 21), fill=(34, 197, 94, 255))
    
    # Address bar pill
    pill_w = 460
    pill_x0 = (screen_w - pill_w) // 2
    pill_x1 = pill_x0 + pill_w
    sc_draw.rounded_rectangle((pill_x0, 6, pill_x1, bar_h - 6), radius=6, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255))
    
    # Small lock indicator and URL
    sc_draw.rectangle((pill_x0 + 14, 13, pill_x0 + 20, 19), fill=(16, 185, 129, 255))
    sc_draw.text((pill_x0 + 28, 9), route_url, fill=(71, 85, 105, 255))
    
    # Pre-process screenshot (strip scrollbar, dark borders & top header slivers)
    src_img = Image.open(src_image_path).convert('RGBA')
    sw, sh = src_img.size
    
    crop_top = 0
    for y in range(6):
        p = src_img.getpixel((sw // 2, y))
        if p[0] < 100 and p[2] < 100:
            crop_top = y + 1
        else:
            break
            
    crop_right = 0
    right_pixel = src_img.getpixel((sw - 2, sh // 2))
    if right_pixel[0] < 80 and right_pixel[1] < 80 and right_pixel[2] < 80:
        crop_right = 16
        
    crop_bottom = 0
    bot_pixel = src_img.getpixel((sw // 2, sh - 1))
    if bot_pixel[0] < 80 and bot_pixel[1] < 80 and bot_pixel[2] < 80:
        crop_bottom = 2
        
    if crop_top > 0 or crop_right > 0 or crop_bottom > 0:
        src_img = src_img.crop((0, crop_top, sw - crop_right, sh - crop_bottom))
        sw, sh = src_img.size
        
    content_area_h = screen_h - bar_h
    
    # Resize width to exactly match screen_w
    target_w = screen_w
    target_h = int(sh * (target_w / sw))
    resized = src_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Sample background color for padding
    sample_y = min(target_h - 4, target_h - 1)
    bot_color = resized.getpixel((target_w // 2, sample_y))
    
    # Fill remaining canvas height with background color
    sc_draw.rectangle((0, bar_h, screen_w, screen_h), fill=bot_color)
    
    # Paste web content
    screen_canvas.paste(resized, (0, bar_h))
    
    # Subtle glass reflection
    glass = Image.new('RGBA', (screen_w, screen_h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glass)
    g_draw.polygon([(0, 0), (screen_w // 2, 0), (0, screen_h * 2 // 3)], fill=(255, 255, 255, 12))
    glass = glass.filter(ImageFilter.GaussianBlur(12))
    
    screen_composite = Image.alpha_composite(screen_canvas, glass)
    
    # Mask screen to round corners inside lid
    screen_mask = Image.new('L', (screen_w, screen_h), 0)
    m_draw = ImageDraw.Draw(screen_mask)
    m_draw.rounded_rectangle((0, 0, screen_w, screen_h), radius=6, fill=255)
    
    lid.paste(screen_composite, (screen_x0, screen_y0), screen_mask)
    
    # 4. Laptop Base
    base = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(base)
    
    hinge_w = 400
    hinge_x0 = (W - hinge_w) // 2
    hinge_x1 = hinge_x0 + hinge_w
    hinge_y0 = lid_y1 - 4
    hinge_y1 = lid_y1 + 10
    b_draw.rounded_rectangle((hinge_x0, hinge_y0, hinge_x1, hinge_y1), radius=4, fill=(30, 41, 59, 255))
    
    base_w = 1380
    base_h = 24
    base_x0 = (W - base_w) // 2
    base_x1 = base_x0 + base_w
    base_y0 = lid_y1 + 6
    base_y1 = base_y0 + base_h
    
    b_draw.rounded_rectangle((base_x0 - 2, base_y0, base_x1 + 2, base_y1 + 4), radius=8, fill=(100, 116, 139, 255))
    b_draw.rounded_rectangle((base_x0, base_y0 + 1, base_x1, base_y1), radius=8, fill=(203, 213, 225, 255))
    b_draw.line((base_x0 + 10, base_y0 + 1, base_x1 - 10, base_y0 + 1), fill=(248, 250, 252, 255), width=2)
    
    notch_w = 160
    notch_x0 = (W - notch_w) // 2
    notch_x1 = notch_x0 + notch_w
    notch_y0 = base_y0 + 1
    notch_y1 = base_y0 + 8
    b_draw.rounded_rectangle((notch_x0, notch_y0, notch_x1, notch_y1), radius=4, fill=(148, 163, 184, 255))
    b_draw.line((notch_x0 + 4, notch_y1, notch_x1 - 4, notch_y1), fill=(71, 85, 105, 180), width=1)
    
    # Composite all layers
    final = Image.alpha_composite(bg, shadow)
    final = Image.alpha_composite(final, lid)
    final = Image.alpha_composite(final, base)
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    final.save(output_path, 'WEBP', quality=95)
    print(f"Generated: {output_path}")

if __name__ == '__main__':
    temp_dir = r"c:\Users\dhine\Documents\Dhinesh_portfolio\temp_imgs"
    out_dir = r"c:\Users\dhine\Documents\Dhinesh_portfolio\public\projects\laundry-pos"
    
    items = [
        ("image copy.png", "laundry_order_counter_laptop.webp", "https://laundrypos-live.vercel.app/order"),
        ("image copy 2.png", "laundry_billing_checkout_laptop.webp", "https://laundrypos-live.vercel.app/order#checkout"),
        ("image copy 3.png", "laundry_dashboard_ledger_laptop.webp", "https://laundrypos-live.vercel.app/dashboard"),
        ("image.png", "laundry_auth_portal_laptop.webp", "https://laundrypos-live.vercel.app/login"),
    ]
    
    for src_name, out_name, route_url in items:
        src = os.path.join(temp_dir, src_name)
        out = os.path.join(out_dir, out_name)
        render_laundry_laptop_mockup(src, out, route_url)
    print("All Laundry POS mockups generated successfully!")
