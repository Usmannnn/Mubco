import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './BottomTabs';


const AppNavigationContainer = () => {
	return (
		<NavigationContainer>
            <BottomTabs />
		</NavigationContainer>
	);
};

export default AppNavigationContainer;