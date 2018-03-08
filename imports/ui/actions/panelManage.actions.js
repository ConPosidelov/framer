import {
    OPEN_PROPS_PANEL,
    CLOSE_PROPS_PANEL,
    RESIZE_PROPS_PANEL

} from './types';

export const propsPanel = {
    open: () => ({
        type: OPEN_PROPS_PANEL,
        payload:  {open: true} 
    }),
    close: () => ({
        type: CLOSE_PROPS_PANEL,
        payload: { open: false } 
    }),
    resize: width => ({
        type: CLOSE_PROPS_PANEL,
        payload: {width: width}
    })
};

