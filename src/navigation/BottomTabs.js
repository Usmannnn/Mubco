import * as React from 'react';
import { View } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';

import Deck from '../screen/Deck';
import Detail from '../screen/Detail';
import Scanner from '../screen/Scanner';
import Calender from '../screen/Calender';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {


    return (
        <Tab.Navigator
            initialRouteName={'Deck'}
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused }) => {

                    const size = 30

                    if (route.name === 'Deck') {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? '#1a2e66' : '#d9d9d9', width: 50, height: 50, borderRadius: 30 }}>
                                <Ionicons name={'ios-person-circle-outline'} size={size} color={focused ? '#d9d9d9' : '#1a2e66'} />
                            </View>
                        )
                    }

                    else if (route.name === 'Detail') {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? '#1a2e66' : '#d9d9d9', width: 50, height: 50, borderRadius: 30 }}>
                                <AntDesign name={'pluscircle'} size={size} color={focused ? '#d9d9d9' : '#1a2e66'} />
                            </View>
                        )
                    }

                    else if (route.name === 'Scanner') {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? '#1a2e66' : '#d9d9d9', width: 50, height: 50, borderRadius: 30 }}>
                                <MaterialCommunityIcons name={'qrcode-scan'} size={size} color={focused ? '#d9d9d9' : '#1a2e66'} />
                            </View>
                        )
                    }

                    else if (route.name === 'Calender') {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? '#1a2e66' : '#d9d9d9', width: 50, height: 50, borderRadius: 30 }}>
                                <AntDesign name={'calendar'} size={size} color={focused ? '#d9d9d9' : '#1a2e66'} />
                            </View>
                        )
                    }
                }

            })}

            tabBarOptions={{
                activeTintColor: '#1a2e66',
                inactiveTintColor: 'white',
                keyboardHidesTabBar: true,
                showLabel: false,
                style: {
                    elevation: 0,
                    height: 85,
                    backgroundColor: '#d9d9d9',
                }
            }}

            sceneContainerStyle={{
                backgroundColor: 'white',
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50

            }}
        >

            <Tab.Screen name="Deck" component={Deck} />
            <Tab.Screen name="Detail" component={Detail} options={{ tabBarVisible: false }} />
            <Tab.Screen name="Scanner" component={Scanner} />
            <Tab.Screen name="Calender" component={Calender} />

        </Tab.Navigator>
    );
}

export default BottomTabs