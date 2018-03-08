import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from '../../../components/common/lib/elements.js';
import IconFa from '../../../components/common/Icon/IconFa';
import SceneElement from '../SceneElement/SceneElement';
import UniversalWrapper from '../../../components/creater/UniversalWrapper/UniversalWrapper';
import './LayersPanel.scss';



const LayersPanel = props => {

    const { 
        masterTimeLine, 
        timeLineControl: { timePoint }, 
        layerControl: { vewTabs, vewLayers }
    } = props;


   
    const layerPanelHeader = vewTabs.map( item => {
        return (
            <div key= { item.layerId } className= {`tab_header ${item.editState}`} style= { item.style }>
                <div className= 'tab_title'>
                    {item.title}   
                </div> 
                <div className= 'close_btn'  onClick= {()=> false} title= 'Close layer'>
                    <IconFa icon='close'/>
                </div>   
            </div>
        );
    });

    const layerItems = vewLayers.map( ({ visible, elements }) => {
        if( visible ) {
            return elements.map ( id => {
                return (
                    <SceneElement key= { id } id= { id } timePoint= { timePoint } />
                );
            });
        }
    });

    

    return (
        <div className= { `stretched_1 layers_panel` } >
            <div className= 'layers_panel_header'>
               { layerPanelHeader }
            </div>
            <div className= 'layers_panel_body'>
                <div className= 'work_fild grid1'  style= { masterTimeLine.workFild }>
                    <div className= 'root_scene' style= { masterTimeLine.rootScene.style }>
                        { layerItems }
                
                    </div>
                
                </div>
            </div>
        </div>
    );




};

const mapStateToProps = state => {
    const { layerControl, masterTimeLine, timeLineControl } = state;
    
    return {
        layerControl,
        masterTimeLine,
        timeLineControl
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};




export default connect(mapStateToProps, mapDispatchToProps)(LayersPanel);
