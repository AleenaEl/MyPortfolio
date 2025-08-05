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
       
          <div className="wrapper">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
          </div>
      </div>
  )
}

export default Loader
