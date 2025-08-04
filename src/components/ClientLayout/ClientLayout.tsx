"use client";

import { useState, useEffect } from "react";
import { ReactNode } from "react"; // Import ReactNode for typing children
import Loader from "../loader/page";

interface ClientLayoutProps {
    children: ReactNode; // Explicitly type the children prop
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 3500);
        return () => clearTimeout(timer);
    }, []);

    if (!showContent) {
        return <Loader />;
    }

    return children;
};

export default ClientLayout;