
const initial = {
    
    vewTabs: [
        {
            title: 'Props',
            editState: 'active',
            style: {
                zIndex: '1'
            }
            
        }
    ],        
    
};



const propsPanel = (state = initial, action) => {

    switch (action.type) {
        case 'VEW_LAYER':
        
        default:
            return state
    } 
};

export default propsPanel;