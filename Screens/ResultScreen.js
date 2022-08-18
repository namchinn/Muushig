import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    Dimensions,
    StyleSheet,
    ImageBackground,
} from 'react-native';
const widthD = Dimensions.get('window').width;
const heightD = Dimensions.get('window').height;
function App({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.firstSection}>
            <ImageBackground source={require('../assets/pics/pexelCardd.jpg')} resizeMode='cover' style={styles.container1}>
                <Image style={{ marginTop: 35, width: widthD / 8 * 7, }} source={require('../assets/pics/blueLogo.png')} />
            </ImageBackground>
            </View>
            <View>
                <Text style={styles.text}>Result Screen !!!</Text>
                <Button title='Go back' onPress={() => navigation.navigate('MuushigScreen')} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstSection: {
        margin: 8,
        borderRadius: 15,
        width: widthD - 100,
        height: heightD / 3,
        backgroundColor: '#ffffff99',
    },
    textInput: {
        margin: 8,
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 15,
        textAlign: 'center',
    }
});

export default App;
