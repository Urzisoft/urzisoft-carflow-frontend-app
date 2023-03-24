export const Breakpoints = {
    small: '576px',
    medium: '768px',
    large: '1200px',
    xxLarge: '1920px',
};

export const minWidthQuery = (breakpoint: string) =>
    `@media screen and (min-width: ${breakpoint})`;

export const maxWidthQuery = (breakpoint: string) =>
    `@media screen and (max-width: ${breakpoint})`;

export const minHeightQuery = (breakpoint: string) =>
    `@media screen and (min-height: ${breakpoint})`;

export const maxHeightQuery = (breakpoint: string) =>
    `@media screen and (max-height: ${breakpoint})`;