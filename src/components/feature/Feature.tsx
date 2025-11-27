"use client";

import {Bell, HeartPulse, LayoutDashboard, Shield, Users, Watch} from "lucide-react";
import {JSX, useEffect, useRef, useState} from "react";
import {motion, useInView} from "framer-motion";

// --- INTERFACES & DATA (Same as before) ---

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

// Combine the features for the visual loop: [Last, ...Original, First]
// The first and last items are clones used to create the seamless jump effect.
const looperFeatures = [
    features[features.length - 1], // Clone of the last feature
    ...features,                   // All original features
    features[0]                    // Clone of the first feature
];

// --- FRAMER MOTION VARIANTS (Same as before) ---

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

// --- MAIN COMPONENT ---

export default function Features() {
    const ref = useRef(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true, amount: 0.3});
    // activeLooperIndex: Corresponds to the index in looperFeatures array.
    // We start at index 1 to show the FIRST *original* feature (after the clone).
    const [activeLooperIndex, setActiveLooperIndex] = useState(1);

    // isTransitioning: Used to briefly disable smooth scrolling during the loop jump.
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Auto-rotation logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLooperIndex((current) => current + 1);
        }, 5000); // Rotate every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Scroll and Infinite Loop Logic
    useEffect(() => {
        if (!carouselRef.current) return;
        const carousel = carouselRef.current;
        const totalOriginalFeatures = features.length;
        const scrollPosition = activeLooperIndex * carousel.clientWidth;

        // 1. Initial Scroll (Smooth)
        carousel.scrollTo({
            left: scrollPosition,
            behavior: isTransitioning ? 'auto' : 'smooth'
        });

        // 2. Handle the Infinite Loop Jump
        if (activeLooperIndex === totalOriginalFeatures + 1) {
            // We've reached the clone of the first item, so prepare to jump back.
            setTimeout(() => {
                setIsTransitioning(true); // Disable smooth scroll temporarily
                setActiveLooperIndex(1); // Jump back to the FIRST original item index (index 1)
            }, 500); // Allow time for the 'smooth' scroll to the clone to finish (adjust timing if needed)
        } else if (activeLooperIndex === 0) {
            // We've scrolled back to the clone of the last item, jump to the last original item.
            setTimeout(() => {
                setIsTransitioning(true);
                setActiveLooperIndex(totalOriginalFeatures); // Jump to the LAST original item index
            }, 500);
        } else if (isTransitioning) {
            // After the jump is complete (i.e., activeLooperIndex is now 1 or totalOriginalFeatures), re-enable smooth scrolling.
            setIsTransitioning(false);
        }
    }, [activeLooperIndex, isTransitioning]);

    // Function to calculate the real index for pagination indicators
    const getRealIndex = (looperIndex: number) => {
        if (looperIndex === 0) return features.length - 1; // Last original item
        if (looperIndex === features.length + 1) return 0; // First original item
        return looperIndex - 1;
    };


    return (
        <section className="py-20 bg-background-light relative h-screen" id="features">
            <div className="max-w-7xl mx-auto px-6 text-center" ref={ref}>
                {/* Title (Same as before) */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >
                    <h2 className="text-6xl font-bold text-secondary mb-4">
                        Key Features
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Discover how MediSync simplifies your health journey through smart technology.
                    </p>
                </motion.div>

                {/* Desktop GRID (sm: breakpoint and up) - Same as before */}
                <motion.div
                    className="hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={itemVariants}
                            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                            whileHover={{y: -8}}
                        >
                            <div className="flex items-center mb-4">{f.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                {f.title}
                            </h3>
                            <p className="text-gray-600">{f.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile HORIZONTAL CAROUSEL (Below sm: breakpoint) */}
                <div className="sm:hidden">
                    <div
                        ref={carouselRef}
                        // Added `overflow-hidden` for better control, though `overflow-x-auto` is necessary
                        // We rely on the `scrollbar-hide` style for hiding the scrollbar.
                        className="flex overflow-x-auto scrollbar-hide -mx-6 px-60 gap-6"
                    >
                        {/* MAP OVER THE LOOPER FEATURES FOR INFINITE SCROLL */}
                        {looperFeatures.map((f, i) => (
                            <motion.div
                                // Key includes index 'i' because titles can be duplicated (clones)
                                key={`${f.title}-${i}`}
                                className="flex-shrink-0 w-full p-8 bg-white rounded-2xl shadow-md"
                                initial={{opacity: 0, scale: 0.95}}
                                // Note: We use the index 'i' for animation delay based on position
                                animate={{opacity: 1, scale: 1}}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1
                                }}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {f.title}
                                </h3>
                                <p className="text-gray-600">{f.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Simple Pagination/Indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                // Check if the REAL index matches the current feature's index
                                className={`w-3 h-3 rounded-full transition-all ${
                                    getRealIndex(activeLooperIndex) === index
                                        ? "bg-indigo-600 w-6"
                                        : "bg-gray-300"
                                }`}
                                onClick={() => setActiveLooperIndex(index + 1)} // Set the looper index (index + 1)
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

            {/* CSS to hide the scrollbar (as requested) */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}