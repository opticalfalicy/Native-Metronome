

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Main from './components/Main.js';
import Bpm from './components/Bpm.js';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      counting: false,
      bpm: 120,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Main counting={this.state.counting} countArr={this.state.countArr} style={styles.main}/>
        </View>
        <View style={styles.bottomView}>
          {/* <Time style={styles.time}/> */}
          <Bpm bpm={this.state.bpm} />
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
