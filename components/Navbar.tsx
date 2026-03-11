"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/for-you-today", label: "For You Today" },
  { href: "/learn", label: "Learn" },
  { href: "/quizzes", label: "Quizzes" },
  { href: "/community", label: "Community" },
  { href: "/budget-calculator", label: "Budget Calculator" },
  { href: "/freeze-the-trend", label: "Freeze the Trend" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-sarasage-soft/40 bg-sarasage-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-sarasage-sage/10">
            <Image
              src="/sarasage-logo-dark.png"
              alt="Sarasage logo"
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif text-lg tracking-tight text-sarasage-gold">
            Sarasage
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-1 transition-colors ${
                pathname === item.href
                  ? "text-sarasage-gold"
                  : "text-sarasage-soft/90 hover:text-sarasage-gold"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-sarasage-gold" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/learn"
            className="rounded-full bg-sarasage-gold px-4 py-2 text-sm font-medium text-sarasage-deep shadow-sm transition hover:-translate-y-0.5 hover:bg-sarasage-gold-soft hover:shadow-md"
          >
            Start Learning
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-sarasage-soft/40 px-3 py-2 text-xs text-sarasage-soft md:hidden"
          aria-label="Open navigation"
        >
          <span className="mr-2">Menu</span>
          <span className="flex flex-col gap-0.5">
            <span className="h-[1px] w-4 bg-sarasage-soft" />
            <span className="h-[1px] w-3 bg-sarasage-soft" />
          </span>
        </button>
      </div>
    </header>
  );
}

