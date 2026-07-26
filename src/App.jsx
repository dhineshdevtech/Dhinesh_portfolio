import { lazy, Suspense } from "react";
import { ContentProvider, useContent } from "./context/ContentContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Timeline from "./components/sections/Timeline";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/common/BackToTop";
import Background3D from "./components/common/Background3D";

const PortfolioChatbot = lazy(() => import("./components/common/PortfolioChatbot"));

const PortfolioShell = () => {
    const { content } = useContent();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 relative overflow-x-hidden">
            {/* Background 3D Constellation Stars */}
            <Background3D />

            <div className="relative z-10 transition-opacity duration-300 opacity-100">
                <Navbar />
                <main className="relative z-10">
                    {content.hero.enabled && <Hero />}
                    {content.projects.enabled && <Projects />}
                    {content.skills.enabled && <Skills />}
                    {content.about?.enabled && <About />}
                    {content.timeline?.enabled && <Timeline />}
                    {content.certificates.enabled && <Certificates />}
                    {content.contact.enabled && <Contact />}
                </main>
                {content.footer.enabled && <Footer />}
                
                <BackToTop />

                <Suspense fallback={null}>
                    <PortfolioChatbot />
                </Suspense>
            </div>
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <ContentProvider>
                <PortfolioShell />
            </ContentProvider>
        </ThemeProvider>
    );
}

export default App;
