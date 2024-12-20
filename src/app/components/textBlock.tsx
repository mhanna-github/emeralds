interface TextBlockProps {
    title: string;
    subtitle: string;
    text: string;
}

export function TextBlock({ title, subtitle, text }: TextBlockProps) {
    return (
        <section className="px-3 flex flex-col gap-4 mt-16 lg:mt-28">
            <h2 data-scroll data-scroll-css-progress data-scroll-offset="10%, 85%" style={{opacity: `var(--progress)`}} className="text-h3 uppercase font-hatton mr-auto w-[95%] lg:w-[75%]">{title}</h2>
            <p className="text-body uppercase text-center w-[90%] lg:w-[30%] mx-auto">{text}</p>
            <h2 data-scroll data-scroll-css-progress data-scroll-offset="10%, 99%" style={{opacity: `var(--progress)`}} className="mt-5 lg:mt-10 text-h3 uppercase font-hatton text-right ml-auto w-[95%] lg:w-[75%]">{subtitle}</h2>
        </section>
    )
}