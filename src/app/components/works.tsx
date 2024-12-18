'use client'
import { PrismicNextImage } from "@prismicio/next";
import '@splidejs/splide/css/core';
import { Splide } from '@splidejs/splide';
import { useEffect } from 'react';

interface WorksProps {
    image: string | null;
}

export function Works({works}:{ works: WorksProps[] }) {
    useEffect(() => {
        const splide = new Splide('.splide', {
            direction: 'ttb',
            height   : '100vh',
            wheel    : true,
            waitForTransition: true,
            wheelMinThreshold: 20,
            wheelStep: 1,
            arrows: false,
            pagination: false,
            perPage: 1,
            perMove: 1,
            speed: 800,
            easing: 'ease',
            lazyLoad: 'nearby',
            releaseWheel: true,
        });
        
        splide.mount();
        
        return () => {
            splide.destroy();
        };
    }, []);
    
    return (
        <section className="mt-16 lg:mt-28">
            <div className="flex flex-row items-start ml-[10%] gap-[20px]">
                <span className="text-p uppercase font-thin italic font-hatton text-right">
                    Some of
                </span>
                <h2 className="text-h2 uppercase font-hatton">
                    Works
                </h2>
            </div>
            <div className="splide">
                <div className="splide__track"> 
                    <ul className="splide__list">
                        {works.map((work, index) => (
                            <li key={index} className="splide__slide">
                                <figure className="w-full h-[100vh]">
                                    <PrismicNextImage 
                                        field={work.image} 
                                        alt=""
                                        className="w-full h-full object-cover" 
                                    />
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}