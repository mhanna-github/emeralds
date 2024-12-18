'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import React from 'react'
import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/types";
interface SLightParallaxProps {
  field: ImageField | null;
}

export default function SlightParallax({  field }: SLightParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    const translateY = useTransform(
      scrollYProgress,
      [0, 1],
      ["-50%", "25%"]
    );
  
      return (
    
        <div className="w-full  overflow-hidden h-[40vh] lg:h-[60vh]  relative" ref={ref}>
                <motion.div 
                className="w-full h-[140%] absolute top-0 left-0" 
                style={{ translateY: translateY }}>
                <PrismicNextImage 
                    loading='lazy'
                    field={field} 
                    alt=""
                    className="w-full h-full" 
                    style={{
                        objectFit: "cover", 
                        objectPosition: "center"
                    }} />
            </motion.div>
        </div>
      )
}
