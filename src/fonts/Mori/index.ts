import localFont from 'next/font/local';

export const Mori = localFont({
    src: [
        {
            path: './subset-PPMori-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
    ],
    variable: '--font-mori',
});
