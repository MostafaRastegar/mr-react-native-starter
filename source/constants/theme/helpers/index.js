/* eslint-disable */
/**
 * @function
 * @name px
 * @description returns convert pt to pixel
 * @param pt
 * @returns {function(*): string}
 */
export const ptToPx = (pt) => `${Math.round(pt * 0.95)}px`;

/**
 * @function
 * @name px
 * @description Will handle every thing about rem, just supply the value
 * @returns {function(*): string}
 */
export const px = function remSizes() {
  return () =>
    [...arguments]
      .map((size) =>
        size ? (typeof size !== 'number' ? size : ptToPx(size)) : '0',
      )
      .join(' ');
};

/**
 * @function
 * @name jsRgba
 * @description return rgba
 * @param hex
 * @returns {{red: number, green: number, blue: number, opacity: 1}}
 */
export const jsRgba = (red, green, blue, opacity = 1) =>
  `rgba(${red}, ${green}, ${blue}, ${opacity})`;

/**
 * @function
 * @name color
 * @description Make a color, or a shade of color
 * @param name
 * @param shade
 * @returns {function(*): string}
 */
export const color = (name, shade = false) => (props) =>
  shade ? `${props.theme.colors[name][shade]}` : `${props.theme.colors[name]}`;
/**
 * @function
 * @name color
 * @description Make a color, or a shade of color
 * @param name
 * @param shade
 * @returns {function(*): string}
 */

export const styles = (name) => (props) => `${props.theme.styles[name]}`;
/**
 * @function
 * @name makeShadow
 * @description returns a shadow suitable for css
 * @param   hOffset   {number|string}    horizontal offset of shadow, wil be multiplied in rem
 * @param   vOffset   {number|string}    vertical offset of shadow, wil be multiplied in rem
 * @param   blur      {number|string}    blur of the shadow, wil be multiplied in rem
 * @param   spread    {number|string}    spread of the shadow, wil be multiplied in rem
 * @param   color     {string}    color of the shadow
 * @param   inset     {boolean}    blur of the shadow, wil be multiplied in rem
 * @returns {string}
 */
export const makeShadow = (
  hOffset,
  vOffset,
  blur,
  spread,
  colory,
  inset = false,
) =>
  `${px(hOffset)} ${px(vOffset)} ${px(blur)} ${px(spread)} ${colory} ${
    inset ? ' inset' : ''
  }`;

/**
 * @function
 * @name viewport
 * @description returns the viewport width based on pixel
 * @param size
 * @param threshold
 * @returns {function(*): string}
 */
export const viewport = (size, threshold = 0) => (props) =>
  `${props.theme.viewports[size] - threshold}px`;
