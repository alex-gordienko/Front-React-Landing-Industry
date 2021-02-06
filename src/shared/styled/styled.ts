export interface ITheme {
    background:{
        header: {
            container: string;
            subcontainer: string;
            elements: string;
        };
    };
    color:{
        header:{
            text:{
                default: string;
                hover: string;
                active: string;
            };
            border: string;
            shadow: string;
        }
    }
}

declare module '@emotion/react'{
    export interface Theme extends ITheme{}
}
