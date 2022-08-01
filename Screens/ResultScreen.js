import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Dimensions,
    TextInput,
} from 'react-native';
const widthD = Dimensions.get('window').width;
const heightD = Dimensions.get('window').height;
function App({ navigation }) {

    const [hedenGar, setHedenGar] = useState('5');



    return (
        <View style={styles.container}>
            <View style={styles.firstSection}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Хэдэн гар суух вэ?'
                    onChangeText={value => setHedenGar(value)}
                />
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
