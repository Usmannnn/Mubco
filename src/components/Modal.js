import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Modal = () => {
    return (
        <Animated.View
            style={[styles.container]}
        >
            <Text></Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 500,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
})


export default Modal