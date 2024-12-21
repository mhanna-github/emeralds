import { LinkButton } from './LinkButton';
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { PrismicRichText } from '@prismicio/react';

export async function Footer() {
    const client = createClient();
    const footer = await client.getSingle("footer");

    const emailLabel = (isFilled.link(footer.data.email) 
        ? footer.data.email.text || footer.data.email.url 
        : '') || '';

    return (
        <footer id="contacts" className="px-3 min-h-[60vh] lg:min-h-screen flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-col w-fit lg:w-[70%] text-left gap-5 lg:gap-10">
                    <div 
                        data-scroll 
                        data-scroll-css-progress 
                        data-scroll-offset="10%, 75%" 
                        style={{opacity: `var(--progress)`}} 
                        className="w-fit text-h5 font-hatton italic"
                    >
                        {footer.data.text && <PrismicRichText field={footer.data.text} />}
                    </div>
                    <LinkButton 
                        href={footer.data.email} 
                        variant='footer'
                        label={emailLabel}
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between w-full py-4 align-center content-center">
                <span className="text-small"> &copy; {new Date().getFullYear()}</span>
                <div className="flex flex-row gap-2 align-center content-center">
                    <LinkButton 
                        href={{ 
                            link_type: 'Web',
                            url: 'https://example.com/'
                        }}
                        variant='nav'
                        label='Instagram'
                    />
                    <LinkButton 
                        href={{ 
                            link_type: 'Web',
                            url: 'https://example.com/'
                        }}
                        variant='nav'
                        label='Linkedin'
                    />
                    <LinkButton 
                        href={{ 
                            link_type: 'Web',
                            url: 'https://example.com/'
                        }}
                        variant='nav'
                        label='Facebook'
                    />
                </div>
            </div>
        </footer>
    )
}