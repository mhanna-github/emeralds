'use client'

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?:  'nav' | 'footer';
}

export function LinkButton({ href, children, className = '', variant = 'nav' }: LinkButtonProps) {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    const variants: Record<NonNullable<LinkButtonProps['variant']>, string> = {
        nav: 'text-small uppercase',
        footer: 'text-p uppercase border rounded-full border-black px-4 py-2 hover:bg-black hover:text-white transition-colors'
    };

    return (
        <a 
            href={href}
            onClick={scrollToSection}
            className={`inline-flex items-center group transition-colors ${variants[variant]} ${className}`}
        >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">(</span>
            <span className="mx-1">{children}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">)</span>
        </a>
    );
} 