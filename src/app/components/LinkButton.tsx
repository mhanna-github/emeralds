'use client'
import { PrismicNextLink } from '@prismicio/next';
import { LinkField, RTNode } from '@prismicio/types';
import { usePathname } from 'next/navigation';
import { MouseEvent } from 'react';

interface LinkButtonProps {
    href: any;
    label: any;
    className?: string;
    variant?: 'nav' | 'footer';
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    anchorOffset?: number;
}

export function LinkButton({ href, label, className = '', variant = 'nav', onClick: _onClick, anchorOffset = 0 }: LinkButtonProps) {

    const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
        _onClick?.(e);
        

        if (href.url && href.url.includes('#')) {
            const id = href.url.split('#')[1];
            const anchorEl = document.getElementById(id);
            
            if (!anchorEl) {
                console.warn(`Anchor element with id "${id}" not found`);
                return;
            }
            
            e.preventDefault();
            const offsetTop = anchorEl.getBoundingClientRect().top + window.scrollY;
            window.scroll({
                top: offsetTop - anchorOffset,
                behavior: 'smooth',
            });
        }
    };

    const variants: Record<NonNullable<LinkButtonProps['variant']>, string> = {
        nav: 'lg:text-small uppercase',
        footer: 'text-p uppercase w-fit text-left'
    };

    return (
        <PrismicNextLink 
            className={`inline-flex items-center group transition-colors ${variants[variant]} ${className}
                ${variant === 'footer' ? 'relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full after:w-0' : ''}`} 
            field={href} 
            onClick={onClick}
        >
            <span className={`${variant === 'footer' ? 'hidden' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>(</span>
            <span className="mx-1">{label}</span>
            <span className={`${variant === 'footer' ? 'hidden' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>)</span>
        </PrismicNextLink>  
    );
} 