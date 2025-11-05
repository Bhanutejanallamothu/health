'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatedLogoutButton } from "./animated-logout-button";
import './animated-logout-button.css';
import { useMemo } from "react";

const navLinks = [
  { href: "/volunteer/dashboard", label: "Dashboard" },
  { href: "/volunteer/patient-registration", label: "Patient Registration" },
  { href: "/volunteer/view-queues", label: "View Queues" },
];

export function Navbar() {
  const pathname = usePathname();

  const isAuthPage = useMemo(
    () => pathname.startsWith("/volunteer") || pathname.startsWith("/admin"),
    [pathname]
  );
  
  const isLoginPage = useMemo(
    () =>
      pathname === "/" ||
      pathname.startsWith("/login") ||
      pathname.startsWith("/signup"),
    [pathname]
  );

  if (isLoginPage) {
    return null; // Don't show navbar on login pages
  }

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container flex h-14 items-center justify-between rounded-lg border border-border/60 bg-card/60 px-6 shadow-lg backdrop-blur-lg">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://swecha.org/sites/default/files/Swecha-Telangana-Logo-124w.png"
            alt="Swecha Logo"
            width={124}
            height={41}
          />
        </Link>
        <div className="flex items-center gap-4">
          {!isLoginPage && (
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
          {isAuthPage && (
            <>
              <div className="hidden md:flex items-center gap-2">
                <AnimatedLogoutButton />
              </div>
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="grid gap-4 py-6">
                      {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-primary">
                          {link.label}
                        </Link>
                      ))}
                      <div className="mt-4">
                        <AnimatedLogoutButton />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </>
          )}
          {isLoginPage && <div className="md:hidden w-8"></div> /* Spacer */}
        </div>
      </div>
    </header>
  );
}