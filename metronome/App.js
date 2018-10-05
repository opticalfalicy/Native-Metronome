

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Main from './components/Main.js'

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      countArr: [1, 2, 3, 4],
      counting: false
    }
  }

  countingOn = () => {
    console.log('1')
    // this.setState({ 
    //     // counting: 1,
    // });
    console.log(this.state.counting);
    // this.testFunc();

    // console.log(this.state.counting)
    
    // if(this.state.counting == true){
    // }
    // let cntArr = this.state.countArr;
    // // let i = 0
    // let repeat = false;



    // const ubpm = 60000 / 120;

    // // while(this.state.counting == true){
    //     for (let i = 0; i < cntArr.length; i++) {
    //         (function (i) {
    //             setTimeout(function () {

    //                 console.log(cntArr[i]);
    //         }, ubpm*i);
    //     })(i);
    //     console.log('repeat');
    // }
    

// }
}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Main counting={this.state.counting} countArr={this.state.countArr} style={styles.main}/>
        </View>
        <View style={styles.bottomView}>
          {/* <Time style={styles.time}/> */}
          {/* <Bpm /> */}
          {/* <Text style={styles.maincolor}>Open up App.js to start working on your app!</Text> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomView: {
    width: 200,
    height: 150,
  }
});
