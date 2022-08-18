import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    Modal,
    Alert,
    TextInput,
    Dimensions,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const widthD = Dimensions.get('window').width;
const heightD = Dimensions.get('window').height;

function App({ navigation }) {

    const [hedenGar, setHedenGar] = useState('5');
    const [hedenBoolt, setHedenBoolt] = useState(0);
    const [hedenTogrog, setHedenTogrog] = useState(0);

    const [toglogch1, setToglogch1] = useState('1');
    const [toglogch2, setToglogch2] = useState('2');
    const [toglogch3, setToglogch3] = useState('3');
    const [toglogch4, setToglogch4] = useState('4');
    const [toglogch5, setToglogch5] = useState('5');

    const [urgelj, setUrgelj] = useState(false);

    const fal = false;

    const [onoo, setOnoo] = useState([
        { id: '1', item: 15 },
        { id: '2', item: 15 },
        { id: '3', item: 15 },
        { id: '4', item: 15 },
        { id: '5', item: 15 },
    ]);

    const [idd, setIdd] = useState(6);

    const [onoodor, setOnoodor] = useState('Өнөөдөр');

    const onoodorAwah = () => {
        var date = new Date().getDay();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        var ognoo = year + '/' + month + '/' + date;
        setOnoodor(ognoo)
    };

    const urgeljlehuu = async () => {
        try {
            value = await AsyncStorage.getItem('urgeljluuleh');
            setUrgelj(JSON.parse(value));

            if (JSON.parse(value) == true) {
                Alert.alert(
                    "Бал & Цаас",
                    "Өмнөх тоглолтоо үргэлжлүүлэх үү?",
                    [
                        {
                            text: "Үгүй",
                            onPress: async () => await AsyncStorage.setItem('urgeljluuleh', JSON.stringify(fal)),
                            style: "cancel"
                        },
                        { text: "Тийм", onPress: () => navigation.navigate('MuushigScreen') }
                    ]
                );
            };
        } catch (error) {
            console.log(error)
        }
    };

    const createTwoButtonAlert = () => {
        Alert.alert(
            "Бал & Цаас",
            "Өмнөх тоглолтоо үргэлжлүүлэх үү?",
            [
                {
                    text: "Үгүй",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Тийм", onPress: () => navigation.navigate('MuushigScreen') }
            ]
        );
    }

    useEffect(() => {
        urgeljlehuu();
        onoodorAwah();

    }, []);

    const hadgalah = async () => {
        if (hedenTogrog == 0 || hedenBoolt == 0) {
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

                await AsyncStorage.setItem('id', JSON.stringify(idd));

                await AsyncStorage.setItem('onoo', JSON.stringify(onoo));
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
                    <TextInput
                        style={styles.textInput}
                        keyboardType={'numeric'}
                        placeholder='Тооны хэдэн төгрөг вэ?'
                        onChangeText={value => setHedenTogrog(value)}
                    />
                    <TextInput
                        style={styles.textInput}
                        keyboardType={'numeric'}
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
        width: widthD,
        height: heightD,
        alignItems: 'center',
    },
    firstSection: {
        margin: 8,
        marginTop: 25,
        opacity: 0.95,
        borderWidth: 2,
        borderRadius: 25,
        height: heightD / 3,
        width: widthD - 100,
        backgroundColor: '#ffffff',
    },
    secondSection: {
        opacity: 0.95,
        borderWidth: 2,
        borderRadius: 25,
        width: widthD - 100,
        height: heightD / 5 * 2,
        backgroundColor: '#ffffff',
    },
    textInput: {
        marginTop: 5,
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 8,
        height: heightD / 15,
    },
    textInputSecond: {
        margin: 3,
        fontSize: 15,
        borderRadius: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 2,
        height: heightD / 18,
    },
    textOnSar: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textOnSar2: {
        fontSize: 20,
        paddingVertical: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 2,
    },
    nersAwdagView: {
        marginHorizontal: 0,
        flexDirection: 'row',
        borderBottomWidth: 1,
    },
    nersAwdagDugaar: {
        fontSize: 15,
        marginTop: 11,
        marginLeft: 15,
    },
    textInputThird: {
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold',
        height: heightD / 18,
    },
    textToogoorDugaarlah: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    toogoorDugaarlahView: {
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 50,
        backgroundColor: '#59bdfd',
    }
});

export default App;
