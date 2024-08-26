"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-900">ALEF INVEST™</span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Button variant="ghost" asChild>
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#services">Services</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" asChild>
                  <Link href="#contact">Contact</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}