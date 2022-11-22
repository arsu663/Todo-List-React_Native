import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:40,
        backgroundColor:'coral',
        width:400
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})