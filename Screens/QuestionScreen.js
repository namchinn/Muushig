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
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
const widthD = Dimensions.get('window').width;
const heightD = Dimensions.get('window').height;
function App({ navigation }) {

    const [hedenGar, setHedenGar] = useState('5');



    return (
        <ImageBackground source={require('../assets/pics/pexelCardd.jpg')} resizeMode='cover'>
            <View style={styles.container}>
                <View style={styles.firstSection}>
                    <Text style={styles.textOnSar}>2022/7/27</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Хэдэн гар суух вэ?'
                        onChangeText={value => setHedenGar(value)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Тооны хэдэн төгрөг вэ?'
                        onChangeText={value => setHedenGar(value)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Боолт хэдээр тоглох вэ?'
                        onChangeText={value => setHedenGar(value)}
                    />
                </View>


                <View>
                    <Image source={require('../assets/pics/blueLogo.png')} />
                </View>


                <View style={styles.secondSection}>
                    <Text style={styles.textOnSar2}>Тоглогчдын нэрс</Text>
                    <View style={styles.nersAwdagView}>
                        <Text style={styles.nersAwdagDugaar}>1.</Text>
                        <TextInput
                            style={styles.textInputThird}
                            placeholder='Хэдэн гар суух вэ?'
                            onChangeText={value => setHedenGar(value)}
                        />
                    </View>
                    <TextInput
                        style={styles.textInputSecond}
                        placeholder='Тооны хэдэн төгрөг вэ?'
                        onChangeText={value => setHedenGar(value)}
                    />
                    <TextInput
                        style={styles.textInputSecond}
                        placeholder='Боолт хэдээр тоглох вэ?'
                        onChangeText={value => setHedenGar(value)}
                    />
                    <TextInput
                        style={styles.textInputSecond}
                        placeholder='Боолт хэдээр тоглох вэ?'
                        onChangeText={value => setHedenGar(value)}
                    />
                    <TextInput
                        style={styles.textInputSecond}
                        placeholder='Боолт хэдээр тоглох вэ?'
                        onChangeText={value => setHedenGar(value)}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MuushigScreen')}>
                        <Image source={require('../assets/pics/ehleh.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        //backgroundColor: '#7141D9',
        height: heightD,
        width: widthD,
    },
    firstSection: {
        margin: 8,
        borderRadius: 25,
        borderWidth: 2,
        backgroundColor: '#ffffff',
        width: widthD - 100,
        height: heightD / 3,
        marginTop: 25,
        opacity: 0.95,
    },
    secondSection: {
        borderRadius: 25,
        borderWidth: 2,
        backgroundColor: '#ffffff',
        width: widthD - 100,
        height: heightD / 5 * 2,
        opacity: 0.95,
    },
    textInput: {
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 15,
        textAlign: 'center',
        margin: 8,
        height: heightD / 15,
        fontWeight: 'bold',
    },
    textInputSecond: {
        fontSize: 15,
        borderBottomWidth: 2,
        borderRadius: 15,
        textAlign: 'center',
        margin: 3,
        height: heightD / 18,
        fontWeight: 'bold',
    },
    textOnSar: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 8,
        fontWeight: 'bold',
    },
    textOnSar2: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 8,
        fontWeight: 'bold',
        borderBottomWidth: 2,
    },
    nersAwdagView: {
        flexDirection: 'row'
    },
    nersAwdagDugaar: {
        fontSize: 15
    },
    textInputThird: {
        fontSize: 15,
        // borderBottomWidth: 2,
        // borderRadius: 15,
        textAlign: 'left',
        //margin: 3,
        height: heightD / 18,
        fontWeight: 'bold',
        borderWidth:1
    },
});

export default App;
