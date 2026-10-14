import os
from PIL import Image, ImageDraw, ImageFilter

def render_tablet_mockup(src_image_path, output_path, center_pill_text="Zapple Digital | Growth Platform"):
    W, H = 1600, 1000
    
    # 1. Background studio lighting
    # Modern clean agency studio background with subtle crimson/rose glow
    bg = Image.new('RGBA', (W, H), (248, 250, 252, 255))
    
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    for r in range(500, 0, -25):
        alpha = int(28 * (1 - r / 500.0))
        glow_draw.ellipse((W//2 - r, H//2 - r - 20, W//2 + r, H//2 + r - 20), fill=(239, 68, 68, alpha))
    for r in range(320, 0, -20):
        alpha = int(22 * (1 - r / 320.0))
        glow_draw.ellipse((W//2 - r, H//2 - r - 30, W//2 + r, H//2 + r - 30), fill=(220, 38, 38, alpha))
    
    glow = glow.filter(ImageFilter.GaussianBlur(65))
    bg.paste(glow, (0, 0), glow)
    
    # 2. Realistic tablet drop shadow
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    # Deep contact shadow
    s_draw.rounded_rectangle((190, 120, 1410, 890), radius=38, fill=(15, 23, 42, 65))
    # Wide soft ambient shadow
    s_draw.rounded_rectangle((160, 140, 1440, 910), radius=48, fill=(15, 23, 42, 35))
    shadow = shadow.filter(ImageFilter.GaussianBlur(28))
    
    # 3. Tablet Chassis (Space Gray / Matte Black Titanium with polished bevel)
    tab_w = 1260
    tab_h = 790
    tab_x0 = (W - tab_w) // 2
    tab_y0 = (H - tab_h) // 2
    tab_x1 = tab_x0 + tab_w
    tab_y1 = tab_y0 + tab_h
    outer_r = 34
    
    tablet = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    t_draw = ImageDraw.Draw(tablet)
    
    # Outer metal edge chamfer / rim
    t_draw.rounded_rectangle((tab_x0 - 2, tab_y0 - 2, tab_x1 + 2, tab_y1 + 2), radius=outer_r + 2, fill=(203, 213, 225, 255))
    t_draw.rounded_rectangle((tab_x0 - 1, tab_y0 - 1, tab_x1 + 1, tab_y1 + 1), radius=outer_r + 1, fill=(71, 85, 105, 255))
    # Tablet bezel body (Midnight Black)
    t_draw.rounded_rectangle((tab_x0, tab_y0, tab_x1, tab_y1), radius=outer_r, fill=(15, 23, 42, 255))
    
    # Front camera & sensor on top bezel
    cam_x = W // 2
    cam_y = tab_y0 + 13
    t_draw.ellipse((cam_x - 4, cam_y - 4, cam_x + 4, cam_y + 4), fill=(30, 41, 59, 255))
    t_draw.ellipse((cam_x - 2, cam_y - 2, cam_x + 2, cam_y + 2), fill=(14, 116, 144, 255))
    t_draw.ellipse((cam_x + 14, cam_y - 1.5, cam_x + 17, cam_y + 1.5), fill=(239, 68, 68, 180)) # crimson indicator
    
    # Screen Dimensions inside uniform bezels
    bezel = 26
    screen_x0 = tab_x0 + bezel
    screen_y0 = tab_y0 + bezel
    screen_x1 = tab_x1 - bezel
    screen_y1 = tab_y1 - bezel
    screen_w = screen_x1 - screen_x0
    screen_h = screen_y1 - screen_y0
    screen_r = 14
    
    # Pre-process screenshot (strip borders & dark scrollbars if any)
    src_img = Image.open(src_image_path).convert('RGBA')
    sw, sh = src_img.size
    
    crop_top = 0
    for y in range(6):
        p = src_img.getpixel((sw // 2, y))
        if p[0] < 100 and p[2] < 100:
            crop_top = y + 1
        else:
            break
            
    crop_bottom = 0
    for y in range(sh - 1, sh - 6, -1):
        p = src_img.getpixel((sw // 2, y))
        if p[0] < 80 and p[1] < 80 and p[2] < 80:
            crop_bottom = sh - y
        else:
            break
            
    crop_right = 0
    right_pixel = src_img.getpixel((sw - 2, sh // 2))
    if right_pixel[0] < 80 and right_pixel[1] < 80 and right_pixel[2] < 80:
        crop_right = 16
        
    if crop_top > 0 or crop_bottom > 0 or crop_right > 0:
        src_img = src_img.crop((0, crop_top, sw - crop_right, sh - crop_bottom))
        sw, sh = src_img.size
        
    # Create screen canvas with standard web app background #f8fafc
    screen_canvas = Image.new('RGBA', (screen_w, screen_h), (248, 250, 252, 255))
    sc_draw = ImageDraw.Draw(screen_canvas)
    
    # Tablet Status Bar (Height: 24px)
    status_h = 24
    sc_draw.rectangle((0, 0, screen_w, status_h), fill=(255, 255, 255, 255))
    sc_draw.text((24, 6), "09:41", fill=(100, 116, 139, 255))
    
    # Center Agency indicator pill
    sc_draw.text(((screen_w - 180) // 2, 6), center_pill_text, fill=(220, 38, 38, 255))
    
    # 100% text and clean vector battery icon
    sc_draw.text((screen_w - 105, 6), "100%", fill=(100, 116, 139, 255))
    # Battery outline
    sc_draw.rounded_rectangle((screen_w - 65, 7, screen_w - 42, 18), radius=2, outline=(100, 116, 139, 255), width=1)
    # Battery green level
    sc_draw.rectangle((screen_w - 63, 9, screen_w - 44, 16), fill=(34, 197, 94, 255))
    # Battery terminal nipple
    sc_draw.rectangle((screen_w - 41, 10, screen_w - 39, 15), fill=(100, 116, 139, 255))
    
    # Resize screenshot width to screen_w
    target_w = screen_w
    target_h = int(sh * (target_w / sw))
    resized = src_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Paste starting below status bar
    screen_canvas.paste(resized, (0, status_h))
    
    # Bottom Home Bar Pill (centered at bottom)
    home_w = 140
    home_h = 4
    home_x0 = (screen_w - home_w) // 2
    home_y0 = screen_h - 12
    sc_draw.rounded_rectangle((home_x0, home_y0, home_x0 + home_w, home_y0 + home_h), radius=2, fill=(100, 116, 139, 180))
    
    # Subtle glass reflection across tablet screen
    glass = Image.new('RGBA', (screen_w, screen_h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glass)
    g_draw.polygon([(0, 0), (screen_w // 2, 0), (0, screen_h * 2 // 3)], fill=(255, 255, 255, 14))
    glass = glass.filter(ImageFilter.GaussianBlur(14))
    
    screen_composite = Image.alpha_composite(screen_canvas, glass)
    
    # Mask screen with rounded corners
    screen_mask = Image.new('L', (screen_w, screen_h), 0)
    m_draw = ImageDraw.Draw(screen_mask)
    m_draw.rounded_rectangle((0, 0, screen_w, screen_h), radius=screen_r, fill=255)
    
    tablet.paste(screen_composite, (screen_x0, screen_y0), screen_mask)
    
    # Combine background + shadow + tablet
    final = Image.alpha_composite(bg, shadow)
    final = Image.alpha_composite(final, tablet)
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    final.save(output_path, 'WEBP', quality=95)
    print(f"Generated tablet mockup: {output_path}")

if __name__ == '__main__':
    temp_dir = r"c:\Users\dhine\Documents\Dhinesh_portfolio\temp_imgs"
    out_dir = r"c:\Users\dhine\Documents\Dhinesh_portfolio\public\projects\zapple"
    
    items = [
        ("image.png", "zapple_hero_tab.webp", "Zapple Digital | Performance Marketing"),
        ("image copy 2.png", "zapple_services_orbit_tab.webp", "Zapple Digital | Radial Services Orbit"),
        ("image copy.png", "zapple_instagram_community_tab.webp", "Zapple Digital | Instagram Community"),
        ("image copy 3.png", "zapple_blog_knowledge_tab.webp", "Zapple Digital | Blog & Knowledge Base"),
        ("image copy 4.png", "zapple_agency_footer_tab.webp", "Zapple Digital | Conversion Hub"),
    ]
    
    for src_name, out_name, pill_text in items:
        src = os.path.join(temp_dir, src_name)
        out = os.path.join(out_dir, out_name)
        render_tablet_mockup(src, out, pill_text)
    print("All Zapple Digital tablet mockups generated successfully!")
