//

const initial = {
    name: 'Classic',
    className: 'skin_white',
    backgroundColor: '#FFF',
    borderColor: '',
    borderWidth: '',
    borderRadius: '3px',
    color: '',
    boxShadow: ''
    
};



const skin = (state = initial, action) => {

    switch (action.type) {
        case 'SKIN_WHITE':
        
        default:
            return state
    } 
};

export default skin;