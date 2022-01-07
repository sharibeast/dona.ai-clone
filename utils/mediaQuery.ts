type MediaQuery = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

const sizes: MediaQuery = {
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const media: MediaQuery = {
  sm: `@media(min-width:${sizes.sm})`,
  md: `@media(min-width:${sizes.md})`,
  lg: `@media(min-width:${sizes.lg})`,
  xl: `@media(min-width:${sizes.xl})`,
};
