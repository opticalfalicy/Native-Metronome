import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';


// const SOUNDLIST = [
//     new SoundlistItem(
//         'block',
        
//     )
// ]


export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counting: Boolean,
            // measure: 4,
            // count: 0,
            countArr: [1, 2, 3, 4],
            // counting: false,
        };
        
        
    }
    
    counterHandler = () => {

        const ubpm = 60000 / 120;

        
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
                console.log('x');
                // console.log(i)
            }, ubpm);
        }
        
        else if(this.state.counting == false){
            clearInterval(counting)
        }

        console.log(i)

        // this.counting = setInterval(function(){
        //         console.log('x')
        // }, ubpm);

    }    

    // countingOff = () => {
    //     // clearInterval(counting)
    // }



    componentDidMount(){
        this.setState({
            counting: !this.props.counting
        })
        
    }

    render(){
        // console.log(this.state.counting);
        console.log(this.props.counting);

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