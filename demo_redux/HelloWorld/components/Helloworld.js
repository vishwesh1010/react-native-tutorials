import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

class Helloworld extends Component {

  constructor(props){
    super(props);
    console.log('constructor');
    console.log(this.props);
  }

  componentDidMount() {

    console.log(this.props)
    //this.props.myAction2();

    //this.props.getList().then(()=>{
    //this.state = {loading: false}
    //});
  }

  componentWillUnmount() {

  }



  render() {

    
    console.log('render mylist');
    return (
        <View>
            <Text>Hello World</Text>
        </View>
    );
  }
}
export default Helloworld

/*
function mapDispatchToProps(dispatch) {
  console.log('AppContainer-mapDispatchToProps')
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {  console.log('AppContainer-Connect-state'); return {
  myState1: state.myreducer1, 
  mylist: state.mylist
}; },
 mapDispatchToProps)(AppContainer);
*/