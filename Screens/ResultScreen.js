import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    TextInput,
    Image,
    ImageBackground
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
                <Button title='Go back' onPress={() => navigation.navigate('QuestionScreen')} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstSection: {
        margin: 8,
        borderRadius: 15,
        backgroundColor: '#ffffff99',
        width: widthD - 100,
        height: heightD / 3,
    },
    textInput: {
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 15,
        textAlign: 'center',
        margin: 8,
    }
});

export default App;
