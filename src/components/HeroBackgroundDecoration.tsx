'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroBackgroundDecoration: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Decorative Background Elements Container */}

            {/* Main Purple/Blue Blob */}
            <motion.div
                className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-50 blur-3xl transform translate-x-1/4 -translate-y-1/4"
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
                className="absolute top-20 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 blur-2xl transform -translate-x-1/2"
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
                className="absolute bottom-32 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-40 blur-2xl transform translate-x-1/2"
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
                className="absolute bottom-20 left-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-40 blur-sm transform translate-x-1/4"
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
        </div>
    );
};

export default HeroBackgroundDecoration;