import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Features from "@/components/feature/Feature";
import Team from "@/components/team/Team";
import Footer from "@/components/footer/Footer";
import HowItWorks from "@/components/howItsWork/HowItsWork";

export default function Home() {
    return (
        <main className="relative">
            <Header/>
            <Hero/>

            <section id="features" className="scroll-mt-28">
                <Features/>
            </section>

            <section id="how-it-works" className="scroll-mt-28">
                 <HowItWorks />
            </section>

            {/* Team Section */}
            <section id="team" className="scroll-mt-28">
                <Team/>
            </section>

            <section id="support" className="scroll-mt-28">
                <Footer/>
            </section>
        </main>
    );
}