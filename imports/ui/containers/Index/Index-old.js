import React from 'react';
import { connect } from 'react-redux';

import { Button, Grid  } from 'react-bootstrap';
import Navigation from '../../components/common/Navigation/Navigation';
import Footer from '../../components/common/Footer/Footer';


import './Index.scss';

const Index = (props) => {
  console.log('index', props);
return (
     
<div className="Index">
        
        <Navigation {...props} />
        <Grid>

  <div className="Index">
    <img
      src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
      alt="Clever Beagle"
    />
    <h1>Pup</h1>
    <p>A boilerplate for products.</p>
    <div>
      <Button href="http://cleverbeagle.com/pup">Read the Docs</Button>
      <Button href="https://github.com/cleverbeagle/pup"><i className="fa fa-star" /> Star on GitHub</Button>
    </div>
    <footer>
      <p>Need help and want to stay accountable building your product? <a href="http://cleverbeagle.com?utm_source=pupappindex&utm_campaign=oss">Check out Clever Beagle</a>.</p>
    </footer>
  </div>

</Grid>
        <Footer />
      </div>


);
};

const mapStateToProps = state => {
    //console.log('state', state);
    const { 
      meteor: { loading }, 
      users: { loggingIn, authenticated, name, roles, userId }
    } = state;
    
    return {
      loading,
      loggingIn,
      authenticated,
      name,
      roles,
      userId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Index);