import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Poppins as FontPopins,
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const fontPopins = FontPopins({
  subsets: ['latin'],
  variable: '--font-popins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
