import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import MainLayout from "@/components/layout/mainLayout";

export const metadata: Metadata = {
    title: "Grand Minaro"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* Link to Carla Sans via CDN */}
            <link
                href="https://fonts.cdnfonts.com/css/carla-sans"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@8.4.5/swiper-bundle.min.css"
            />
            {/* Favicon */}
            <link rel="icon" href="/assets/Favicon.svg" type="image/x-icon" />
            <title>Grand Minaro</title>
        </head>
        <body>
        <MainLayout>{children}</MainLayout>
        </body>
        </html>
    );
}
