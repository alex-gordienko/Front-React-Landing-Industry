import {ILanguage} from './language';

const english:ILanguage = {
    header:{
        menu:{
            main: 'Main',
            service: 'Service',
            products: 'Our Products',
            about: 'About us',
            contacts: 'Contacts'
        },
        search: 'Search',
        langChange:{
            toRU: 'Русский',
            toENG: 'English',
            toUA: 'Украинский'
        }
    },
    body:{
        slider:{
            slide1: 'High-precision manufacturing of metal products according to drawings',
            slide2: 'Making something that you will definitely like',
            slide3: '* Something very exciting *',
            slide4: 'I don\'t know what to say, but I need to fill in the timeline',
            slide5: 'What have I forgotten here?'
        },
        contentBlock1:{
            label: 'Services',
            elem1: 'Equipment Manufacturing',
            elem2: 'Metal furniture',
            elem3: 'Steel structures',
            elem4: 'Metalworking',
            elem5: 'Cut metal',
            elem6: 'Design Bureau',
            elem7: 'Equipment rental',
            elem8: 'Equipment repair'
        },
        contentBlock2:{
            label: 'Our company',
            elem1:{
                elemLabel: 'Why us?',
                text: 'People are professionals with extensive experience. A full range of metalworking works in one place - a comprehensive individual approach. Design department. Logistics. Years of experience in mechanical engineering - the creation of an industrial'
            },
            elem2:{
                elemLabel: 'Our advantages',
                text: 'People are professionals with extensive experience. A full range of metalworking works in one place - a comprehensive individual approach. Design department. Logistics. Years of experience in mechanical engineering - the creation of an industrial'
            }
        }
    },
    footer:{
        label1: 'About the Company',
        label2: 'Services',
        label3: 'Contact information'
    }
}

export default english