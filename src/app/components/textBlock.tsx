'use client'
import { RichTextField } from "@prismicio/types";
import { PrismicRichText } from '@prismicio/react';

interface TextBlockProps {
    title: RichTextField;
    subtitle: RichTextField;
    text: string;
}

export function TextBlock({ title, subtitle, text }: TextBlockProps) {
    return (
        <section className="px-3 flex flex-col gap-4 mt-16 lg:mt-28">
            <div data-scroll data-scroll-css-progress data-scroll-offset="10%, 85%" style={{opacity: `var(--progress)`}} className="text-h3 uppercase font-hatton mr-auto w-fit">
                <PrismicRichText 
                    field={title}
                    components={{
                        paragraph: ({ children }) => <h2>{children}</h2>
                    }}
                />
            </div>
            <p className="text-body uppercase text-center w-[90%] lg:w-[30%] mx-auto">{text}</p>
            <div data-scroll data-scroll-css-progress data-scroll-offset="10%, 99%" style={{opacity: `var(--progress)`}} className="mt-5 lg:mt-10 text-h3 uppercase font-hatton text-right ml-auto w-fit">
                <PrismicRichText 
                    field={subtitle}
                    components={{
                        paragraph: ({ children }) => <h2>{children}</h2>
                    }}
                />
            </div>
        </section>
    )
}