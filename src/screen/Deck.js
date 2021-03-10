import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Header from '../components/Header'

const Deck = () => {
    return (
        <>
            <View style={styles.container}>

                <Header
                    left={'square-o'}
                    right={'dots-two-vertical'}
                />

                <View style={styles.headContainer}>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>Welcome Back!</Text>
                        <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
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
                </View>

                <View style={styles.navContainer}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#1a2e66' }}>Activities</Text>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: '#1a2e66' }}>Monthly Report</Text>
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
        position: 'relative',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default Deck