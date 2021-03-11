import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = () => {


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => { askPermission() }, []);

    if (hasPermission === null) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Requesting for camera permission</Text>
            </View>
        )
    }
    if (hasPermission === false) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>No access to camera</Text>;
            </View>
        )
    }

    const askPermission = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(data);
    };

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});


export default Scanner