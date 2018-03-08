import React from 'react';

import './UniversalWrapper.scss';




const UniversalWrapper = props => {

    const {
        addClass= '',
        styleProps: {
            width= '100px',
            height= '100px',
            top= '0',
            left= '0',
            rotateAngle= '0',
        },

        active= false,
        activeStyle= '1',
        addPointClass= 'point_1',
        activeMod= 'main',
        dataId= 'none',
        stateFn= null,
        content= '',
        contentStyle= {},
        key

    } = props;

    let addWrapperClass = addClass;
    
    let activeObj = {
        display: 'none',
        cursor: 'pointer',
        border: 'none',
        zIndex: '99'
    };

    if(active) {
        activeObj = {
            display: 'block',
            cursor: 'move',
            border: 'dashed',
            zIndex: '999'
        };
        addWrapperClass = `active_${activeStyle} ${addClass}`;
    }

    const wrapperStyle = {
        width: width,
        height: height,
        top: top,
        left: left,
        transform: `rotate(${rotateAngle}deg)`
    };

    const pointStyle = {
        display: activeObj.display
    };

    //------style of corners--------------------------------
    const leftTopStyle =     {top: '0',    left: '0',    cursor: 'nw-resize'};
    const leftBottomStyle =  {top: '100%', left: '0',    cursor: 'ne-resize'};
    const rightTopStyle =    {top: '0',    left: '100%', cursor: 'ne-resize'};
    const rightBottomStyle = {top: '100%', left: '100%', cursor: 'nw-resize'};

    const topStyle =         {top: '0',    left: '50%',  cursor: 'n-resize'};
    const leftStyle =        {top: '50%',  left: '0',    cursor: 'e-resize'};
    const rightStyle =       {top: '50%',  left: '100%', cursor: 'e-resize'};
    const bottomStyle =      {top: '100%', left: '50%',  cursor: 'n-resize'};
      
    //----------------------------------------
    const rotWrapLTStyle = {
        transform: 'rotate(-45deg)',
        top: '-19px',
        left: '-28px'
    };
    const rotWrapRBStyle = {
        transform: 'rotate(135deg)',
        top: '12px',
        left: '5px'
    };
    const rotWrapLBStyle = {
        transform: 'rotate(-135deg)',
        top: '12px',
        left: '-28px'
    };
    const rotWrapRTStyle = {
        transform: 'rotate(45deg)',
        top: '-18px',
        left: '5px'
    };


     //----------------------------------------
    const containerStyle = {
        cursor: `${activeObj.cursor}`
    };


    return (
        <div 
            className= { `universal_wrapper ${addWrapperClass}` }
            style= { wrapperStyle } 
            data-id = { dataId }
            key = { dataId }
            name ='universalWrapp'
                      
        >
            <div className= {`controlPoint ${addPointClass}`} data-id= {dataId} name ='leftTop' style= {{...pointStyle, ...leftTopStyle}}>

                <div className='rotateWrap' data-id= {dataId} name ='rotLeftTop' style= {{...rotWrapLTStyle}}>
                    <div className='rotatePoint' data-id= {dataId} name ='rotLeftTop'>
                        <div className='cir' data-id= {dataId} name ='rotLeftTop'></div>
                        <div className='arrLeft'></div>
                        <div className='arrRight'></div>
                    </div>
                </div>

            </div>    
            <div className= {`controlPoint ${addPointClass}`} data-id= {dataId} name ='leftBottom' style= {{...pointStyle, ...leftBottomStyle}}>
                <div className='rotateWrap' data-id= {dataId} name ='rotLeftBottom' style= {{...rotWrapLBStyle}}>
                    <div className='rotatePoint'>
                        <div className='cir' data-id= {dataId} name ='rotLeftBottom'></div>
                        <div className='arrLeft'></div>
                        <div className='arrRight'></div>
                    </div>
                </div>
            </div>
            <div className= {`controlPoint ${addPointClass}`} data-id= {dataId} name ='rightTop' style= {{...pointStyle, ...rightTopStyle}}>
                <div className='rotateWrap' data-id= {dataId} name ='rotRightTop' style= {{...rotWrapRTStyle}}>
                    <div className='rotatePoint'>
                        <div className='cir' data-id= {dataId} name ='rotRightTop'></div>
                        <div className='arrLeft'></div>
                        <div className='arrRight'></div>
                    </div>
                </div>
            </div>
            <div className= {`controlPoint ${addPointClass}`} data-id= {dataId} name ='rightBottom' style= {{...pointStyle, ...rightBottomStyle}}>
                <div className='rotateWrap' data-id= {dataId} name ='rotRightBottom' style= {{...rotWrapRBStyle}}>
                    <div className='rotatePoint'>
                        <div className='cir' data-id= {dataId} name ='rotRightBottom'></div>
                        <div className='arrLeft'></div>
                        <div className='arrRight'></div>
                    </div>
                </div>
            </div>

            <div className= {`controlPoint ${addPointClass}`} data-id= {dataId} name ='top' style= {{...pointStyle, ...topStyle}}></div>
            <div className= {`controlPoint ${addPointClass}`} data-id= {dataId} name ='left' style= {{...pointStyle, ...leftStyle}}></div>
            <div className= {`controlPoint ${addPointClass}`} data-id= {dataId} name ='right' style= {{...pointStyle, ...rightStyle}}></div>
            <div className= {`controlPoint ${addPointClass}`} data-id= {dataId} name ='bottom' style= {{...pointStyle, ...bottomStyle}}></div>

            <div 
                className='contentContainer' 
                data-id= { dataId } 
                name ='wrapContent' 
                style= {containerStyle}
            >

                { content ? content: '' }

            </div>
        </div> 
       
    );

};



export default UniversalWrapper;


