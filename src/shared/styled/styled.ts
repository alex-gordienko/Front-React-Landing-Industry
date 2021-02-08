export interface ITheme {
    background:{
        header: {
            container: string;
            subcontainer: string;
            elements: string;
        };
        body:{
            container: string;
            subcontainer: string;
            overPic: string;
        }
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
        };
        body:{
            text:{
                default: string;
                overPic: string;
            }
            styledElements: string;
        }
    }
}

declare module '@emotion/react'{
    export interface Theme extends ITheme{}
}
