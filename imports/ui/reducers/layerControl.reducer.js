// описывает состояние панели Layers и ее табов
// определяет список элементов отображаемых в лэер панели
// active - элемент выбранный текущий
// visible - отображаемый на панели лэер если true - на панели
// timeLine отображаются все 


const initial = {
    vewTabs: [
        {
            sceneName: '',
            layerId: 'id_1',
            title: 'Layer-1',
            editState: 'active',
            style: {
                zIndex: '1'
            }
            
        }
    ],
    vewLayers: [
        {
            layerId: 'layerId_1',
            active: true,
            visible: true,
            editLock: false,
            zIndex: '0',
            elements: [
                'id_1'
            ]
        }
    ],
};



const layerControl = (state = initial, action) => {

    switch (action.type) {
        case 'VEW_LAYER':
        
        default:
            return state
    } 
};

export default layerControl;