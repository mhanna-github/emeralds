'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import React from 'react'
import { PrismicNextImage } from "@prismicio/next";

interface ParallaxProps {
    field: any; 
    alt?: string;
}

export default function Parallax({ field, alt = "" }: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    const translateY = useTransform(
      scrollYProgress,
      [0, 1],
      ["-40%", "0%"]
    );
  
      return (
    
        <div className="w-full overflow-hidden h-[40vh] lg:h-screen relative" ref={ref}>
            <motion.div 
                className="w-full h-[140%] absolute top-0 left-0" 
                style={{ translateY: translateY }}>
                <PrismicNextImage 
                    loading='lazy'
                    field={field} 
                    alt={alt} 
                    className="w-full h-full" 
                    style={{
                        objectFit: "cover", 
                        objectPosition: "center"
                    }} />
            </motion.div>
        </div>
      )
}
