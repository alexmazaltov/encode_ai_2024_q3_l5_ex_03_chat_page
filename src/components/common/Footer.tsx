"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">ALEF INVEST™</h2>
            <p className="text-gray-600">Solving core's security issues / Unix / Windows / Mobile / Web3 / Blockchain</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact</h2>
            <ul className="text-gray-600">
              <li>Ozerna str. 6 / Artemivka / 08336</li>
              <li>Phone: +38 (066) 790 7666</li>
              <li>Email: info@alefinvest.xyz</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
            <ul className="text-gray-600">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} ALEF INVEST™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}