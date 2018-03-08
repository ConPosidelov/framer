
//elements
//  Button, InputRange,  ColorPicWrapp
//



import React from 'react';
import {ICONS, COLOR} from '../Icon/iconsCollection.js';
//import SvgIcon from '../Icon/IconSvgOne.js';
//import SvgComplexIcon from '../Icon/IconSvgGroup.js';


//import reactCSS from 'reactcss';
//import { SketchPicker } from 'react-color';

import './elements.scss';

export const Button= props => {
  const {
    onClick= null,
    onDragStart= null,
    draggable = 'false',
    title = 'Button',
    name = '',
    style= {},
    border = false,
    type = 'simple',
    h = '30',
    w ,
    color = 'Black',
    borderRadius = '5',
    padding = false,
    className = ''
    
  } = props;

  let styleWidth;
  if(!w){
     styleWidth = {width:'auto'}
  } else {
     styleWidth = {width:`${w}px`}
  }
   
  const styleMain = {
    height:`${h}px`,
    lineHeight:`${h}px`,
    borderRadius:`${borderRadius}px`,
    textAlign: 'center',
    display:'inline-block'
  };

  if(padding) styleMain.padding = `${padding}`;
  if(border) styleMain.border = `1px ${border} ${color}`;


  return (
    <div 
        className={`simpleButton ${className}`} 
        style ={{...styleMain, ...styleWidth, ...style }} 
        title ={title} 
        name = {name} 
        draggable = {draggable} 
        onDragStart= {onDragStart} 
        onClick= {onClick}
        >
           {props.children}                
    </div>
  );
};



//---------------------------------------------------------------------------
export const Divider = props => {

  const {
    className= 'divider',
    vertical= false,
    length= '100%',
    weight= '1px',
    color= false,
    space= '5px',
    sideSpace= '2px',
    style= false
  }= props;

  const width = length;
  const height = weight;
  const mrg = `${space} ${sideSpace}`;

  if(vertical) {
    width = weight;
    height = length;
    mrg = `${sideSpace} ${space}`;
  }

  let styleAdd = {
    width: width,
    height: height,
    margin: mrg
  };

  if( color ) styleAdd.backgroundColor= color;
  if( style ) styleAdd = { ...styleAdd, ...style };
 

  return (
      <div className= { className } style= { styleAdd } />
  );
};





//InputRange =====================================================

export class InputRange extends React.Component {
    constructor(props) {
        super(props);
        const {
            inputValue= '1',
            unitVal= 'px', 
            minVal= '1', 
            maxVal= '10', 
            step= '1'
        } = this.props;

        this.state = {
           hoverTriangle: false,
           openInput: false,
           inputValue: inputValue,
           unitVal: unitVal 
        };
    }
    componentWillReceiveProps(nextProps) {
        const {inputValue, unitVal} = nextProps;
        this.setState({
            inputValue: inputValue,
            unitVal: unitVal
        });
        return true
    }
   
    hoverTriangle = ()=> {
        //console.log(' hoverTriangle=');
        this.setState({hoverTriangle: true});
    }
    leaveTriangle = ()=> {
        //console.log(' leaveTriangle=');
        this.setState({hoverTriangle: false});
    }

    openInput = ()=> {
        const {openInput} = this.state;
        this.setState({openInput: !openInput})
    }

    onChange = (e) => {
        const {getValue} = this.props;
        const {target: {value}} = e;
        this.setState({inputValue: value});
        getValue(value);
        //console.log('val', value);
    }


      render () {

            const {hoverTriangle, openInput, inputValue, unitVal} = this.state;
            const {
            title = 'InputRange',
            className = '',
            style = {display: 'block'},
            name = '',
            type = 'simple',
            hight = '30',
            w ,
            color = 'Black',
            hoverColor= 'Black',
            valColor= 'Black',
            innerBdrCol= 'rgba(0,0,0,.1)',
            outBdrCol= 'rgba(0,0,0,.1)',
            iconBgColor= 'rgba(0,0,0,.08)',
            icon= '',
            minVal= '1', 
            maxVal= '10', 
            step= '1'      
            
          } = this.props;
         // console.log('inputValue', inputValue);
          const styleMain = {
            height:`${hight}px`,
            border: `1px solid ${outBdrCol}`,
            position: 'relative',
            zIndex: '9999999'
        
          };

          const styleIconFild = {
              float: 'left',
              padding: `0 ${hight * .3}px`,
              backgroundColor: `${iconBgColor}`,
              marginTop: '1px'
          };

          const styleBtnTrgl = {
            float: 'left',
            height: `${hight - 2}px`
            
          };


          const iconT_width = +hight  * .3;
          const iconT_marginTop = +hight  * .3;
          const styleTrgl = {
            //float: 'left',
           // margin: `0 ${hight * .3}px`,
            marginTop: `${iconT_marginTop}px`,
            width: '0',
            height: '0',
            borderStyle: 'solid',
            borderWidth: `${iconT_width}px ${iconT_width * .75}px 0 ${iconT_width * .75}px`,
          };

          let styleHoverTrgl = {
             borderColor: `${color} transparent transparent transparent`   
          };
          if(hoverTriangle) {
            styleHoverTrgl = {borderColor: `${hoverColor} transparent transparent transparent`};
          }

          const styleVal = {
            float: 'left',
            padding: `0 ${hight * .4}px`,
            //borderRight: `1px solid ${innerBdrCol}`,
            //borderLeft: `1px solid ${innerBdrCol}`,
            textAlign: 'center',
            lineHeight: `${hight}px`,
            fontSize: `${hight * .6}px`,
            color: `${valColor}`
          };

          const styleDrop = {
            position: 'absolute',
            top: `${hight}px`,
            left: '0',
            width: `${hight * 8}px`,
            height: `${hight * 1.5}px`,
            border: `1px solid ${innerBdrCol}`,
            borderRadius: '3px',
            padding: `0 ${hight * .4}px`,
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px'
          };
          
          let styleDropAdd = {
            display: 'none'
          };

          if(openInput){
            styleDropAdd = {display: 'block'}
          }

          const styleInput = {
            marginTop: `${hight * .6}px`
          };





        return (
            <div 
                className={`inputRange ${className}`} 
                style ={{...styleMain, ...style}} 
                title ={title} 
                name = {name} 
                       
                >
                <div 
                    className='iconFild' 
                    style ={{...styleIconFild}} 
                    >
                    {icon}
                </div>
                <div 
                    className='valFild' 
                    style ={{...styleVal}}
                    >
                    {`${inputValue}${unitVal}`}
                </div>
                <div
                    className='btn1 btnTriangle'
                    style ={{...styleBtnTrgl}}
                    onClick= {this.openInput}
                    onMouseOver= {this.hoverTriangle}
                    onMouseLeave= {this.leaveTriangle} 
                    >

                    <div 
                                     
                        style ={{...styleTrgl, ...styleHoverTrgl}}
                        >

                    </div>
                </div>

                <div
                    className='inptRangeDrop' 
                    style ={{...styleDrop, ...styleDropAdd}}
                >
                <input 
                    type="range"
                    value= {inputValue} 
                    step= {step}
                    min= {minVal} 
                    max= {maxVal}
                    style ={{...styleInput}}
                    onChange= {this.onChange}
                    />



                </div>
                               
            </div>
        );
  }

};

//--------------------------------------------------------------------------------




/*
// colorPic wrapper ======================================================================

export class ColorPicWrapp extends React.Component {
    constructor(props) {
        super(props);
        const {
            inputValue= 'rgba(255,255,255,1)'
           
        } = this.props;

        this.state = {
           hoverTriangle: false,
           openInput: false,
           inputValue: inputValue,
            
        };
    }
    componentWillReceiveProps(nextProps) {
        const {inputValue, unitVal} = nextProps;
        this.setState({
            inputValue: inputValue,
            unitVal: unitVal
        });
        return true
    }
   
    hoverTriangle = ()=> {
        //console.log(' hoverTriangle=');
        this.setState({hoverTriangle: true});
    }
    leaveTriangle = ()=> {
        //console.log(' leaveTriangle=');
        this.setState({hoverTriangle: false});
    }

    openInput = ()=> {
        const {openInput} = this.state;
        this.setState({openInput: !openInput})
    }
    pickerChange = (color) => {
        //console.log('color=', color);
        const {rgb: {r, g, b, a}} = color;
        const RGBA = `rgba(${r}, ${g}, ${b}, ${a})`;
        const {getValue} = this.props;
        this.setState({inputValue: RGBA});
        getValue(RGBA); 
    }


      render () {

            const {hoverTriangle, openInput, inputValue} = this.state;
            const {
            title = 'ColorPicker',
            className = '',
            style = {display: 'block'},
            name = '',
            type = 'simple',
            hight = '30',
            w ,
            color = 'Black',
            hoverColor= 'Black',
            valColor= 'Black',
            innerBdrCol= 'rgba(0,0,0,.1)',
            outBdrCol= 'rgba(0,0,0,.1)',
            iconBgColor= 'rgba(0,0,0,.08)',
            icon= ''
                
            
          } = this.props;
          //console.log('inputValue', inputValue);
          const styleMain = {
            height:`${hight}px`,
            border: `1px solid ${outBdrCol}`,
            position: 'relative',
            zIndex: '9999999'
        
          };

          const styleIconFild = {
              float: 'left',
              padding: `0 ${hight * .3}px`,
              backgroundColor: `${iconBgColor}`,
              marginTop: '1px'
          };

          const styleBtnTrgl = {
            float: 'left',
            height: `${hight - 2}px`
            
          };


          const iconT_width = +hight  * .3;
          const iconT_marginTop = +hight  * .3;
          const styleTrgl = {
            //float: 'left',
           // margin: `0 ${hight * .3}px`,
            marginTop: `${iconT_marginTop}px`,
            width: '0',
            height: '0',
            borderStyle: 'solid',
            borderWidth: `${iconT_width}px ${iconT_width * .75}px 0 ${iconT_width * .75}px`,
          };

          let styleHoverTrgl = {
             borderColor: `${color} transparent transparent transparent`   
          };
          if(hoverTriangle) {
            styleHoverTrgl = {borderColor: `${hoverColor} transparent transparent transparent`};
          }

          const styleVal = {
            float: 'left',
            //padding: `0 ${hight * .4}px`,
            //borderRight: `1px solid ${innerBdrCol}`,
            //borderLeft: `1px solid ${innerBdrCol}`,
            textAlign: 'center',
            lineHeight: `${hight}px`,
            fontSize: `${hight * .6}px`,
            color: `${valColor}`
          };

          const styleDrop = {
            position: 'absolute',
            top: `${hight}px`,
            left: '0',
            width: `${hight * 8}px`,
            height: `${hight * 1.5}px`,
            //border: `1px solid ${innerBdrCol}`,
           // borderRadius: '3px',
           // padding: `0 ${hight * .4}px`
          };
          
          let styleDropAdd = {
            display: 'none'
          };

          if(openInput){
            styleDropAdd = {display: 'block'}
          }


          const styleColorDisplay = {
            width: `${hight}px`,
            height: `${hight - 2}px`,
            backgroundColor: `${inputValue}`
          };



        return (
            <div 
                className={`inputRange ${className}`} 
                style ={{...styleMain, ...style}} 
                title ={title} 
                name = {name} 
                       
                >
                <div 
                    className='iconFild' 
                    style ={{...styleIconFild}} 
                    >
                    {icon}
                </div>
                <div 
                    className='valFild' 
                    style ={{...styleVal}}
                    >

                    <div 
                        className='colorDisplay' 
                        style ={{...styleColorDisplay}} 
                        >
                  
                    </div>



                </div>
                <div
                    className='btn1 btnTriangle'
                    style ={{...styleBtnTrgl}}
                    onClick= {this.openInput}
                    onMouseOver= {this.hoverTriangle}
                    onMouseLeave= {this.leaveTriangle} 
                    >

                    <div 
                                     
                        style ={{...styleTrgl, ...styleHoverTrgl}}
                        >

                    </div>
                </div>

                <div
                    className='inptRangeDrop' 
                    style ={{...styleDrop, ...styleDropAdd}}
                >
                <SketchPicker color={inputValue}  onChange={this.pickerChange}/>
                </div>
                               
            </div>
        );
  }

};
*/
