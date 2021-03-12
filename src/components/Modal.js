import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, ScrollView, Image, TouchableOpacity } from 'react-native'

const Modal = ({ status, children, setStatus }) => {

    const position = useRef(new Animated.Value(0)).current

    useEffect(() => {

        if (status) {
            Animated.timing(position, {
                toValue: 650,
                duration: 200,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(position, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
            }).start()
        }

    }, [status])

    return (
        <Animated.View
            style={[styles.container, {
                height: position
            }]}
        >
            <TouchableOpacity
                onPress={() => setStatus(!status)}
                style={styles.grabber}
            >
                <View style={{height: 3, width: '100%', backgroundColor: 'black', marginBottom: 2}} />
                <View style={{height: 3, width: '75%', backgroundColor: 'black', marginBottom: 2}} />
                <View style={{height: 3, width: '50%', backgroundColor: 'black'}} />
            </TouchableOpacity>
            {children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: -50,
        left: 0,
        right: 0,
        marginHorizontal: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    grabber: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '20%',
        alignSelf: 'center'
    }
})


export default Modal