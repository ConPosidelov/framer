// хранит изинговые и функции нелинейного движения

const initial = {
   'linear': x => 1 ,
   easingfn1: x => 1 
  
};



const easingFn = (state = initial, action) => {

    switch (action.type) {
        case 'VEW_LAYER':
        
        default:
            return state
    } 
};

export default easingFn;