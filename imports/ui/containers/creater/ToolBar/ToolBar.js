import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from '../../../components/common/lib/elements.js';
import IconFa from '../../../components/common/Icon/IconFa';
import './ToolBar.scss';

const ToolBar = props => {

    const {  } = props;

    const dragStart = () => {

    };

    return (
        <div className= { `stretched flex_col tool_bar` } >
            <div className="tool_bar_header">
                <Button 
                    className= { '' }
                    w='36' 
                    h='20' 
                    name= 'openPanel'
                    title='open panel'
                    onClick= { ()=> false } 
                >
                    <IconFa icon='angle-double-right'/>
                </Button>

            </div>

            <Divider length= '34px' style= {{ 'marginTop': '2px' }} />

            <div className='flex_col mainSect'>
                <Button 
                    className= { '' }
                    w='36' 
                    h='36' 
                    name= 'selectElement'
                    title='select element'
                    onClick= { ()=> false } 
                >
                    <IconFa icon='mouse-pointer'/>
                </Button>
                <Button 
                    className= { '' }
                    w='36' 
                    h='36' 
                    name= 'selectElement'
                    title='select element'
                    onClick= { ()=> false } 
                >
                    <IconFa icon='arrows'/>
                </Button>
                <Button 
                    className= { '' }
                    w='36' 
                    h='36' 
                    name= 'selectElement'
                    title='select element'
                    onClick= { ()=> false } 
                >
                    <IconFa icon='arrows'/>
                </Button>

            </div>

            <Divider length= '34px' style= {{ 'marginBottom': '3px' }}/>
            <Divider length= '34px' style= {{ 'marginTop': '0' }} />

            <div className='flex_col contentSect'>
                <Button 
                    className= { '' }
                    w='36' 
                    h='36' 
                    padding= '2px 0'
                    name= 'simpleBlock'
                    title='insert block'
                    draggable = 'true' 
                    onDragStart= { dragStart }
                    onClick= { ()=> false } 
                >
                    <IconFa icon='square-o' size= '20px'/>
                </Button>
                <Button 
                    className= { '' }
                    w='36' 
                    h='36' 
                    name= 'simpleCircle'
                    title='insert Circle'
                    draggable = 'true' 
                    onDragStart= { dragStart }
                    onClick= { ()=> false } 
                >
                    <IconFa icon='circle-thin' size= '20px'/>
                </Button>
                <Button 
                    className= { '' }
                    w='36' 
                    h='36' 
                    name= 'simpleEllipse'
                    title='insert Ellipse'
                    draggable = 'true' 
                    onDragStart= { dragStart }
                    onClick= { ()=> false } 
                >
                    <IconFa icon='lemon-o' size= '20px'/>
                </Button>
                 

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




export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);

