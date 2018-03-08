import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users.reducer';
import meteor from './meteor.reducer';
import skin from './skin.reducer';
import vewPanels from './vewPanels.reducer';
import layerControl from './layerControl.reducer';
import timeLineControl from './timeLineControl.reducer';
import masterTimeLine from './masterTimeLine.reducer';
//import scenes from './scenes.reducer';
import sceneElements from './sceneElements.reducer';
import easingFn from './easingFn.reducer';
import propsPanel from './propsPanel.reducer';

const rootReducer = combineReducers({
    routerReducer,
    meteor,
    users,
    skin,
    vewPanels,
    layerControl,
    timeLineControl,
    masterTimeLine,
    sceneElements,
    easingFn,
    propsPanel
});


export default rootReducer;