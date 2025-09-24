import Box from "@mui/material/Box";


// Common characters in English, French, German, Italian, Portuguese, and Spanish
export const commonCharacters = [
  // Uppercase
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï",
  "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Œ", "Ù", "Ú", "Û", "Ü", "Ý", "Ÿ", "Š", "Ž",
  // Lowercase
  ..."abcdefghijklmnopqrstuvwxyz",
  "à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï",
  "ñ", "ò", "ó", "ô", "õ", "ö", "ø", "œ", "ù", "ú", "û", "ü", "ý", "ÿ", "š", "ž",
  // Common punctuation
  "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":",
  ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",
  "¡", "¿", "«", "»", "‚", "„", "…", "‹", "›", "§", "¶", "·", "©", "®", "°", "€"
];

export function CharacterGrid(props: { chars: string[]; }): React.ReactNode {
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, p: 1 }}>
            {props.chars.map((char) => (
                <Box
										title={`U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`}
                    key={char}
                    sx={{
                        fontSize: 16,
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #ccc",
                        borderRadius: 2,
                        background: "#fafafa",
												position: "relative",
												"& .charCode": {
													position: "absolute",
													top: 2,
													left: 4,
													fontSize: 8,
													color: "#888"
												}
                    }}
                >
										<span className="charCode">{`U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`}</span>
                    {char}
                </Box>
            ))}
        </Box>
    );
}
