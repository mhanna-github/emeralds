import { PrismicNextLink } from "@prismicio/next";

interface NavProps {
    link: string;
    title: string;
}

export function Nav({ navigation }: { navigation: NavProps[] }) {

    return (
        <nav className="px-5 lg:px-12 mt-4">
            <ul className="hidden lg:flex flex-row justify-end gap-4 text-small">
                {navigation.map((item) => (
                    <li key={item.title}>    
                        <a href={item.link} className="uppercase group">
                            <span className="opacity-0 group-hover:opacity-100">(</span>
                            <span className="mx-1">{item.title}</span>
                            <span className="opacity-0 group-hover:opacity-100">)</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}