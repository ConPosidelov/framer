import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from '../../../components/common/lib/elements.js';
import IconFa from '../../../components/common/Icon/IconFa';
import './TimeLinePanel.scss';



const TimeLinePanel = props => {

    const {  } = props;
   

    return (
        <div className= { `stretched_1 time_line_panel` } >
            <div className="layers_panel_header">
          
            </div>
            <div className="layers_panel_body">
          
            </div>

        </div>
    );




};

const mapStateToProps = state => {
    const { skin, vewPanels } = state;
    
    return {
        skin,
        vewPanels
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};




export default connect(mapStateToProps, mapDispatchToProps)(TimeLinePanel);
