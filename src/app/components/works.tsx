'use client'

import Parallax from "./Parallax";

interface WorksProps {
    image: string | null;
}

export function Works({works}:{ works: WorksProps[] }) {
    
    return (
        <section id="works" className="mt-16 lg:mt-28">
            <div data-scroll data-scroll-css-progress data-scroll-offset="10%, 75%" style={{opacity: `var(--progress)`}} className="flex flex-row items-start ml-[10%] gap-[20px]">
                <span data-scroll data-scroll-speed="0.05" className="text-p uppercase font-thin italic font-hatton text-right">
                    Some of
                </span>
                <h2 className="text-h2 uppercase font-hatton">
                    Works
                </h2>
            </div>
                <ul>
                    {works.map((work, index) => (
                        <li className="h-[40vh] lg:h-[100vh]  scale-[1] relative overflow-hidden" key={index}>
                            <figure className="w-full overflow-hidden">
                                <Parallax field={work.image} alt="" />
                            </figure>
                        </li>
                    ))}
                </ul>
        </section>
    )
}