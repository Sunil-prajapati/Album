import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';

const Button = ({whenPress,children}) => {
    return (
        <TouchableOpacity onPress={whenPress} style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
    },
    text:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingVertical:10,
    },
});

export default Button;