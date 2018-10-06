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
            counting: Boolean,
            // measure: 4,
            // count: 0,
            countArr: [1, 2, 3, 4],
            // counting: false,
            bpm: this.props.bpm,
        };
        
        
    }
    
    counterHandler = () => {

        const ubpm = this.props.bpm;

        
        this.setState({ 
            counting: !this.state.counting
        });


        // console.log(this.state.counting)

        // var counting = setInterval(function() {
        //     let countingState
        // })
        let i = 0

        if(this.state.counting == true){
            counting = setInterval(function(){
                block.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                    } else {
                      console.log('playback failed due to audio decoding errors');
                      // reset the player to its uninitialized state (android only)
                      // this is the only option to recover after an error occured and use the player again
                      block.reset();
                    }
                  });
                i++
                console.log(i)
            }, ubpm);
        }
        
        else if(this.state.counting == false){
            clearInterval(counting)
        }

        // console.log(i)

        // this.counting = setInterval(function(){
        //         console.log('x')
        // }, ubpm);

    }    

    // countingOff = () => {
    //     // clearInterval(counting)
    // }



    componentDidMount(){
        this.setState({
            counting: !this.props.counting,
            bpm: this.props.bpm
        })
        
    }

    render(){
        // console.log(this.state.counting);
        // console.log(this.props.counting);
        console.log('main', this.props.bpm)

        let textToggle;
        let buttonToggle;

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

        // if(this.state.counting == false){
        //     console.log('button on')
        //     buttonToggle = this.countingOn;
        // }
        // if(this.state.counting == true){
        //     console.log('button off')
        //     buttonToggle = this.countingOff;
        // }
        
        return(

            <TouchableOpacity onPress={this.counterHandler} style={styles.container}>
            {textToggle}
            {/* <Text style={styles.maincolor} >Press To Start</Text> */}
            </TouchableOpacity>
 
        
            // <TouchableOpacity >

            //    {buttonToggle}
            // </TouchableOpacity>
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
        
        // borderColor: 'rgb(250, 255, 255)',
        // borderStyle: 'solid',
        // borderWidth: 5,
        // borderRadius: 100,
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