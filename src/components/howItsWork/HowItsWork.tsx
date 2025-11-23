'use client';
import {cn}  from '@/lib/utils'

import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {CalendarClock, ShieldAlert, Smartphone, Watch} from 'lucide-react';

const STEPS = [
    {
        id: 1,
        title: "Create Your Profile",
        description: "Download the app and create your personal health account. Securely log in to access your dashboard and set up your emergency contacts.",
        icon: <Smartphone className="w-12 h-12 text-blue-500"/>,
        color: "bg-blue-50",
        image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Login+Screen"
    },
    {
        id: 2,
        title: "Pair Your Device",
        description: "Seamlessly connect your smart wristband to your smartphone via Bluetooth. One-tap pairing ensures you are ready to go in seconds.",
        icon: <Watch className="w-12 h-12 text-indigo-500"/>,
        color: "bg-indigo-50",
        image: "https://placehold.co/600x400/e0e7ff/3730a3?text=Bluetooth+Pairing"
    },
    {
        id: 3,
        title: "Schedule & Remind",
        description: "Input your medication schedule. When it's time for a dose, your wristband will gently vibrate to remind you—never miss a pill again.",
        icon: <CalendarClock className="w-12 h-12 text-teal-500"/>,
        color: "bg-teal-50",
        image: "https://placehold.co/600x400/ccfbf1/115e59?text=Vibration+Alert"
    },
    {
        id: 4,
        title: "Smart Fall Detection",
        description: "The wristband monitors movement in real-time. If a fall is detected, it automatically alerts your listed family members with your location.",
        icon: <ShieldAlert className="w-12 h-12 text-rose-500"/>,
        color: "bg-rose-50",
        image: "https://placehold.co/600x400/ffe4e6/9f1239?text=Fall+Detection+Alert"
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
        <section className="w-full bg-white">
            <div ref={targetRef} className="relative h-[400vh]">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-20">

                    <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                        <h2 className="text-4xl font-bold text-slate-900">How MediSync Works</h2>
                        <p className="text-slate-500 mt-4 text-lg">Four simple steps to complete peace of mind.</p>
                    </div>

                    <div
                        className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">

                        {/* LEFT SIDE IMAGES */}
                        <div
                            className="relative w-full aspect-square max-h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">

                            {STEPS.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={transforms[index]}
                                >
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* RIGHT SIDE CONTENT */}
                        <div className="relative h-full flex items-center">

                            {STEPS.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="absolute inset-0 flex items-center"
                                    style={transforms[index]}
                                >
                                    <div className="p-6 rounded-2xl bg-white shadow-xl border border-slate-200 w-full">
                                        <div className="flex items-start gap-4">
                                            <div className={cn("p-3 rounded-xl", step.color)}>
                                                {step.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                                                    {step.title}
                                                </h3>
                                                <p className="text-lg leading-relaxed text-slate-600">
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
        </section>
    );
}
