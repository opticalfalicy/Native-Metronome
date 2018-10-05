import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Bpm extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.label}>BPM</Text>
                <Text style={styles.content}>120</Text>
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
        fontSize: 40,
    }
})