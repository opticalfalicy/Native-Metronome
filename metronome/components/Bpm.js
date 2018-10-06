import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Bpm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            bpm: Number
        }

        if(this.state.bpm > 220){
            this.state.bpm = 220
        }
    }

    componentDidMount(){
        this.setState({
            bpm: this.props.bpm,
            offset: 0,
            myText: 'I\'m ready to get swiped!',
            gestureName: 'none',
            backgroundColor: '#fff'
        })
    }

    onSwipeUp(gestureState, event) {

        // let currentOffset = event.nativeEvent.contentOffset.y;
        console.log('ges', Math.abs(Math.floor(gestureState.dy)));
        this.setState({myText: 'You swiped up!'});
        if(this.state.bpm > 220){
            console.log('max bpm')
        }
        else{
            this.state.bpm += Math.abs(Math.floor(gestureState.dy));
        }

      }
     
      onSwipeDown(gestureState) {
        this.setState({myText: 'You swiped down!'});
        if(this.state.bpm < 30){
            console.log('min bpm');
        }
        else{
        this.state.bpm -= Math.abs(Math.floor(gestureState.dy));
        }
        console.log(gestureState.dy);
      }
    

    // onScroll = (event) => {
    //     let currentOffset = event.nativeEvent.contentOffset.y;

    //     if(currentOffset < this.state.offset){
    //         this.state.bpm -= 1;
    //         console.log('add')
    //     }
    //     else if(currentOffset > this.state.offset){
    //         this.state.bpm += 1;
    //     }


    //     this.setState({
    //         offset: currentOffset,
    //     })
    //     // let direction = currentOffset > this.state.offset ? 'down' : 'up';
    //     // console.log(direction);

    //     // const currentOffset = event.nativeEvent.contentOffset.y;
    //     // const dif = currentOffset - (this.state.offset || 0);
    
    //     // if (Math.abs(dif) < 3) {
    //     //   console.log('unclear');
    //     // } else if (dif < 0) {
    //     //   console.log('up');
    //     // } else {
    //     //   console.log('down');
    //     // }
    
    //     // this.offset = currentOffset;


    //     // console.log(this.state.offset);

    // }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_UP:
            this.setState({backgroundColor: 'red'});
            break;
          case SWIPE_DOWN:
            this.setState({backgroundColor: 'green'});
            break;
        }
      }


    render(){


        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };

          if(this.state.bpm > 220){
            console.log('max bpm')
            this.state.bpm = 220
        }
        


        let ubpm = this.state.bpm;
        console.log(this.props.bpm);

        return(
            <View style={styles.container}>
                <Text style={styles.label}>BPM</Text>
                {/* <ScrollView style={styles.scroll} scrollTo=({}) onScroll={this.onScroll}>
                    {/* <Text style={styles.content}>
                        {this.state.bpm}
                    </Text> */}
                    {/* <Text style={styles.content}>{ubpm}</Text> */}
                    {/* <Text style={styles.content}>Yes</Text>
                    <Text style={styles.content}>Yes</Text>
                    <Text style={styles.content}>Yes</Text> */}
                    <GestureRecognizer
                        onSwipe={(direction, state) => this.onSwipe(direction, state)}
                        onSwipeUp={(state) => this.onSwipeUp(state)}
                        onSwipeDown={(state) => this.onSwipeDown(state)}
                        config={config}
                        style={
                        styles.scroll
                        }
                        >
                        <Text style={styles.content}>{ubpm}</Text>
                    </GestureRecognizer>
                {/* </ScrollView>   */}
                {/* <Text style={styles.content}>{ubpm}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // borderStyle: 'solid',
        // borderColor: 'red',
        // borderWidth: 5,
    },
    label:{
        color: 'rgb(225, 102, 205)',

    },
    content:{
        color: 'rgb(225, 102, 205)',
        fontSize: 20,
    },
    scroll:{
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 5,
        width: 100,
        height: 30,
    }

})