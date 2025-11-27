'use client';
import {cn} from '@/lib/utils'

import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {CalendarClock, ShieldAlert, Smartphone, Watch} from 'lucide-react';
import dashBoardImage from '@/../public/images/mobile/dashboard.png';
import watchPair from '@/../public/images/mobile/watchPair.png';
import notification from '@/../public/images/mobile/notification.png';
import schedule from '@/../public/images/mobile/schedule.png';
// The HeroBackgroundDecoration import is present but unused in the component.

const STEPS = [
    {
        id: 1,
        title: "Create Your Profile",
        description: "Download the app and create your personal health account. Securely log in to access your dashboard and set up your emergency contacts.",
        icon: <Smartphone className="w-12 h-12 text-blue-500"/>,
        color: "bg-blue-50",
        image: dashBoardImage
    },
    {
        id: 2,
        title: "Pair Your Device",
        description: "Seamlessly connect your smart wristband to your smartphone via Bluetooth. One-tap pairing ensures you are ready to go in seconds.",
        icon: <Watch className="w-12 h-12 text-indigo-500"/>,
        color: "bg-indigo-50",
        image: watchPair
    },
    {
        id: 3,
        title: "Schedule & Remind",
        description: "Input your medication schedule. When it's time for a dose, your wristband will gently vibrate to remind you—never miss a pill again.",
        icon: <CalendarClock className="w-12 h-12 text-teal-500"/>,
        color: "bg-teal-50",
        image: schedule
    },
    {
        id: 4,
        title: "Smart Fall Detection",
        description: "The wristband monitors movement in real-time. If a fall is detected, it automatically alerts your listed family members with your location.",
        icon: <ShieldAlert className="w-12 h-12 text-rose-500"/>,
        color: "bg-rose-50",
        image: notification
    }
];



export default function HowItWorks() {
    const targetRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Pre-generate transforms for each step
    const transforms = STEPS.map((_, index) => {
        const stepStart = index / STEPS.length;
        const stepEnd = (index + 1) / STEPS.length;
        const isLast = index === STEPS.length - 1;

        const inputRange = isLast
            ? [stepStart, stepStart + 0.1, 1]
            : [stepStart, stepStart + 0.1, stepEnd - 0.1, stepEnd];

        const opacity = useTransform(
            scrollYProgress,
            inputRange,
            isLast ? [0, 1, 1] : [0, 1, 1, 0]
        );

        const scale = useTransform(
            scrollYProgress,
            inputRange,
            isLast ? [0.9, 1, 1] : [0.9, 1, 1, 0.9]
        );

        return {opacity, scale};
    });

    return (
        <section className="w-full bg-white relative">
            <div ref={targetRef} className="relative h-[400vh]">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-8 md:py-16">

                    {/* Header is kept outside the main grid */}
                    <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How MediSync Works</h2>
                        <p className="text-slate-500 mt-2 md:mt-4 text-base md:text-lg">Four simple steps to complete peace of mind.</p>
                    </div>

                    {/* Main Content Grid: grid-cols-1 (stacked) on mobile, lg:grid-cols-2 (side-by-side) on desktop */}
                    <div
                        className="max-w-7xl w-4/5 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">

                        {/* ROW 1 / COLUMN 1: IMAGE CONTAINER */}
                        <div
                            // Mobile: h-[400px] (stacked), w-full, center alignment
                            // Desktop: h-full (side-by-side), full height, no explicit width limit
                            className="relative w-full  md:w-[400px] mx-auto h-[400px] lg:h-full lg:max-h-[700px] overflow-hidden bg-transparent rounded-2xl lg:rounded-4xl"
                        >
                            {STEPS.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="absolute inset-0 flex items-center justify-center rounded-2xl lg:shadow-2xl"
                                    style={transforms[index]}
                                >
                                    <img
                                        src={typeof step.image === "string" ? step.image : step.image.src}
                                        alt={step.title}
                                        // Mobile: object-contain to fit the small box
                                        // Desktop: object-fill (original intent)
                                        className="w-full h-full object-contain lg:object-fill"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* ROW 2 / COLUMN 2: CONTENT CARD CONTAINER */}
                        <div
                            // Mobile: fixed small height (stacked)
                            // Desktop: h-full (side-by-side)
                            className="relative h-[250px] lg:h-full flex items-center"
                        >
                            {STEPS.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="absolute inset-0 flex items-center"
                                    style={transforms[index]}
                                >
                                    <div className="p-4 md:p-6 rounded-2xl bg-white shadow-xl border border-slate-200 w-full">
                                        <div className="flex items-start gap-4">
                                            <div className={cn("p-2 md:p-3 rounded-xl flex-shrink-0", step.color)}>
                                                {step.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold mb-1 text-slate-900">
                                                    {step.title}
                                                </h3>
                                                <p className="text-sm md:text-lg leading-relaxed text-slate-600">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="block w-full h-[80px]"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-b-accent"
                    ></path>
                </svg>
            </div>

        </section>
    );
}