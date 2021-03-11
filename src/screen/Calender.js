import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import { CalendarList } from 'react-native-calendars';


const { width } = Dimensions.get('screen') 

const Calender = () => {
    return (
        <View>
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                calendarWidth={width}
                
            />
        </View>
    )
}

export default Calender

const styles = StyleSheet.create({})
