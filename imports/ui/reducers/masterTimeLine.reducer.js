// хранит состояние masterTimeLine, рабочей области и корневой сцены

const initial = {
    
        workFild: {
            width: '1200px',
            height: '800px',
            top: '0',
            left: '0'

        },
        rootScene: {
            name: 'root',
            style: {
                bottom: '201px',
                left: '25%',
                width: '50%',
                height: '50%',
                background: '#FFF',
                zIndex: '0'
            }
        },
        timeLine: 10000,
        timeScale: 1

        
    
};



const masterTimeLine = (state = initial, action) => {

    switch (action.type) {
        case 'VEW_LAYER':
        
        default:
            return state
    } 
};

export default masterTimeLine;