import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Entypo, FontAwesome } from 'react-native-vector-icons'

const Header = ({ left, right }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <FontAwesome name={left} size={20} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo name={right} size={20} color={'white'} />
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
        backgroundColor: '#1a2e66',
        paddingHorizontal: 25
    }
})


export default Header