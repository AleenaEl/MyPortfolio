
"use client";

import { useState, useEffect } from "react";
import Loader from "../loader/page";


const ClientLayout = ({ children }) => {
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