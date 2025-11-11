import React from 'react';
import {Apple, Play} from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
            <div
                className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                    {/* Main Heading */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                        {/* Left - Big "Stay" */}
                        <h1 className="text-8xl lg:text-[10rem] font-extrabold text-gray-900 leading-none">
                            Stay
                        </h1>

                        {/* Right - Smaller stacked words */}
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
                                on Track.
                            </h2>
                            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800 leading-tight">
                                Healthy.
                            </h2>
                            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight">
                                <span className="text-gray-800">Connected.</span>
                            </h2>
                        </div>
                    </div>


                    {/* Description */}
                    <p className="text-gray-600 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        MediSync is your intelligent health companion — helping you manage medications, monitor your well-being, detect falls, and keep your loved ones informed — all in one seamless app.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                        {/* Download Button */}
                        <button
                            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                            <Apple className="w-5 h-5"/>
                            Download Now
                        </button>
                    </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end relative">
                    {/* Purple gradient circle background */}
                    <div
                        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-60 -z-10"></div>
                    {/* Phone Frame */}
                    <div className="relative">
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
                                    <div className="flex items-center justify-between mb-6">
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
                                    </div>

                                    {/* Toggle Buttons */}
                                    <div className="flex bg-white/30 backdrop-blur-sm rounded-full p-1 mb-8">
                                        <button
                                            className="flex-1 py-2 px-4 bg-purple-500 text-white rounded-full text-sm font-medium">
                                            Body View
                                        </button>
                                        <button className="flex-1 py-2 px-4 text-gray-600 text-sm font-medium">
                                            List View
                                        </button>
                                    </div>

                                    {/* 3D Character */}
                                    <div className="flex-1 flex items-center justify-center relative">
                                        <div
                                            className="w-32 h-40 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-full relative">
                                            {/* Simple character representation */}
                                            <div
                                                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-pink-400 rounded-full"></div>
                                            <div
                                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-blue-400 rounded-t-lg"></div>

                                            {/* Info markers */}
                                            <div
                                                className="absolute top-12 -left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                2
                                            </div>
                                            <div
                                                className="absolute bottom-8 -right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;