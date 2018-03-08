// описывает элементы без привязки к сценам

const initial = {
    'id_1': {
        title: '',
        nodeType: 'div',
        static: false,
        content: '',
        props: {
            
            position: [
                {
                    time: 0,
                    valLeft: '50px',
                    valTop: '20px',
                },
                {
                    start: 1,
                    end: 1000,
                    startValLeft: '0',
                    valLeft: '300px',
                    startValTop: '0',
                    valTop: '200px',
                    type: 'linear',
                    easing: 'easingfn1'
                },
                {
                    start: 1001,
                    end: 3000,
                    startValLeft: '0',
                    valLeft: '300px',
                    startValTop: '0',
                    valTop: '200px',
                    type: 'cir',
                    params: {},
                    trekFn: 'trekFn1',
                    easing: 'easingfn1'
                }

            ],
            width: [
                {
                    time: 0,
                    val: '300px'
                },
                {
                    start: 1,
                    end: 1000,
                    startVal: '0',
                    val: '300px',
                    easing: 'easingfn1'
                }
            ]
        }
    }
};



const sceneElements = (state = initial, action) => {

    switch (action.type) {
        case 'VEW_LAYER':
        
        default:
            return state
    } 
};

export default sceneElements;