import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Entypo } from 'react-native-vector-icons'

const Request = () => {
    return (
        <View style={styles.container}>
            <View style={{ position: 'relative', top: 10, left: 65 }}>
                <Entypo name={'radio'} size={25} color={'white'} />
            </View>

            <View style={styles.content}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>18</Text>
                    <Text>Requests</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Request Channel</Text>
                    <Text>İmages</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        width: 150,
        height: 275,
        backgroundColor: '#1a2e66',
        borderRadius: 50,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    content: {
        flex: 9 / 10,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})

export default Request