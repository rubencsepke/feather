interface isMaxCharactersProps {
  text: string,
  maxCharacterLength: number
}

export const isMaxCharacters = ({text, maxCharacterLength}: isMaxCharactersProps): boolean => {
  return text.length >= maxCharacterLength;
}

export const getRemainCharacters = (text: string, maxCharacterLength: number): number => {
  const max = maxCharacterLength;
  return max - (text.length);
}
