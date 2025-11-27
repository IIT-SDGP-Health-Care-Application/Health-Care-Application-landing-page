'use client';

import React from 'react';
import {motion} from 'framer-motion';
import appleLogo from '@/../public/images/logo/apple-logo.svg'
import androidLogo from '@/../public/images/logo/android-logo.svg'
import doctorAvatar from '@/../public/images/doctorAvatar.png'

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-12">
                {/* Left Content */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left z-10"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    {/* Main Heading */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 sm:gap-4">
                        {/* Left - Big "Stay" */}
                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extrabold text-gray-900 leading-none"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2, ease: "easeOut"}}
                        >
                            Stay
                        </motion.h1>

                        {/* Right - Smaller stacked words */}
                        <div className="flex flex-col space-y-1 sm:space-y-2">
                            <motion.h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight"
                                initial={{opacity: 0, x: 50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.6, delay: 0.4, ease: "easeOut"}}
                            >
                                on Track.
                            </motion.h2>
                            <motion.h2
                                className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-800 leading-tight"
                                initial={{opacity: 0, x: 50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.6, delay: 0.6, ease: "easeOut"}}
                            >
                                Healthy.
                            </motion.h2>
                            <motion.h2
                                className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight"
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
                        className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
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
                            className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl flex items-center gap-3 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                            whileHover={{scale: 1.05, y: -2}}
                            whileTap={{scale: 0.98}}
                        >
                            <div className="flex items-center gap-2">
                                <img src={appleLogo.src} width={20}/>
                                <span className="text-gray-400">|</span>
                                <img src={androidLogo.src} width={20}/>
                            </div>
                            <span>Download Now</span>
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Content - Phone Mockup */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.3, ease: "easeOut"}}
                >
                    {/* Decorative Background Elements */}
                    <motion.div
                        className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-50 blur-3xl"
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

                    {/* Additional Decorative Circles */}
                    <motion.div
                        className="absolute top-20 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 blur-2xl"
                        animate={{
                            scale: [1, 1.15, 1],
                            x: [0, 10, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>

                    <motion.div
                        className="absolute bottom-32 right-20 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-40 blur-2xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            y: [0, -15, 0]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>

                    {/* Floating Pills/Capsules */}
                    <motion.div
                        className="absolute top-40 left-10 w-12 h-6 sm:w-16 sm:h-8 bg-gradient-to-r from-green-300 to-green-400 rounded-full opacity-50 blur-sm"
                        animate={{
                            rotate: [0, 360],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>

                    <motion.div
                        className="absolute bottom-20 left-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-40 blur-sm"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>

                    {/* Medical Cross Icon */}
                    <motion.div
                        className="absolute top-10 right-32 w-8 h-8 sm:w-10 sm:h-10 opacity-40"
                        animate={{
                            rotate: [0, 90, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-full h-0.5 bg-red-300 absolute top-1/2 blur-sm"></div>
                        <div className="w-0.5 h-full bg-red-300 absolute left-1/2 blur-sm"></div>
                    </motion.div>

                    {/* Phone Frame - Scaled up and responsive */}
                    <motion.div
                        className="relative z-10"
                        animate={{
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* --- UPDATED: Black Frame ---
                            - bg-white changed to bg-gray-900
                            - p-2/p-3 changed to p-1.5/p-2 for a thinner bezel look
                        */}
                        <div className="w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] md:w-[340px] md:h-[680px] lg:w-[360px] lg:h-[720px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl shadow-gray-700/50">
                            {/* Phone Screen */}
                            <div className="w-full h-full bg-gradient-to-b from-blue-100 to-white rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden">

                                {/* --- NEW: Notch Element ---
                                */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 w-24 sm:w-28 h-5 sm:h-6 bg-gray-900 rounded-b-xl"></div>

                                {/* Blue Header Section */}


                                {/* Screen Content */}
                                <div className="z-10 relative flex flex-col">
                                    <div
                                        className="h-32 sm:h-36 md:h-40 bg-gradient-to-b from-blue-400 to-blue-300 rounded-[2rem] sm:rounded-[2.5rem]"></div>
                                    {/* Doctor Avatar */}
                                    <motion.div
                                        className="absolute top-4.5 left-1/3 transform -translate-x-1/2 z-10"
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5, delay: 1.5}}
                                    >
                                        <img src={doctorAvatar.src} width={150}/>
                                    </motion.div>
                                    {/* Menu Items */}
                                    <motion.div
                                        className="space-y-3 sm:space-y-4 flex-1 mt-7 p-4"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, delay: 1.7}}
                                    >
                                        {/* Medicine Schedule */}
                                        <motion.div
                                            className="bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 shadow-md"
                                            whileHover={{scale: 1.02}}
                                        >
                                            <p className="text-gray-600 text-xs sm:text-sm font-medium">Medicine Schedule</p>
                                        </motion.div>

                                        {/* Upcoming Reminders */}
                                        <motion.div
                                            className="bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 shadow-md flex items-center justify-between"
                                            whileHover={{scale: 1.02}}
                                        >
                                            <p className="text-gray-600 text-xs sm:text-sm font-medium">Upcoming reminders</p>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>

                                        {/* Health Statistics */}
                                        <motion.div
                                            className="bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 shadow-md flex items-center justify-between"
                                            whileHover={{scale: 1.02}}
                                        >
                                            <p className="text-gray-600 text-xs sm:text-sm font-medium">Health Statistics</p>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>

                                        {/* Fall Alerts Summary */}
                                        <motion.div
                                            className="bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 shadow-md flex items-center justify-between"
                                            whileHover={{scale: 1.02}}
                                        >
                                            <p className="text-gray-600 text-xs sm:text-sm font-medium">Fall Alerts Summary</p>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>

                                    {/* Group Overview Button */}
                                    <div className="p-4 w-full">
                                        <motion.button
                                            className="w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl shadow-lg transition-colors mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base"
                                            initial={{opacity: 0, y: 20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.5, delay: 1.9}}
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                        >
                                            Group Overview
                                        </motion.button>
                                    </div>
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