import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const widthD = Dimensions.get('window').width;
const heightD = Dimensions.get('window').height;

function App({ navigation }) {

    const [hedenGar, setHedenGar] = useState('5');
    const [hedenTogrog, setHedenTogrog] = useState(0);
    const [hedenBoolt, setHedenBoolt] = useState(0);

    const [toglogch1, setToglogch1] = useState('1');
    const [toglogch2, setToglogch2] = useState('2');
    const [toglogch3, setToglogch3] = useState('3');
    const [toglogch4, setToglogch4] = useState('4');
    const [toglogch5, setToglogch5] = useState('5');

    const [onoodor, setOnoodor] = useState('Өнөөдөр');

    const onoodorAwah = () => {
        var date = new Date().getDay();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        var ognoo = year + '/' + month + '/' + date;
        setOnoodor(ognoo)
    };

    useEffect(() => {
        onoodorAwah();
    }, []);

    const hadgalah = async () => {
        if (hedenTogrog.length == 0 || hedenBoolt.length == 0) {
            Alert.alert(
                "Бал && Цаас",
                "Бүх талбарыг бөглөнө үү!",
                [
                    { text: "За", onPress: () => console.log("OK Pressed") }
                ]
            );
        } else {
            try {
                await AsyncStorage.setItem('hedenGar', JSON.stringify(hedenGar));
                await AsyncStorage.setItem('hedenTogrog', JSON.stringify(hedenTogrog));
                await AsyncStorage.setItem('hedenBoolt', JSON.stringify(hedenBoolt));

                await AsyncStorage.setItem('toglogch1', JSON.stringify(toglogch1));
                await AsyncStorage.setItem('toglogch2', JSON.stringify(toglogch2));
                await AsyncStorage.setItem('toglogch3', JSON.stringify(toglogch3));
                await AsyncStorage.setItem('toglogch4', JSON.stringify(toglogch4));
                await AsyncStorage.setItem('toglogch5', JSON.stringify(toglogch5));

                await AsyncStorage.setItem('onoodor', JSON.stringify(onoodor));
            } catch (error) {
                console.log(error);
            }
            navigation.navigate('MuushigScreen');
        }
    };

    const toogoorDugaarlah = async () => {
        if (hedenTogrog == 0 || hedenBoolt == 0) {
            Alert.alert(
                "Бал && Цаас",
                "Бүх талбарыг бөглөнө үү!",
                [
                    { text: "За", onPress: () => console.log("OK Pressed") }
                ]
            );
        } else {
            setToglogch1('1');
            setToglogch2('2');
            setToglogch3('3');
            setToglogch4('4');
            setToglogch5('5');
            try {
                await AsyncStorage.setItem('hedenGar', JSON.stringify(hedenGar));
                await AsyncStorage.setItem('hedenTogrog', JSON.stringify(hedenTogrog));
                await AsyncStorage.setItem('hedenBoolt', JSON.stringify(hedenBoolt));

                await AsyncStorage.setItem('toglogch1', JSON.stringify(toglogch1));
                await AsyncStorage.setItem('toglogch2', JSON.stringify(toglogch2));
                await AsyncStorage.setItem('toglogch3', JSON.stringify(toglogch3));
                await AsyncStorage.setItem('toglogch4', JSON.stringify(toglogch4));
                await AsyncStorage.setItem('toglogch5', JSON.stringify(toglogch5));

                await AsyncStorage.setItem('onoodor', JSON.stringify(onoodor));
            } catch (error) {
                console.log(error);
            }
            navigation.navigate('MuushigScreen');
        }

    };

    return (
        <ImageBackground source={require('../assets/pics/pexelCardd.jpg')} resizeMode='cover'>
            <View style={styles.container}>
                <View style={styles.firstSection}>
                    <Text style={styles.textOnSar}>{onoodor}</Text>
                    {/* <TextInput
                        style={styles.textInput}
                        placeholder='Хэдэн гар суух вэ?'
                        onChangeText={value => setHedenGar(value)}
                    /> */}
                    <TextInput
                        style={styles.textInput}
                        placeholder='Тооны хэдэн төгрөг вэ?'
                        onChangeText={value => setHedenTogrog(value)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Боолт хэдээр тоглох вэ?'
                        onChangeText={value => setHedenBoolt(value)}
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
                            placeholder='Тоглогчийн нэр'
                            onChangeText={value => setToglogch1(value)}
                        />
                    </View>
                    <View style={styles.nersAwdagView}>
                        <Text style={styles.nersAwdagDugaar}>2.</Text>
                        <TextInput
                            style={styles.textInputThird}
                            placeholder='Тоглогчийн нэр'
                            onChangeText={value => setToglogch2(value)}
                        />
                    </View>
                    <View style={styles.nersAwdagView}>
                        <Text style={styles.nersAwdagDugaar}>3.</Text>
                        <TextInput
                            style={styles.textInputThird}
                            placeholder='Тоглогчийн нэр'
                            onChangeText={value => setToglogch3(value)}
                        />
                    </View>
                    <View style={styles.nersAwdagView}>
                        <Text style={styles.nersAwdagDugaar}>4.</Text>
                        <TextInput
                            style={styles.textInputThird}
                            placeholder='Тоглогчийн нэр'
                            onChangeText={value => setToglogch4(value)}
                        />
                    </View>
                    <View style={styles.nersAwdagView}>
                        <Text style={styles.nersAwdagDugaar}>5.</Text>
                        <TextInput
                            style={styles.textInputThird}
                            placeholder='Тоглогчийн нэр'
                            onChangeText={value => setToglogch5(value)}
                        />
                    </View>
                    <View style={styles.toogoorDugaarlahView}>
                        <TouchableOpacity onPress={() => toogoorDugaarlah()}>
                            <Text style={styles.textToogoorDugaarlah}>Тоогоор дугаарлах</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => hadgalah()}>
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
        //fontFamily: 'Lobster-Regular',
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 15,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 5,
        marginHorizontal: 8,
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
        //fontFamily: 'Lobster-Regular',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textOnSar2: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 5,
        fontWeight: 'bold',
        borderBottomWidth: 2,
    },
    nersAwdagView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        marginHorizontal: 0,
        //borderBottomColor: '#59bdfd',
    },
    nersAwdagDugaar: {
        fontSize: 15,
        marginTop: 11,
        marginLeft: 15,
    },
    textInputThird: {
        fontSize: 15,
        textAlign: 'left',
        height: heightD / 18,
        fontWeight: 'bold',
    },
    textToogoorDugaarlah: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
        //color: 'yellow'
    },
    toogoorDugaarlahView: {
        backgroundColor: '#59bdfd',
        marginVertical: 10,
        marginHorizontal: 50,
        borderRadius: 15,
    }
});

export default App;
