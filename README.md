# Font stack

Determine a good font stack and efficient font-faces for supported languages.

In general we want to use lato for those languages it supports well, and fallback to an appropriate font if lato doesn't support a script.

Currently our font stack is `Lato, Arial, Helvetica Neue, sans-serif`.

Our titles use a light font weight, Arial is much bolder than Lato 300, so sometimes in other languages a really bold title character will reach out and slap you in the face.

Additionally no matter the language most webpages include some latin characters so we want our latin character set to be similar to a systems fallback font.

For scripts that are not supported by lato, we will want a good set of fallbacks. A new-ish, well supported general fallback [system-ui](https://caniuse.com/?search=system-ui) seems to work pretty well and should have good language support because it's the system's ui font, segoe and helvetica provided for safety.

**So**

New stack: `Lato, system-ui, 'Segoe UI', 'Helvetica Neue', sans-serif`.

**Also**

We have been serving an "old" version of lato for awhile, we should probably update it to the "newest 1.0" version of lato that google is currently serving to get a few more characters.

*Lato 2.0* Looks different than the 1.0 version of lato we have been using. Also it has rendering issues on windows that move the characters up, due to anti-aliasing, works fine on Mac (safari/chrome - not firefox). This is especially problematic on contained or outlined buttons where the label is noticeably too high in the button on windows. - So it's out. 

Google's lato 1 v24 has some compatibility fixes that can't hurt to update, that plus the new font stack should give us good language support without being too jarring visually.

## Things left to test

A better fallback than `system-ui` \ `Segoe UI`? maybe `Segoe UI Variable Display` or `Calibri` the lowercase `g` matches better, lc `a` also matches-ish.

* [windows fonts](https://learn.microsoft.com/en-us/typography/fonts/windows_10_font_list)
* [segoe ui variable](https://learn.microsoft.com/en-us/windows/apps/design/signature-experiences/typography)
* [calibri](https://learn.microsoft.com/en-us/typography/font-list/calibri)

Mac fallback font.

...


## Languages

ref [Languages to Scripts table](https://www.unicode.org/cldr/charts/47/supplemental/languages_and_scripts.html)

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

ref [google fonts](https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600;700;900&display=swap).

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

font squirrel format

```sh
# latin 
0000-00FF,0131,0152-0153,02BB-02BC,02C6,02DA,02DC,0304,0308,0329,2000-206F,20AC,2122,2191,2193+2212,2215,FEFF,FFFD
# latin-ext
0100-02BA,02BD-02C5,02C7-02CC,02CE-02D7,02DD-02FF,0304,0308,0329,1D00-1DBF,1E00-1E9F,1EF2-1EFF,2020,20A0-20AB,20AD-20C0,2113,2C60-2C7F,A720-A7FF

# Not in test
# cyrillic
0301,0400-045F,0490-0491,04B0-04B1,2116
# cyrillic-ext
0460-052F,1C80-1C8A,20B4,2DE0-2DFF,A640-A69F,FE2E-FE2F
# greek
0370-0377,037A-037F,0384-038A,038C,038E-03A1,03A3-03FF
# greek-ext
1F00-1FFF
# vietnamese
0102-0103,0110-0111,0128-0129,0168-0169,01A0-01A1,01AF-01B0,0300-0301,0303-0304, 0308-0309,0323,0329,1EA0-1EF9,20AB
```

## Links

* [Adobe font subset tool](https://fonts.adobe.com/my_fonts#web_projects-section)
* [Unicode blocks](https://www.unicodepedia.com/groups/)
* [Languages to Scripts table](https://www.unicode.org/cldr/charts/47/supplemental/languages_and_scripts.html)
* [Lato Fonts](https://www.latofonts.com/)
* https://tech.busuu.com/handling-css-font-stacks-for-multi-language-websites-cf852e321f06
