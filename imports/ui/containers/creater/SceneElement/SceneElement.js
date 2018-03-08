import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from '../../../components/common/lib/elements.js';
import IconFa from '../../../components/common/Icon/IconFa';
import UniversalWrapper from '../../../components/creater/UniversalWrapper/UniversalWrapper';
import './SceneElement.scss';



const SceneElement = ({ id, sceneElements, timePoint, easingFn }) => {

    const { 
       title,
       nodeType,
       static, 
       props,
       content 
    } = sceneElements[id];


   console.log('id', id);
   console.log('props', props);
   console.log('timePoint', timePoint);

    let styleProps= {};

    for(let key in props) {
        //console.log('key1', key);

        const propsArr = props[key];

        if(Array.isArray(propsArr) && key != 'position') {
          
            propsArr.forEach( item => {
                const { time, start, end, startVal, val, easing= 'linear' } = item;
                const rangeTime = end - start;
                const relTimePoint = (timePoint - start) / rangeTime;

                if(!val) return;
            
                if(time !== undefined && time == timePoint){
                    
                    styleProps[key] = val;
                } else if( start <= timePoint && timePoint <= end ) {
                    const rangeVal = val - startVal;
                    const normalVal = startVal + rangeVal * relTimePoint;
                    styleProps[key] = normalVal * easingFn.easing(relTimePoint);
                } else {
                    return
                }
            });
        } else if (Array.isArray(propsArr) && key == 'position') {
            propsArr.forEach( item => {
                const { time, start, end, startValLeft, valLeft, valTop, startValTop, type, trekFn= null, easing= 'linear' } = item;
                const rangeTime = end - start;
                const relTimePoint = (timePoint - start) / rangeTime;

                if(time !== undefined && time == timePoint){
                    styleProps.left = valLeft;
                    styleProps.top = valTop;
                } else if( start <= timePoint && timePoint <= end  && type == 'linear') {
                    const rangeValTop = valTop - startValTop;
                    const rangeValLeft = valLeft - startValLeft;
                    const normalValLeft = startValLeft + rangeValLeft * relTimePoint;
                    const normalValTop = startValTop + rangeValTop * relTimePoint;
                    styleProps.left = normalValLeft * easingFn.easing(relTimePoint);
                    styleProps.top = normalValTop * easingFn.easing(relTimePoint);
                } else if( start <= timePoint && timePoint <= end  && type != 'linear') {
                    const rangeValLeft = valLeft - startValLeft;
                    const normalValLeft = startValLeft + rangeValLeft * relTimePoint;
                    styleProps.left = normalValLeft * easingFn.easing(relTimePoint);
                    styleProps.top = startValTop + trekFn(styleProps.left, params);    
                } else {
                    return
                }
            });
        }
    }

    console.log('styleProps', styleProps);

    return (
        
        <UniversalWrapper 
            addClass= 'scene_el' 
            styleProps= { styleProps } 
            active= { true } 
            dataId= { id } 
            content= { content }


        />
        
    );
};

const mapStateToProps = state => {
    const { sceneElements, easingFn } = state;
    
    return {
        sceneElements,
        easingFn
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SceneElement);