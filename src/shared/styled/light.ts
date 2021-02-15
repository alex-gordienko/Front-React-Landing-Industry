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
        },
        footer: 'white'
    },
    color:{
        header:{
            text:{
                default: '#3E3E3E',
                hover: 'indigo',
                active: '#E4B56B'
            },
            border: '#E4B56B',
            shadow: 'indigo'
        },
        body:{
            text:{
                default: '#3E3E3E',
                overPic: 'white'
            },
            styledElements: '#E4B56B'
        },
        footer:{
            text:{
                label: '#3E3E3E',
                default: '#AEAEAE'
            }
        }
    }
}

export default light;