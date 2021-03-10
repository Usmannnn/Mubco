import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Entypo, FontAwesome } from 'react-native-vector-icons'

const Header = ({ left, right, color, action }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <FontAwesome name={left} size={25} color={color} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => action()}
            >
                <Entypo name={right} size={25} color={color} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 25
    }
})


export default Header