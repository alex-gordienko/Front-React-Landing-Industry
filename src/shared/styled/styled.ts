export interface ITheme {
    bodyBackground: string;
    headerBackground: string;
    headerMenuDelim: string;
}

declare module '@emotion/react'{
    export interface Theme extends ITheme{}
}
