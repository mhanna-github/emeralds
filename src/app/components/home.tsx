'use client'

import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

interface HomeProps {
    title: string;
    image: string | null;  
    text: string;
}

export function Main({ title, image, text }: HomeProps) {
    return (
        <main className="w-full">
            <h1 className="text-h1 uppercase font-bold font-hatton">
                {title}
            </h1>
            {image && (
                <figure className="-mt-6 lg:-mt-16 w-full lg:h-[80vh]">
                    <PrismicNextImage 
                        field={image}
                        alt=""
                        className="w-full h-full object-cover" 
                    />
                </figure>
            )}
            <p className="mt-2 text-body text-center w-[90%] lg:w-[65%] mx-auto">
                {text}
            </p>
        </main>
    )
}