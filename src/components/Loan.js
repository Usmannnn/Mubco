import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import { MaterialCommunityIcons } from 'react-native-vector-icons'

const Loan = () => {
    return (
        <View style={styles.container}>
             <View style={{ position: 'relative', top: 45, right: -10 }}>
                <MaterialCommunityIcons name={'sack-percent'} size={25} color={'white'}/>
            </View>

            <View style={styles.content}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Loan</Text>
                <Text>Pending</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        height: 125,
        width: 200,
        backgroundColor: 'orange',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        borderRadius: 50,
        marginBottom: 30,
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
        alignItems: 'center',
    }
})


export default Loan