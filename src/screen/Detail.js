import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, BackHandler, TouchableOpacity } from 'react-native'

import Header from '../components/Header'

import { Entypo } from 'react-native-vector-icons'
import Modal from '../components/Modal'
import Transactions from '../components/Transactions'
import Calendar from '../screen/Calender'

const Detail = () => {

    const [status, setStatus] = useState(false)
    const [whichModal, setModal] = useState(true)


    const transaction = () => {
        setStatus(!status)
    }

    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', setStatus(false))
    //     return () => {
    //         BackHandler.removeEventListener('hardwareBackPress')
    //     }
    // },[])

    return (
        <View style={[styles.container, {
            backgroundColor: status ? 'black' : '#1a2e66',

        }]}>
            <View style={[styles.content, {
                backgroundColor: status ? 'black' : 'white',
            }]}>
                <Header
                    left={'chevron-left'}
                    right={'circle-with-plus'}
                    color={'#1a2e66'}
                    action={transaction}
                />
                <View style={styles.navContainer}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#1a2e66' }}>My Cards</Text>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: '#1a2e66' }}>Deposits</Text>
                    <Text style={{ fontWeight: '600', fontSize: 16, color: '#1a2e66' }}>Transactions</Text>
                </View>

                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 10 }}>
                        <Text style={{ color: 'white' }}>Current Balance</Text>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>VISA</Text>
                    </View>
                    <View style={{ backgroundColor: '#1a2e66', flex: 9 / 10, borderRadius: 35, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 15 }}>
                            <View>
                                <Text style={{ color: 'white' }}>Current Balance</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>$4,743.40</Text>
                            </View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>VISA</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 15 }}>
                            <Text style={{ color: 'white' }}>**********0975</Text>
                            <Text style={{ color: 'white' }}>08/22</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.navContainer, { alignSelf: 'flex-start', marginLeft: 35 }]}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#1a2e66' }}>Payment Details</Text>
                </View>


                <View style={styles.payments}>
                    <View style={styles.detail}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>Shopping</Text>
                            <TouchableOpacity
                            >
                                <Entypo name={'dots-two-vertical'} size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Text>20 June 2020</Text>
                                <Text>2:00 PM</Text>
                            </View>
                            <Entypo name={'shopping-basket'} size={20} color={'purple'} />
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>Shopping</Text>
                            <Entypo name={'dots-two-vertical'} size={20} color={'black'} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Text>20 June 2020</Text>
                                <Text>2:00 PM</Text>
                            </View>
                            <Entypo name={'shopping-basket'} size={20} color={'purple'} />
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>Shopping</Text>
                            <Entypo name={'dots-two-vertical'} size={20} color={'black'} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Text>20 June 2020</Text>
                                <Text>2:00 PM</Text>
                            </View>
                            <Entypo name={'shopping-basket'} size={20} color={'purple'} />
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>Shopping</Text>
                            <Entypo name={'dots-two-vertical'} size={20} color={'black'} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Text>20 June 2020</Text>
                                <Text>2:00 PM</Text>
                            </View>
                            <Entypo name={'shopping-basket'} size={20} color={'purple'} />
                        </View>
                    </View>
                </View>
            </View>

            <Modal status={status} >
                 <Calendar />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        marginTop: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    navContainer: {
        flex: 1 / 15,
        flexDirection: 'row',

        justifyContent: 'space-around',
        alignItems: 'center',
    },
    card: {
        flex: 2 / 5,
        backgroundColor: 'orange',
        marginHorizontal: 25,
        marginVertical: 15,
        borderRadius: 35,
        justifyContent: 'flex-end'
    },
    payments: {
        flex: 2 / 3,
        paddingHorizontal: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detail: {
        width: 165,
        height: 120,
        marginTop: 40,
        borderRadius: 40,
        justifyContent: 'space-around',

    }
})

export default Detail