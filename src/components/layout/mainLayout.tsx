"use client";
import React from "react";
import Navbar from "@/components/shared/navBar";
import Footer from "@/components/shared/footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative min-h-screen flex flex-col bg-background">
            {/* Navbar at the top */}
            <Navbar />

            {/* Main content area */}
            <main className="flex-1 z-10 justify-center items-center w-full">
                {/* Content container with max-width and centering */}
                <div className="w-full">
                    {children}
                </div>
            </main>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
};

export default MainLayout;
