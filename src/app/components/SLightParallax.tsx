'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import React from 'react'
import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/types";
interface SLightParallaxProps {
  field: ImageField | null;
  width: number;
  height: number;
  quality: number;
}

export default function SlightParallax({  field, width, height }: SLightParallaxProps) {
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
    
        <div className="w-full overflow-hidden h-full relative" ref={ref}>
                <motion.div 
                className="w-full h-[140%] absolute top-0 left-0" 
                style={{ translateY: translateY }}>
                <PrismicNextImage 
                    loading='lazy'
                    field={field} 
                    width={width}
                    height={height}
                    quality={100}
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
