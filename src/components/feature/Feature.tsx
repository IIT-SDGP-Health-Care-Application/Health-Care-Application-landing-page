"use client";

import {Bell, HeartPulse, LayoutDashboard, Shield, Users, Watch} from "lucide-react";
import {JSX, useEffect, useRef, useState} from "react";
import {motion, useInView} from "framer-motion";

interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <Bell className="w-8 h-8 text-purple-500" />,
        title: "Smart Medication Reminders",
        description:
            "Receive personalized alerts before and after every dose — ensuring you never miss your medication schedule again.",
    },
    {
        icon: <Users className="w-8 h-8 text-blue-500" />,
        title: "Family & Caregiver Sharing",
        description:
            "Connect with loved ones or caregivers, track shared health data, and stay updated on medication adherence.",
    },
    {
        icon: <HeartPulse className="w-8 h-8 text-red-500" />,
        title: "Fall Detection & Safety Alerts",
        description:
            "Detect falls instantly using wearable sensors and send emergency alerts to family or caregivers in real-time.",
    },
    {
        icon: <Watch className="w-8 h-8 text-green-500" />,
        title: "Wearable Device Integration",
        description:
            "Pair with smartwatches or IoT devices to monitor health stats and motion data seamlessly.",
    },
    {
        icon: <LayoutDashboard className="w-8 h-8 text-yellow-500" />,
        title: "Personalized Health Dashboard",
        description:
            "Access all your health stats, medication schedules, and family activity from one simple, interactive dashboard.",
    },
    {
        icon: <Shield className="w-8 h-8 text-indigo-500" />,
        title: "Secure & Easy Onboarding",
        description:
            "Sign in safely using Google, Microsoft, or Firebase and manage all your personal and health data with confidence.",
    },
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const titleVariants = {
    hidden: {opacity: 0, y: -20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function Features() {
    const ref = useRef(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {once: true, amount: 0.3});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile || !carouselRef.current || !sectionRef.current) return;

        const carousel = carouselRef.current;
        const section = sectionRef.current;

        const handleWheel = (e: WheelEvent) => {
            const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10;

            if (!isAtEnd || e.deltaY < 0) {
                e.preventDefault();
                carousel.scrollLeft += e.deltaY;
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.addEventListener('wheel', handleWheel, {passive: false});
                    } else {
                        section.removeEventListener('wheel', handleWheel);
                    }
                });
            },
            {threshold: 0.5}
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
            section.removeEventListener('wheel', handleWheel);
        };
    }, [isMobile]);

    return (
        <section className="py-20 bg-gray-50" id="features" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6 text-center" ref={ref}>
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Discover how MediSync simplifies your health journey through smart technology and real-time
                        care.
                    </p>
                </motion.div>

                {/* Desktop Grid */}
                <motion.div
                    className="hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                            whileHover={{
                                y: -8,
                                transition: {duration: 0.3}
                            }}
                        >
                            <motion.div
                                className="flex items-center mb-4"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: {duration: 0.3}
                                }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile Carousel */}
                <div className="sm:hidden">
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 gap-6"
                        style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="flex-shrink-0 w-full snap-center p-8 bg-white rounded-2xl shadow-md"
                                initial={{opacity: 0, scale: 0.95}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}