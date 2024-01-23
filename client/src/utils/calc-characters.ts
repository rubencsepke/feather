interface isMaxCharactersProps {
  text: string,
  maxCharacterLength: number
}

export const isMaxCharacters = ({text, maxCharacterLength}: isMaxCharactersProps): boolean => {
  return text.length >= maxCharacterLength;
}

export const getRemainCharacters = (text, maxCharacterLength: number): number => {
  const max = maxCharacterLength;
  let number = max - (text.length);
  return number;
}
