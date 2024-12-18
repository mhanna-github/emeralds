import { LinkButton } from "./LinkButton";

interface FooterProps {
    title: string;
    text: string;
}

export function Footer({title, text}: FooterProps) {
    return (
        <footer id="contacts" className="px-3 min-h-[60vh] lg:min-h-screen flex flex-col justify-between ">
            <div className="flex flex-col justify-center items-center content-center text-center gap-5 ">
                <h1 data-scroll data-scroll-css-progress data-scroll-offset="10%, 75%" style={{opacity: `var(--progress)`}} className="text-big uppercase font-bold font-hatton">{title}</h1>
                <div className="mt-[9vh] flex flex-col justify-center items-center content-center text-center gap-5">
                    <p className="w-[90%] lg:w-[570px] text-body uppercase">{text}</p>
                    <LinkButton href='https://example.com/' variant='footer'>Get in touch</LinkButton>
                </div>
            </div>
            <div className="flex flex-row justify-between w-full mt-auto py-4">
                <span className="text-small "> &copy; {new Date().getFullYear()}</span>
                <div className="flex flex-row gap-2">
                    <LinkButton href='https://example.com/' variant='nav'>Instagram</LinkButton>
                    <LinkButton href='https://example.com/' variant='nav'>Linkedin</LinkButton>
                </div>
            </div>
        </footer>
    )
}