"use client";

import { HeartPulse, Bell, Users, Watch, Shield, LayoutDashboard } from "lucide-react";
import {JSX} from "react";

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

export default function Features() {
    return (
        <section className="py-20 bg-gray-50" id="features">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Discover how MediSync simplifies your health journey through smart technology and real-time care.
                </p>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left"
                        >
                            <div className="flex items-center mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
