"use client";
import { ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        // 1. Background: Uses Mirage 950 (b-primary)
        // 2. Text: Uses Mirage 50 (text-inverted) for base readability
        <footer className="bg-b-primary text-text-inverted py-16">
            <div className="container mx-auto px-6">

                {/* Footer Grid */}
                {/* Border: Uses Mirage 800 for a subtle separator against the 950 background */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-mirage-800 pb-12">

                    {/* Main CTA */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold mb-3 leading-tight text-white">
                            Empowering Your<br />Health Journey
                        </h2>
                        {/* Secondary Text: Uses Mirage 300 (Soft Blue-Grey) for description */}
                        <p className="text-mirage-300 mb-6">
                            Compassionate care, innovative solutions.
                        </p>

                        {/* Button: Uses Primary (Mirage 600) for pop, with White text */}
                        <button className="bg-primary text-white font-semibold px-8 py-3 rounded-full transition duration-300 hover:bg-mirage-500 hover:shadow-lg hover:shadow-mirage-900/50 cursor-pointer">
                            Download App
                        </button>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-white">Sitemap</h3>
                        <ul className="space-y-3">
                            {["About Us", "Services", "Contact"].map(item => (
                                <li key={item}>
                                    {/* Links: Mirage 300 base, White on hover */}
                                    <a className="text-mirage-300 hover:text-white transition-colors cursor-pointer block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-white">Social</h3>
                        <ul className="space-y-3">
                            {["Instagram", "Facebook", "LinkedIn"].map(item => (
                                <li key={item}>
                                    <a className="text-mirage-300 hover:text-white transition-colors cursor-pointer block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-white">Support</h3>
                        <ul className="space-y-3">
                            {["Help Center", "FAQs", "Pricing"].map(item => (
                                <li key={item}>
                                    <a className="text-mirage-300 hover:text-white transition-colors cursor-pointer block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright: Dimmer text (Mirage 400) */}
                    <p className="text-mirage-400 text-sm">All rights reserved</p>

                    <div className="flex gap-6 text-sm">
                        {["Terms", "Privacy", "Cookies"].map(item => (
                            <a key={item} className="text-mirage-400 hover:text-white transition-colors cursor-pointer">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Scroll Top: Border Mirage 700, Hover Background Mirage 800 */}
                    <button
                        onClick={scrollToTop}
                        className="p-2 rounded-full border border-mirage-700 text-mirage-300 hover:bg-mirage-800 hover:text-white transition-all cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;