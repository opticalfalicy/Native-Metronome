import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

export default class Bpm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            bpm: Number
        }
    }

    componentDidMount(){
        this.setState({
            bpm: this.props.bpm,
            offset: 0,
        })
    }
    

    onScroll = (event) => {
        let currentOffset = event.nativeEvent.contentOffset.y;

        if(currentOffset < this.state.offset){
            this.state.bpm -= 1;
            console.log('add')
        }
        else if(currentOffset > this.state.offset){
            this.state.bpm += 1;
        }


        this.setState({
            offset: currentOffset,
        })
        // let direction = currentOffset > this.state.offset ? 'down' : 'up';
        // console.log(direction);

        // const currentOffset = event.nativeEvent.contentOffset.y;
        // const dif = currentOffset - (this.state.offset || 0);
    
        // if (Math.abs(dif) < 3) {
        //   console.log('unclear');
        // } else if (dif < 0) {
        //   console.log('up');
        // } else {
        //   console.log('down');
        // }
    
        // this.offset = currentOffset;


        // console.log(this.state.offset);

    }




    render(){



        


        let ubpm = this.state.bpm;
        console.log(this.props.bpm);

        return(
            <View style={styles.container}>
                <Text style={styles.label}>BPM</Text>
                <ScrollView style={styles.scroll} scrollTo=({ x: 0, y: 0, animated:'false') onScroll={this.onScroll}>
                    {/* <Text style={styles.content}>
                        {this.state.bpm}
                    </Text> */}
                    <Text style={styles.content}>{ubpm}</Text>
                    {/* <Text style={styles.content}>Yes</Text>
                    <Text style={styles.content}>Yes</Text>
                    <Text style={styles.content}>Yes</Text> */}
                </ScrollView> 
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
        fontSize: 80,
    },
    scroll:{
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 5,
        width: 0,
        height: 100,
    }

})