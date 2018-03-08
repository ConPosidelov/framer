import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from '../../../components/common/lib/elements.js';
import IconFa from '../../../components/common/Icon/IconFa';
import './PropsPanel.scss';



const PropsPanel = props => {

    const { 
        style,
        propsPanel: {
            vewTabs
        }

    } = props;

    const propsPanelHeader = vewTabs.map( item => {
        return (
            <div key= { item.title } className= {`tab_header ${item.editState}`} style= { item.style }>
                <div className= 'tab_title'>
                    {item.title}   
                </div> 
                <div className= 'close_btn'  onClick= {()=> false} title= 'Close layer'>
                    <IconFa icon='close'/>
                </div>   
            </div>
        );
    });


   

    return (
        <div className= { `flex_col props_panel` }  style= { style }>
            <div className="props_panel_header">
                { propsPanelHeader }
            </div>
            <div className="props_panel_body">
                
            </div>

        </div>
    );




};

const mapStateToProps = state => {
    const { propsPanel } = state;
    
    return {
        propsPanel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PropsPanel);