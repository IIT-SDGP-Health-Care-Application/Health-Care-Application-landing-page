'use client';

import React from 'react';
import {motion} from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen relative overflow-hidden">
            <div
                className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
                {/* Left Content */}
                <motion.div
                    className="lg:w-1/2 space-y-8 text-center lg:text-left"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    {/* Main Heading */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                        {/* Left - Big "Stay" */}
                        <motion.h1
                            className="text-8xl lg:text-[10rem] font-extrabold text-gray-900 leading-none"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2, ease: "easeOut"}}
                        >
                            Stay
                        </motion.h1>

                        {/* Right - Smaller stacked words */}
                        <div className="flex flex-col space-y-2">
                            <motion.h2
                                className="text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight"
                                initial={{opacity: 0, x: 50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.6, delay: 0.4, ease: "easeOut"}}
                            >
                                on Track.
                            </motion.h2>
                            <motion.h2
                                className="text-3xl lg:text-5xl font-semibold text-gray-800 leading-tight"
                                initial={{opacity: 0, x: 50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.6, delay: 0.6, ease: "easeOut"}}
                            >
                                Healthy.
                            </motion.h2>
                            <motion.h2
                                className="text-3xl lg:text-5xl font-semibold leading-tight"
                                initial={{opacity: 0, x: 50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.6, delay: 0.8, ease: "easeOut"}}
                            >
                                <span className="text-gray-800">Connected.</span>
                            </motion.h2>
                        </div>
                    </div>

                    {/* Description */}
                    <motion.p
                        className="text-gray-600 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 1, ease: "easeOut"}}
                    >
                        MediSync is your intelligent health companion — helping you manage medications, monitor your well-being, detect falls, and keep your loved ones informed — all in one seamless app.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 1.2, ease: "easeOut"}}
                    >
                        {/* Download Button */}
                        <motion.button
                            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                            whileHover={{scale: 1.05, y: -2}}
                            whileTap={{scale: 0.98}}
                        >
                            <div className="flex items-center gap-2">
                                <img src="/images/logo/apple-logo.svg" alt="Apple logo" className="w-5 h-5" />
                                <span className="text-gray-400">|</span>
                                <img src="/images/logo/android-logo.svg" alt="Android logo" className="w-5 h-5" />
                            </div>
                            <span>Download Now</span>
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Content - Phone Mockup */}
                <motion.div
                    className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end relative"
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.3, ease: "easeOut"}}
                >
                    {/* Purple gradient circle background */}
                    <motion.div
                        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-60 -z-10"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                    {/* Phone Frame */}
                    <motion.div
                        className="relative"
                        animate={{
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                            {/* Phone Screen */}
                            <div
                                className="w-full h-full bg-gradient-to-b from-blue-200 to-blue-300 rounded-[2.5rem] relative overflow-hidden">
                                {/* Notch */}
                                <div
                                    className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>

                                {/* Screen Content */}
                                <div className="p-8 pt-16 h-full">
                                    {/* Header */}
                                    <motion.div
                                        className="flex items-center justify-between mb-6"
                                        initial={{opacity: 0, y: -10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, delay: 1.5}}
                                    >
                                        <button className="w-8 h-8 flex items-center justify-center">
                                            <div className="w-6 h-6 text-gray-600">×</div>
                                        </button>
                                        <div className="text-center">
                                            <h3 className="font-semibold text-gray-800">Symptoms</h3>
                                            <p className="text-xs text-gray-500">May 3, 2021</p>
                                        </div>
                                        <button className="w-8 h-8 flex items-center justify-center">
                                            <div
                                                className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center">
                                                <span className="text-xs">?</span>
                                            </div>
                                        </button>
                                    </motion.div>

                                    {/* Toggle Buttons */}
                                    <motion.div
                                        className="flex bg-white/30 backdrop-blur-sm rounded-full p-1 mb-8"
                                        initial={{opacity: 0, scale: 0.9}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5, delay: 1.7}}
                                    >
                                        <button
                                            className="flex-1 py-2 px-4 bg-purple-500 text-white rounded-full text-sm font-medium">
                                            Body View
                                        </button>
                                        <button className="flex-1 py-2 px-4 text-gray-600 text-sm font-medium">
                                            List View
                                        </button>
                                    </motion.div>

                                    {/* 3D Character */}
                                    <motion.div
                                        className="flex-1 flex items-center justify-center relative"
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.6, delay: 1.9}}
                                    >
                                        <div
                                            className="w-32 h-40 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-full relative">
                                            {/* Simple character representation */}
                                            <div
                                                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-pink-400 rounded-full"></div>
                                            <div
                                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-blue-400 rounded-t-lg"></div>

                                            {/* Info markers */}
                                            <motion.div
                                                className="absolute top-12 -left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                2
                                            </motion.div>
                                            <motion.div
                                                className="absolute bottom-8 -right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    delay: 1,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                1
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;