import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from '../../../components/common/lib/elements.js';
import IconFa from '../../../components/common/Icon/IconFa';
import './LayerItem.scss';



class LayerItem extends React.Component {




    render() {
        const { layerId, elements } = this.props;
        return (
            <div key= { layerId } className= 'layer_item'>
          
            </div>
        );
    }

}

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




export default connect(mapStateToProps, mapDispatchToProps)(LayerItem);