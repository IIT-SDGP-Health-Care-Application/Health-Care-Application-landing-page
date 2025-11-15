"use client";

import Link from "next/link";

const NAV = [
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/support", label: "Support" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-slate-900">
            <div className="w-full px-6 sm:px-10">
                <div className="flex h-20 items-center justify-between">
                    {/* Left: Brand */}
                    <div className="flex items-center gap-10">
                        <Link href="/public" className="flex items-center gap-2">
                            <LogoIcon className="h-7 w-7 text-indigo-500" />
                            <span className="text-xl font-semibold text-slate-900 dark:text-white">
                                Appline
                            </span>
                        </Link>

                        {/* Center: Nav */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-8 text-[15px] font-medium">
                                {NAV.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

function LogoIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" className={className} fill="currentColor">
            <circle cx="10" cy="26" r="6" opacity="0.9" />
            <rect x="18" y="14" width="8" height="20" rx="4" opacity="0.9" />
            <rect x="30" y="10" width="8" height="24" rx="4" opacity="0.9" />
        </svg>
    );
}
