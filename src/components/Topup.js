import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Ionicons } from 'react-native-vector-icons'


const Topup = () => {
    return (
        <View style={styles.container}>
            <Ionicons name={'md-tablet-landscape'} size={25} color={'white'}/>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Topup</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        width: 200,
        height: 125,
        backgroundColor: '#1a2e66',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})

export default Topup