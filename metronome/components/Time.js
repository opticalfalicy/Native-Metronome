import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Not really in use yet

export default class Time extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.label}> Time </Text>
                <Text style={styles.content}>44</Text>
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
    },
    label:{
        color: 'rgb(225, 102, 205)',
        marginRight: 30,
    },
    content:{
        color: 'rgb(225, 102, 205)',
        fontSize: 28,
        width: 18,
        marginRight: 25,
    }
})