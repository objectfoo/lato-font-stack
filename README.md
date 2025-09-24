# Font stack

Determine a good font stack and efficient font-faces for supported languages.

In general we want to use lato for those languages it supports well, and fallback to an appropriate font if lato doesn't support a script.

Currently our font stack is `Lato, Helvetica Neue, Arial, sans-serif`.

For scripts that are not supported by lato, [lato font support](https://www.latofonts.com/) we will want to a good set of fallbacks. A well supported general fallback is `system-ui` seems to work and by default is something that the browsers system supports because it's their system ui font. Full stack: `Lato, system-ui, 'Segoe UI', 'Helvetica Neue', sans-serif`.

Next is organizing our font into bite sized chunks to avoid initial load performance issues, which could affect current SLAs.

After much research I think we should take the *unicode ranges by script* that google fonts uses when serving public fonts, they are optimized for web use. These ranges define the exact characters needed for a particular language, most of which include most of the latin characters. This allows a page to download only they fonts needed on demand.

All the language font faces can be defined at the same place. If the browser doesn't need to download a font face it won't. This means nothing special needs to be done for translation purposes.


## Languages

| Name                  | code  | script            |
| --------------------- | ----- | ----------------- |
| Arabic                | ar    | Arab              |
| Chinese               | zh    | ??                |
| Dutch                 | nl    | Latn              |
| English               | en    | Latn              |
| English - gb          | en-gb | Latn              |
| French                | fr    | Latn              |
| French - Canada       | fr-ca | Latn              |
| German                | de    | Latn              |
| Hebrew                | he    | Hebr              |
| Hindi                 | hi    | Deva, Latin, Mahj |
| Indonesia             | id    | Latn, Arab        |
| Italian               | it    | Latn              |
| Japanese              | ja    | Jpan              |
| Korean                | ko    | Kore              |
| Polish                | pl    | Latn              |
| Portuguese            | pt    | Latn              |
| Portuguese - Portugal | pt-pt | Latn              |
| Slovak                | sk    | Latn              |
| Spanish               | es    | Latn              |
| Thai                  | th    | Thai              |
| Turkish               | tr    | Latn, Arab        |
| Vietnamese            | vi    | Hani, Latn        |


## Unicode ranges by script

From [google fonts](https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600;700;900&display=swap).

```css
/* latin-ext */
@font-face {
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
```

## Links

* [Adobe font subset tool](https://fonts.adobe.com/my_fonts#web_projects-section)
* [Unicode blocks](https://www.unicodepedia.com/groups/)
* [Languages to Scripts table](https://www.unicode.org/cldr/charts/47/supplemental/languages_and_scripts.html)
* [Lato Fonts](https://www.latofonts.com/)
* https://tech.busuu.com/handling-css-font-stacks-for-multi-language-websites-cf852e321f06



