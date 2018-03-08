//
const initial = {
    loggingIn: false,
    authenticated: false,
    name: '',
    roles: '',
    userId: '',
    emailAddress: ''
};



const users = (state = initial, action) => {

    switch (action.type) {
        case 'LOADING_METEOR':
        
        default:
            return state
    } 
};

export default users;