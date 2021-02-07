import { ITheme } from './styled';

const light:ITheme = {
    background:{
        header:{
            container: 'white',
            subcontainer: '#ECECEC',
            elements: 'white',
        },
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
        }
    }
}

export default light;