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

            <section id="features">
                <Features/>
            </section>

            <section id="how-it-works">
                 <HowItWorks />
            </section>

            {/* Team Section */}
            <section id="team" >
                <Team/>
            </section>

            <section id="support">
                <Footer/>
            </section>
        </main>
    );
}