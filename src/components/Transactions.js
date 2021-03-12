import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

const Transactions = () => {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginHorizontal: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Transactions</Text>
                <Text>July, 2020</Text>
            </View>
            <Text style={{ marginTop: 20, marginHorizontal: 25 }}>History of the transactions from following clients</Text>

            <ScrollView
                style={{
                    paddingHorizontal: 25,
                    marginTop: 25
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* dış componentler çağırılıp map edilebilir */}
                <View style={styles.items}>
                    <Image
                        source={require('../../assets/1.jpg')}
                        style={{ height: 100, width: 100, marginLeft: -15, borderRadius: 25 }}
                        resizeMode={'contain'}
                    />
                    <View style={{ marginLeft: -50 }}>
                        <Text style={{ marginBottom: 20, fontWeight: 'bold', fontSize: 20 }}>$865</Text>
                        <Text>Received from Alana</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginBottom: 10, marginRight: 15 }}>
                        <Text>July 20</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>See  All Transactions</Text>
            </TouchableOpacity>
        </>
    )
}

export default Transactions

const styles = StyleSheet.create({

    items: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        height: 60,
        marginBottom: 80,
        backgroundColor: '#1a2e66',
        marginHorizontal: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
