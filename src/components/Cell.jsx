import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import Cross from './Cross';
const Cell = (props) => {
    const {cell, onPress} = props;
    return (
        <Pressable 
            // key={`row-${rowIndex}-col-${columnIndex}`} 
            onPress={() => onPress()} 
            style={styles.cell}
        >
            {cell === "o" && <View style={styles.circle}/>}
            {cell === "x" && <Cross/>}
        </Pressable>
    )
};

const styles = StyleSheet.create({
    cell: {
        width: 100,
        height: 100,
        flex: 1,
        // borderColor: 'white',
        // borderWidth: 1,
      },
    circle:{
        // position: 'absolute',
    
        // left: 1 * 115,
        // top: 1 * 115,
        flex: 1,
        // width: 75,
        // height: 75,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    
        borderWidth: 10,
        borderColor: "white",
      },
})


export default Cell
