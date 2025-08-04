"use client"
import React, { FC, useEffect, useState } from 'react'

const Loader: FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3500); // Show for 3 sec
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;
  return (
      <div className="h-screen w-screen flex items-center justify-center ">
          <div className="bar">
              <div className="ball"></div>
          </div>
      </div>
  )
}

export default Loader
