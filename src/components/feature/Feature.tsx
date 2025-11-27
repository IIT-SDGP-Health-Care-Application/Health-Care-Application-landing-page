'use client';

import {Bell, HeartPulse, LayoutDashboard, Shield, Users, Watch} from "lucide-react";
import {motion, useInView} from "framer-motion";
import {JSX, useEffect, useRef, useState} from "react";

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
            "Receive personalized alerts before and after every dose — ensuring you never miss your medication schedule again."
    },
    {
        icon: <Users className="w-8 h-8 text-blue-500" />,
        title: "Family & Caregiver Sharing",
        description:
            "Connect with loved ones or caregivers, track shared health data, and stay updated on medication adherence."
    },
    {
        icon: <HeartPulse className="w-8 h-8 text-red-500" />,
        title: "Fall Detection & Safety Alerts",
        description:
            "Detect falls instantly using wearable sensors and send emergency alerts to family or caregivers in real-time."
    },
    {
        icon: <Watch className="w-8 h-8 text-green-500" />,
        title: "Wearable Device Integration",
        description:
            "Pair with smartwatches or IoT devices to monitor health stats and motion data seamlessly."
    },
    {
        icon: <LayoutDashboard className="w-8 h-8 text-yellow-500" />,
        title: "Personalized Health Dashboard",
        description:
            "Access all your health stats, medication schedules, and family activity from one simple, interactive dashboard."
    },
    {
        icon: <Shield className="w-8 h-8 text-indigo-500" />,
        title: "Secure & Easy Onboarding",
        description:
            "Sign in safely using Google, Microsoft, or Firebase and manage all your personal and health data with confidence."
    }
];

const looperFeatures = [
    features[features.length - 1],
    ...features,
    features[0]
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.15, delayChildren: 0.2}
    }
};

const itemVariants = {
    hidden: {opacity: 0, y: 30, scale: 0.95},
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {duration: 0.8}
    }
};

const titleVariants = {
    hidden: {opacity: 0, y: -20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
};

export default function Features() {
    const ref = useRef(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true, amount: 0.3});
    const [activeLooperIndex, setActiveLooperIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLooperIndex((current) => current + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!carouselRef.current) return;
        const carousel = carouselRef.current;
        const totalOriginalFeatures = features.length;
        const scrollPosition = activeLooperIndex * carousel.clientWidth;

        carousel.scrollTo({
            left: scrollPosition,
            behavior: isTransitioning ? 'auto' : 'smooth'
        });

        if (activeLooperIndex === totalOriginalFeatures + 1) {
            setTimeout(() => {
                setIsTransitioning(true);
                setActiveLooperIndex(1);
            }, 500);
        } else if (activeLooperIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(true);
                setActiveLooperIndex(totalOriginalFeatures);
            }, 500);
        } else if (isTransitioning) {
            setIsTransitioning(false);
        }
    }, [activeLooperIndex, isTransitioning]);

    const getRealIndex = (looperIndex: number) => {
        if (looperIndex === 0) return features.length - 1;
        if (looperIndex === features.length + 1) return 0;
        return looperIndex - 1;
    };

    return (
        <section className="py-20 bg-background-light relative min-h-screen flex items-center" id="features">
            <div className="max-w-7xl mx-auto px-6 text-center w-full" ref={ref}>
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
                        Key Features
                    </h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Discover how MediSync simplifies your health journey through smart technology.
                    </p>
                </motion.div>

                {/* Desktop Grid */}
                <motion.div
                    className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={itemVariants}
                            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow hover:shadow-xl transition-all duration-300"
                            whileHover={{y: -8, scale: 1.02}}
                        >
                            <div className="flex items-center justify-center mb-4">{f.icon}</div>
                            <h3 className="text-xl font-semibold text-card-foreground mb-3">
                                {f.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile Carousel */}
                <div className="sm:hidden">
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto carousel-scrollbar -mx-6 px-6 gap-6 snap-x snap-mandatory pb-4"
                    >
                        {looperFeatures.map((f, i) => (
                            <motion.div
                                key={`${f.title}-${i}`}
                                className="flex-shrink-0 w-full p-8 bg-card  shadow-lg bg-white rounded-2xl hover:shadow-xl transition-all duration-300"
                                initial={{opacity: 0, scale: 0.95}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1
                                }}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                                    {f.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8 space-x-3">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                className={`h-3 rounded-full transition-all duration-300 hover:opacity-80 ${
                                    getRealIndex(activeLooperIndex) === index
                                        ? "bg-primary w-10"
                                        : "bg-b-accent w-3"
                                }`}
                                onClick={() => setActiveLooperIndex(index + 1)}
                                aria-label={`Go to feature ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[0]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px] md:h-[100px]"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
