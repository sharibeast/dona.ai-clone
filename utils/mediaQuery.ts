type MediaQuery = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

const sizes: MediaQuery = {
  sm: '500px',
  md: '993px',
  lg: '1000px',
  xl: '1280px',
};

export const media: MediaQuery = {
  sm: `@media(min-width:${sizes.sm})`,
  md: `@media(min-width:${sizes.md})`,
  lg: `@media(min-width:${sizes.lg})`,
  xl: `@media(min-width:${sizes.xl})`,
};
