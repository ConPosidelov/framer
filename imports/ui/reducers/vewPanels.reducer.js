// описывает размеры панелей и соответственно их видимость

import {
    OPEN_PROPS_PANEL,
    CLOSE_PROPS_PANEL,
    RESIZE_PROPS_PANEL

} from '../actions/types';


const initial = {
    name: 'Basic',
    navigation: {
        style: {
            height: '50px'
        }
    },
    panelWrap: {
        style: {
            top: '51px'
        }
    },
    toolBarWrap: {
        style: {
            width: '42px' 
        }
    },
    imgBarWrap: {
        style: {
            width: '0'
        }
    },
    addPanelWrap: {
        style: {
           // width: '300px'
        }
    },
    timelinPanelWrap: {
        style: {
           height: '200px',
           order: '0'
        }
    },
    propsPanel: {
        open: true,
        width: '300px'
    }
    
};



const vewPanels = (state = initial, action) => {

    switch (action.type) {
        case OPEN_PROPS_PANEL:
            return {...state, propsPanel:{...state.propsPanel, {...action.payload}}};

        case CLOSE_PROPS_PANEL:
            return {...state, propsPanel:{...state.propsPanel, {...action.payload}}};
        case RESIZE_PROPS_PANEL:
            return {...state, propsPanel:{...state.propsPanel, {...action.payload}}};        

        default:
            return state
    } 
};

export default vewPanels;