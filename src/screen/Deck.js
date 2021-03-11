import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


import Header from '../components/Header'
import Loan from '../components/Loan'
import Request from '../components/Request'
import Topup from '../components/Topup'


const Deck = () => {
    return (
        <>
            <View style={styles.container}>

                <View style={{ backgroundColor: '#1a2e66' }}>
                    <Header
                        left={'square-o'}
                        right={'dots-two-vertical'}
                        color={'white'}
                    />
                </View>

                <View style={styles.headContainer}>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>Welcome Back!</Text>
                    </View>
                    <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image
                            source={require('../../assets/1.jpg')}
                            style={{ width: 110, height: 175, borderRadius: 20 }}
                        />
                        <View style={styles.info}>
                            <Text style={{ fontWeight: '700', fontSize: 18, color: 'white' }}>Hira R.</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>$4,763.40</Text>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: 'white' }}>Available Balance</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.navContainer}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#1a2e66' }}>Activities</Text>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: '#1a2e66' }}>Monthly Report</Text>
                </View>
                <View style={styles.itemContainer}>
                    <View style={{ justifyContent: 'space-between', }}>
                        <Loan />
                        <Topup />
                    </View>
                    <Request />
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    headContainer: {
        flex: 1 / 3,
        paddingHorizontal: 35,
        backgroundColor: '#1a2e66',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    info: {
        marginTop: 20
    },
    navContainer: {
        flex: 1 / 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 60
    },
    itemContainer: {
        flex: 9 / 15,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default Deck