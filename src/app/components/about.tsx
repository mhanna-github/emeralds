import { PrismicNextImage } from "@prismicio/next";

interface AboutProps {
    span1: string;
    title1: string;
    text1: string;
    span2: string;
    title2: string;
    text2: string;
    image1: string;
    image2: string;
    image3: string;
}

export function About({ span1, title1, text1, span2, title2, text2, image1, image2, image3 }: AboutProps) {
    return (
        <section id="about" className="px-3 mt-16 lg:mt-28">
            <div className="flex flex-col gap-[50px] lg:flex-row justify-between">
                <div className="lg:w-[640px] flex flex-col items-start">
                    <div className="flex flex-row-reverse items-start gap-[20px]">
                        <span className="text-p uppercase font-thin italic font-hatton text-right">
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
                    <div className="flex flex-row items-start gap-[20px]">
                        <span className="text-p uppercase font-thin italic font-hatton text-left ">
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
            <div className="mt-16 lg:mt-28 lg:w-1/2 flex flex-row gap-2 justify-center lg:justify-start lg:gap-5">
                <figure className="w-1/2 h-full mt-[40px]">
                    <PrismicNextImage 
                        className="w-full h-full object-cover"
                        field={image1}
                        alt="" />
                </figure>
                <div className="w-1/2 flex flex-col gap-2 lg:gap-5">
                    <figure className="w-[80%] lg:w-[90%] h-full">
                        <PrismicNextImage 
                            className="w-full h-full object-cover"
                            field={image2}
                            alt="" />
                    </figure>
                    <figure className="w-full h-full">
                        <PrismicNextImage 
                            className="w-[100%] lg:w-full h-full object-cover"
                            field={image3}
                            alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}