import React from 'react';
import { StyleSheet, ScrollView, Text, View, Slider } from 'react-native';


export default class Bpm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            bpm: Number,
            dispBpm: 120,
        }

    }

    componentDidMount(){
        this.setState({
            bpm: this.props.bpm,
        })
    }

    getVal(val){
        dispVal = val;
        val = 60000 / val;
        this.setState({
            bpm: val,
            dispBpm: dispVal
        })
        // console.warn(val);
    }  



    render(){



        let bpm = this.state.bpm;
        // console.log('bpm', this.props.bpm);

        return(
            <View style={styles.container}>
                <Text style={styles.label}>BPM</Text>
                <Slider
                style={styles.slider}
                step={1}
                minimumValue={50}
                maximumValue={220}
                value={120}
                thumbTintColor={'rgb(225, 102, 205)'}
                minimumTrackTintColor={'rgb(225, 102, 205)'}

                onValueChange={val => this.getVal(val)}
                onSlidingComplete={() => this.props.handleBpmChange(bpm)}
                
                />
                <Text style={styles.content}>
                    {this.state.dispBpm}
                </Text>
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
    slider:{
        color: 'rgb(225, 102, 205)',
        width: 120,
    }

})