import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, Animated, Keyboard, BackHandler, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import { CalendarList } from 'react-native-calendars';


const { width, height } = Dimensions.get('screen')

const Calender = () => {

    const [event, setEvent] = useState([])
    const [eventName, setEventName] = useState(null)
    const [date, setDate] = useState(null)
    const [popup, setPopup] = useState(false)


    const position = useRef(new Animated.Value(height)).current


    useEffect(() => {

        const backHandler = BackHandler.addEventListener("hardwareBackPress", () => setPopup(false));
        return () => backHandler.remove();
    }, []);

    useEffect(() => {

        if (popup) {
            Animated.timing(position, {
                toValue: 200,
                duration: 200,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(position, {
                toValue: height,
                duration: 200,
                useNativeDriver: false
            }).start()
        }

    }, [popup]);


    const handleLongPress = (selectedDate) => {
        setPopup(true)
        setDate(selectedDate)
    }

    const handleConfirm = () => {

        setEvent([...event, [
            eventName,
            date
        ]])
        setEventName(null)
        setPopup(false)
        Keyboard.dismiss()
    }

    return (
        <>
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                calendarWidth={width}
                onDayLongPress={(day) => handleLongPress(day.dateString)}

            />
            {
                event.length == 0 ?
                    <View style={styles.content}>
                    <Text style={styles.text}>Burada Hiç Etkinlik Yok</Text>
                    </View>
                    :
                    <>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ flex: 1, marginBottom: 30 }}
                        >
                            {
                                event.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <View
                                            style={styles.content}
                                            key={index}
                                        >
                                            <Text style={styles.text}>{item[0]}</Text>
                                            <Text style={styles.text}>{item[1]}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </>
            }

            <Animated.View
                style={[styles.popup, {
                    top: position,

                }]}
            >
                <TextInput
                    placeholder={'Etkinlik Adı'}
                    style={styles.eventInput}
                    onChangeText={setEventName}
                    value={eventName}
                    placeholderTextColor={'black'}
                />
                <View
                    style={styles.eventInput}
                >
                    <Text style={[styles.text, { color: 'black'}]}>{date}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        style={styles.eventInput}
                        onPress={() => setPopup(false)}
                    >
                        <Text style={[styles.text, { color: 'black'}]}>İPTAL ET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.eventInput}
                        onPress={() => handleConfirm()}
                    >
                        <Text style={[styles.text, { color: 'black'}]}>ONAYLA</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </>
    )
}


const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1a2e66',
        opacity: 0.7,
        minHeight: 50,
        marginHorizontal: 20,
        marginVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: 'row'
    },
    popup: {
        height: height / 3,
        marginHorizontal: width / 10,
        backgroundColor: '#cc2112',
        opacity: 0.8,
        position: 'absolute',
        left: 10,
        right: 10,
        borderRadius: 50,
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#1a2e66'
    },
    eventInput: {
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#1a2e66'
    },
    text: {
        fontSize: 16,
        fontWeight: '800',
        color: 'white'
    }
})


export default Calender