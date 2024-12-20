import SlightParallax from "./SLightParallax";
import { ImageField } from "@prismicio/types";

interface AboutProps {
    span1: string;
    title1: string;
    text1: string;
    span2: string;
    title2: string;
    text2: string;
    image1: ImageField | null;
    image2: ImageField | null;
    image3: ImageField | null;
}

export function About({ span1, title1, text1, span2, title2, text2, image1, image2, image3 }: AboutProps) {
    return (
        <section id="about" className="px-3 mt-16 lg:mt-28">
            <div className="flex flex-col gap-[50px] lg:flex-row justify-between">
                <div className="lg:w-[640px] flex flex-col items-start">
                    <div data-scroll data-scroll-css-progress data-scroll-offset="10%, 75%" style={{opacity: `var(--progress)`}} className="flex flex-row-reverse items-start gap-[20px]">
                        <span data-scroll data-scroll-speed="0.03" className="text-p uppercase font-thin italic font-hatton text-right">
                            {span1}
                        </span>
                        <h2 className="text-h2 uppercase font-hatton">
                            {title1}
                        </h2>
                    </div>
                    <p className="text-body uppercase">
                        {text1}
                    </p>
                </div>
                <div className="lg:w-[640px] lg:mt-[300px] flex flex-col items-end">
                    <div data-scroll data-scroll-css-progress data-scroll-offset="10%, 75%" style={{opacity: `var(--progress)`}} className="flex flex-row items-start gap-[20px]">
                        <span data-scroll data-scroll-speed="0.03" className="text-p uppercase font-thin italic font-hatton text-left ">
                            {span2}
                        </span>
                        <h2 className="text-h2 uppercase font-hatton text-right">
                            {title2}
                        </h2>
                    </div>
                    <p className="text-body uppercase text-right">
                        {text2}
                    </p>
                </div>
            </div>
            <div className="mt-16 lg:mt-36 lg:w-1/2 flex flex-row gap-[0.75rem] justify-center lg:justify-start lg:gap-5">
                <figure className="w-full h-full mt-[20px] aspect-[425/545]">
                    <SlightParallax field={image1} />
                </figure>
                <div className="w-full flex flex-col gap-[0.75rem] lg:gap-5">
                    <figure className="w-[90%] h-full aspect-[315/410]">
                        <SlightParallax field={image2} />
                    </figure>
                    <figure className="w-full h-full aspect-[425/570]">
                        <SlightParallax field={image3} />
                    </figure>
                </div>
            </div>
        </section>
    )
}