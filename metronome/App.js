

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Main from './components/Main.js';
import Bpm from './components/Bpm.js';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.handleBpmChange = this.handleBpmChange.bind(this);
    this.state={
      counting: false,
      bpm: 120,
    }
  }

  handleBpmChange(bpm){
    this.setState({bpm})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Main counting={this.state.counting} bpm={bpm} countArr={this.state.countArr} style={styles.main}/>
        </View>
        <View style={styles.bottomView}>
          <Bpm bpm={bpm} handleBpmChange={this.handleBpmChange} />
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
