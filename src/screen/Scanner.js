import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const { width, height } = Dimensions.get('window')

const Scanner = () => {


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

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
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(data);
    };

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            >
                <View style={styles.center}></View>
            </BarCodeScanner>
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
    center: {
        width: 200,
        height: 225,
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        left: width / 3 - 30,
        top: height / 3
    }
});


export default Scanner