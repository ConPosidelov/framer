import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import * as panelActs from '../../actions/panelManage.actions';

import { Button, Divider } from '../../components/common/lib/elements';
import IconFa from '../../components/common/Icon/IconFa';
import Navigation from '../creater/Navigation/Navigation';

import ToolBar from '../creater/ToolBar/ToolBar';
import LayersPanel from '../creater/LayersPanel/LayersPanel';
import TimeLinePanel from '../creater/TimeLinePanel/TimeLinePanel';
import PropsPanel from '../creater/PropsPanel/PropsPanel';

import './Index.scss';

const Index = (props) => {
  console.log('index', props);
  const { 
    meteor, 
    users, 
    skin, 
    vewPanels: { 
      panelWrap, 
      imgBarWrap, 
      toolBarWrap, 
      addPanelWrap, 
      timelinPanelWrap,
      propsPanel
       
    },
    panelActs
  } = props;

  return (
       
    <div className={`stretched Index ${skin.className}`}>
      <Navigation {...props} />
      <div className= 'stretched panel_wrap' style= { panelWrap.style }>
        <div className= 'imgbar_panel_wrap' style= { imgBarWrap.style }>
            
        </div>
        <div className= 'toolbar_panel_wrap' style= { toolBarWrap.style }>
            <ToolBar />
        </div>
        <div className= 'main_panels' >
          <div className= 'stretched main_panels_wrap' >
            <div className= 'layer_panel_wrap' >
              <LayersPanel />      
            </div>
            <div className= 'timeline_panel_wrap' style= { timelinPanelWrap.style }>
              <TimeLinePanel />
            </div>  
          </div>
        </div>
        <div className= 'separator' ></div>
        <div className= 'flex_col add_panel_wrap'  style= { addPanelWrap.style }>
          <div className= 'add_panel_control' >
            <Button 
              className= { '' }
              w='36' 
              h='14' 
              style= {{display: 'block'}} 
              name= 'openPanel'
              title='open panel'
              onClick= { () => { propsPanel.open ? panelActs.propsPanel.close() : panelActs.propsPanel.open() }} 
            >
              {
                propsPanel.open
                ?  <IconFa icon='angle-double-right'/> 
                :  <IconFa icon='angle-double-left'/>
              }
         
            </Button>
          </div>
          <div className= 'flex_row add_panel_body' >
            <PropsPanel 
              style= { propsPanel.open ? {width: propsPanel.width, display: 'block'} : { display: 'none' }}
            />
          </div>
            
        </div>
      
      </div>
            
            
    </div>


  );
};

const mapStateToProps = state => {
    //console.log('state', state);
    const { meteor, users, skin, vewPanels } = state;
    
    return {
       meteor,
       users,
       skin,
       vewPanels
    }
};
console.log('panelActs', panelActs);
const mapDispatchToProps = (dispatch) => {
    return {
      panelActs: {
        propsPanel: {
          open: () => dispatch( panelActs.propsPanel.open()),
          close: () => dispatch( panelActs.propsPanel.close())
        }
      }
     
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Index);
