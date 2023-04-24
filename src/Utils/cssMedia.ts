export const Breakpoints = {
    small: '576px',
    medium: '768px',
    large: '1200px',
    xxLarge: '1920px',
};

export enum SCREEN_SIZES {
    desktop = 1200,
    tablet = 768,
    mobile = 400
}

export const Colors = {
    backgroundColor: '#ca0606',
    buttonBackgroundHoverState: '#ca0606',
    buttonSidebarBackgroundHoverState: "#ffffff",
    buttonSidebarIconHoverState: '#ca0606',
    textsColor: '#ffffff',
}

export const minWidthQuery = (breakpoint: string) =>
    `@media screen and (min-width: ${breakpoint})`;

export const maxWidthQuery = (breakpoint: string) =>
    `@media screen and (max-width: ${breakpoint})`;

export const minHeightQuery = (breakpoint: string) =>
    `@media screen and (min-height: ${breakpoint})`;

export const maxHeightQuery = (breakpoint: string) =>
    `@media screen and (max-height: ${breakpoint})`;