import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var block = new Sound('block.mp3', Sound.LIBRARY, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + block.getDuration() + 'number of channels: ' + block.getNumberOfChannels());
  });

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // False Initially
            counting: Boolean,
            // 120 Initially. 
            bpm: this.props.bpm,
        };
    }
    
    counterHandler = () => {
        const ubpm = this.props.bpm;
        this.setState({ 
            counting: !this.state.counting
        });
        if(this.state.counting == true){
            counting = setInterval(function(){
                block.play((success) => {
                      console.log('successfully finished playing');
                  });
            }, ubpm);
        }
        else if(this.state.counting == false){
            clearInterval(counting);
        };
    };    

    componentDidMount(){
        this.setState({
            counting: !this.props.counting,
            bpm: this.props.bpm
        });
        
    };

    render(){
        // Sets the text on the button based on the button being pressed
        let textToggle;
        if (this.state.counting == true){
            textToggle = (
                <Text style={styles.maincolor}>Touch To Start</Text>
            );
        } 
        if (this.state.counting == false) {
            textToggle = (
                <Text style={styles.maincolor}>Touch To Stop</Text>
            );
        }
        return(

            <TouchableOpacity onPress={this.counterHandler} style={styles.container}>
                {textToggle}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        borderColor: 'rgb(225, 132, 195)',
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 100,
        width: 180,
        height: 180,
        paddingTop: 70,
    },
    containerIn:{
        backgroundColor: 'white',
        width: 180,
        height: 180,
        paddingTop: 70,
    },
    maincolor: {
        color: 'rgb(225, 102, 205)',
        textAlign: 'center',
    }
})