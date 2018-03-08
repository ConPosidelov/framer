// ????

const initial = {
    'id_1': {
        title: 'Layer-1',
        type: 'div',
        props: {
            top: [
                {
                    time: 0,
                    val: '0'
                },
                {
                    start: 0,
                    end: 1000,
                    val: '50%',
                    fn: 'fnName1'
                },
                {
                    start: 1001,
                    end: 2000,
                    val: '50%',
                    fn: 'fnName2'
                },

            ],
            width: [
                {
                    time: 0,
                    val: '20%'
                }
            ]
        }
    }
};



const scenes = (state = initial, action) => {

    switch (action.type) {
        case 'VEW_LAYER':
        
        default:
            return state
    } 
};

export default scenes;