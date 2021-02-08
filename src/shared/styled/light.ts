import { ITheme } from './styled';

const light:ITheme = {
    background:{
        header:{
            container: 'white',
            subcontainer: '#ECECEC',
            elements: 'white',
        },
        body:{
            container: 'white',
            subcontainer: 'white',
            overPic: 'rgba(0,0,0, 0.5)'
        }
    },
    color:{
        header:{
            text:{
                default: 'black',
                hover: 'indigo',
                active: 'orange'
            },
            border: 'orange',
            shadow: 'indigo'
        },
        body:{
            text:{
                default: 'black',
                overPic: 'white'
            },
            styledElements: 'orange'
        }
    }
}

export default light;