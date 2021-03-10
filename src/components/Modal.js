import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Modal = ({status}) => {

    const position = useRef(new Animated.Value(0)).current

    useEffect(() => {

        console.log(status)
        if (status) {
            Animated.spring(position, {
                toValue: 600,
                // duration: 100,
                useNativeDriver: false
            }).start()
        } else {
            Animated.spring(position, {
                toValue: 0,
                // duration: 100,
                useNativeDriver: false
            }).start()
        }
    },[status])

    return (
        <Animated.View
            style={[styles.container, {
                height: position
            }]}
        >
            <Text></Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'red',
        position: 'absolute',
        bottom: -50,
        left: 0,
        right: 0,
        marginHorizontal:5,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    }
})


export default Modal