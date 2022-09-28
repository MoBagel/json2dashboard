import colors from '../styles/color';

export const injectColorStyle = (style: HTMLStyleElement): HTMLStyleElement => {
  let styles = { ...style };
  Object.keys(style).forEach((key) => {
    const colorHexCode = colors[style[key]];
    if (colorHexCode) {
      styles = {
        ...styles,
        [key]: colorHexCode,
      };
    }
  });
  return styles;
};
