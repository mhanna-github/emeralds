import localFont from 'next/font/local';

export const Hatton = localFont({
    src: [
        {
            path: './subset-PPHatton-Medium.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: './subset-PPHatton-MediumItalic.woff2',
            weight: 'normal',
            style: 'italic',
        },
        {
            path: './subset-PPHatton-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: './subset-PPHatton-UltralightItalic.woff2',
            weight: '200',
            style: 'italic',
        },
    ],
    variable: '--font-hatton',
});

