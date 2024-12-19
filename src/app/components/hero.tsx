'use client'

import { KeyTextField, ImageField } from "@prismicio/types";
import Parallax from "./Parallax";

interface HomeProps {
    title: KeyTextField;
    image: ImageField | null;
}

export function Hero({ title, image, }: HomeProps) {

    return (
        <header id="home" className="w-full">
            <h1 data-scroll data-scroll-speed="0.1" className="text-h1 uppercase font-bold font-hatton">
                {title}
            </h1>
            {image && (
                <figure className="-mt-[5%] lg:-mt-[4%] w-full lg:h-[80vh] h-[40vh] relative overflow-hidden">
                    <Parallax 
                        field={image} 
                    />
                </figure>
            )}      
            <p className="mt-1 text-body text-center w-[90%] lg:w-[865px] mx-auto">
                Creating <span className="font-bold italic">custom clothes designs</span> inspired by simple things that surround us everyday. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <span className="font-bold italic">tempor</span> incididunt.
            </p>
        </header>
    )
}