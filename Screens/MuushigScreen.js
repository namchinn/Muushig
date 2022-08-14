import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    ImageBackground,
    Image,
    TouchableOpacity,
    Modal,
    Alert,
    BackHandler
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const widthD = Dimensions.get('window').width;
const heightd = Dimensions.get('window').height;

function App({ navigation }) {

    const [hedenGar, setHedenGar] = useState('5');
    const [hedenTogrog, setHedenTogrog] = useState('500');
    const [hedenBoolt, setHedenBoolt] = useState('1000');

    const [toglogch1, setToglogch1] = useState('1');
    const [toglogch2, setToglogch2] = useState('2');
    const [toglogch3, setToglogch3] = useState('3');
    const [toglogch4, setToglogch4] = useState('4');
    const [toglogch5, setToglogch5] = useState('5');

    const [urgeljluuleh, setUrgeljluuleh] = useState(false);

    const [onoodor, setOnoodor] = useState('Өнөөдөр');
    const [idd, setIdd] = useState(6);

    const [onoo, setOnoo] = useState([
        { id: '1', item: 15 },
        { id: '2', item: 15 },
        { id: '3', item: 15 },
        { id: '4', item: 15 },
        { id: '5', item: 15 },
    ]);

    const [onoo1, setOnoo1] = useState(0);
    const [onoo2, setOnoo2] = useState(0);
    const [onoo3, setOnoo3] = useState(0);
    const [onoo4, setOnoo4] = useState(0);
    const [onoo5, setOnoo5] = useState(0);

    const [modal1, setModal1] = useState(false);
    const onooHandler1 = () => {
        setModal1(true);
    }

    const [modal2, setModal2] = useState(false);
    const onooHandler2 = () => {
        setModal2(true);
    }

    const [modal3, setModal3] = useState(false);
    const onooHandler3 = () => {
        setModal3(true);
    }

    const [modal4, setModal4] = useState(false);
    const onooHandler4 = () => {
        setModal4(true);
    }

    const [modal5, setModal5] = useState(false);
    const onooHandler5 = () => {
        setModal5(true);
    }

    const utgaAwah = async () => {
        try {
            var value1 = await AsyncStorage.getItem('hedenGar');
            setHedenGar(JSON.parse(value1));
            var value2 = await AsyncStorage.getItem('hedenTogrog');
            setHedenTogrog(JSON.parse(value2));
            var value3 = await AsyncStorage.getItem('hedenBoolt');
            setHedenBoolt(JSON.parse(value3));

            var value4 = await AsyncStorage.getItem('toglogch1');
            setToglogch1(JSON.parse(value4));
            var value5 = await AsyncStorage.getItem('toglogch2');
            setToglogch2(JSON.parse(value5));
            var value6 = await AsyncStorage.getItem('toglogch3');
            setToglogch3(JSON.parse(value6));
            var value7 = await AsyncStorage.getItem('toglogch4');
            setToglogch4(JSON.parse(value7));
            var value8 = await AsyncStorage.getItem('toglogch5');
            setToglogch5(JSON.parse(value8));

            var value9 = await AsyncStorage.getItem('onoodor');
            setOnoodor(JSON.parse(value9));

            var value10 = await AsyncStorage.getItem('onoo');
            setOnoo(JSON.parse(value10));
            console.log('onoo ', onoo);

            var value11 = await AsyncStorage.getItem('id');
            setIdd(JSON.parse(value11));

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        utgaAwah();
    }, []);
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Бал & Цаас", "Та гарахдаа итгэлтэй байна уу?", [
                {
                    text: "Үгүй",
                    onPress: () => null,
                    style: "cancel"
                },
                {
                    text: "Тийм", onPress: async () => {
                        setUrgeljluuleh(false);
                        try {
                            await AsyncStorage.setItem('urgeljluuleh', JSON.stringify(urgeljluuleh));
                            BackHandler.exitApp();
                        } catch (error) {
                            
                        }
                    }
                }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const ners = [
        { id: '1', ner: toglogch1.substring(0, 3) },
        { id: '2', ner: toglogch2.substring(0, 3) },
        { id: '3', ner: toglogch3.substring(0, 3) },
        { id: '4', ner: toglogch4.substring(0, 3) },
        { id: '5', ner: toglogch5.substring(0, 3) },
    ];

    const Item = ({ title }) => (
        <View style={styles.ners}>
            <Text style={styles.nersText}>{title}</Text>
        </View>
    );

    const OnooItem = ({ title }) => (
        <View style={styles.onooView}>
            <Text style={styles.onooText}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.ner} />
    );
    const renderOnoo = ({ item }) => (
        <OnooItem title={item.id} />
    );

    const onooNemeh = async () => {
        var niilber = onoo1 + onoo2 + onoo3 + onoo4 + onoo5;
        var niit = [onoo1, onoo2, onoo3, onoo4, onoo5];
        var a = 0;
        // for (var i = 0; i < niit.length; i++) {
            //console.log(niit[0]);
            // if (niit[i] > 0 || niit[i] < 0) {
            //     a++;
            //     console.log(i);
            // }
        // };
        if (niilber == -5 || niilber == 0 || niilber == 5 || niilber == 15) {
            var last5 = onoo[onoo.length - 5].item;
            var last4 = onoo[onoo.length - 4].item;
            var last3 = onoo[onoo.length - 3].item;
            var last2 = onoo[onoo.length - 2].item;
            var last1 = onoo[onoo.length - 1].item;
            var last55 = last5 + onoo1
            var last44 = last4 + onoo2
            var last33 = last3 + onoo3
            var last22 = last2 + onoo4
            var last11 = last1 + onoo5
            var iddd = idd
            var onooCopy = onoo;
            onooCopy.push(
                { id: (iddd++).toString(), item: last55 },
                { id: (iddd++).toString(), item: last44 },
                { id: (iddd++).toString(), item: last33 },
                { id: (iddd++).toString(), item: last22 },
                { id: (iddd++).toString(), item: last11 },
                );
            // setOnoo([...onoo,
            // { id: (iddd++).toString(), item: last55 },
            // { id: (iddd++).toString(), item: last44 },
            // { id: (iddd++).toString(), item: last33 },
            // { id: (iddd++).toString(), item: last22 },
            // { id: (iddd++).toString(), item: last11 },
            // ]);
            console.log(onooCopy)
            setOnoo(onooCopy);
            var iddddd = iddd;
            setIdd(iddddd);
            setOnoo1(0);
            setOnoo2(0);
            setOnoo3(0);
            setOnoo4(0);
            setOnoo5(0);

            var tur = true;

            try {
                await AsyncStorage.setItem('onoo', JSON.stringify(onoo));
                console.log('onoo door ',onoo);
                await AsyncStorage.setItem('urgeljluuleh', JSON.stringify(tur));
                await AsyncStorage.setItem('id', JSON.stringify(iddd));
            } catch (error) {
                console.log(error);
            }

            if (last55 <= 0 || last44 <= 0 || last33 <= 0 || last22 <= 0 || last11 <= 0) {
                Alert.alert(
                    "Бал & Цаас",
                    "Баяр хүргэе!",
                    [
                        {
                            text: "За", onPress: () => {
                                setOnoo1(0);
                                setOnoo2(0);
                                setOnoo3(0);
                                setOnoo4(0);
                                setOnoo5(0);
                            }
                        }
                    ]
                );
            }
        } else {
            Alert.alert(
                "Бал & Цаас",
                "Үнэн зөв бөглөнө үү!",
                [
                    {
                        text: "За"
                    }
                ]
            );

        };

    };

    const onooHasah = () => {
        var onooo = onoo;
        onooo = onooo.slice(0, onooo.length - 5,);
        var iddd = idd;
        var idddd = iddd - 5;
        setOnoo(onooo);
        setIdd(idddd);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/pics/pexelCardd.jpg')} resizeMode='cover' style={styles.container1}>
                <Image style={{ marginTop: 35, width: widthD / 8 * 7, }} source={require('../assets/pics/blueLogo.png')} />
            </ImageBackground>
            <View style={styles.container13}>
                <FlatList
                    horizontal={true}
                    data={ners}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                />
            </View>
            <View style={styles.container2}>
                <FlatList
                    scrollEnabled={true}
                    numColumns={5}
                    horizontal={false}
                    data={onoo}
                    renderItem={renderOnoo}
                    keyExtractor={item => item?.id}
                />
            </View>
            <View style={styles.container3}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal1}
                    onRequestClose={() => {
                        setModal1(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal1(false), setOnoo1(-1) }}
                            >
                                <Text style={styles.text}>1 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal1(false), setOnoo1(-2) }}
                            >
                                <Text style={styles.text}>2 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal1(false), setOnoo1(-3) }}
                            >
                                <Text style={styles.text}>3 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal1(false), setOnoo1(-4) }}
                            >
                                <Text style={styles.text}>4 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal1(false), setOnoo1(-5) }}
                            >
                                <Text style={styles.text}>5 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal1(false), setOnoo1(0) }}
                            >
                                <Text style={styles.text}>Өнжсөн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal1(false), setOnoo1(+5) }}
                            >
                                <Text style={styles.text}>Ниссэн</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal2}
                    onRequestClose={() => {
                        setModal2(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal2(false), setOnoo2(-1) }}
                            >
                                <Text style={styles.text}>1 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal2(false), setOnoo2(-2) }}
                            >
                                <Text style={styles.text}>2 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal2(false), setOnoo2(-3) }}
                            >
                                <Text style={styles.text}>3 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal2(false), setOnoo2(-4) }}
                            >
                                <Text style={styles.text}>4 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal2(false), setOnoo2(-5) }}
                            >
                                <Text style={styles.text}>5 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal2(false), setOnoo2(0) }}
                            >
                                <Text style={styles.text}>Өнжсөн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal2(false), setOnoo2(+5) }}
                            >
                                <Text style={styles.text}>Ниссэн</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal3}
                    onRequestClose={() => {
                        setModal3(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal3(false), setOnoo3(-1) }}
                            >
                                <Text style={styles.text}>1 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal3(false), setOnoo3(-2) }}
                            >
                                <Text style={styles.text}>2 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal3(false), setOnoo3(-3) }}
                            >
                                <Text style={styles.text}>3 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal3(false), setOnoo3(-4) }}
                            >
                                <Text style={styles.text}>4 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal3(false), setOnoo3(-5) }}
                            >
                                <Text style={styles.text}>5 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal3(false), setOnoo3(0) }}
                            >
                                <Text style={styles.text}>Өнжсөн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal3(false), setOnoo3(+5) }}
                            >
                                <Text style={styles.text}>Ниссэн</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal4}
                    onRequestClose={() => {
                        setModal4(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal4(false), setOnoo4(-1) }}
                            >
                                <Text style={styles.text}>1 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal4(false), setOnoo4(-2) }}
                            >
                                <Text style={styles.text}>2 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal4(false), setOnoo4(-3) }}
                            >
                                <Text style={styles.text}>3 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal4(false), setOnoo4(-4) }}
                            >
                                <Text style={styles.text}>4 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal4(false), setOnoo4(-5) }}
                            >
                                <Text style={styles.text}>5 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal4(false), setOnoo4(0) }}
                            >
                                <Text style={styles.text}>Өнжсөн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal4(false), setOnoo4(+5) }}
                            >
                                <Text style={styles.text}>Ниссэн</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal5}
                    onRequestClose={() => {
                        setModal5(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal5(false), setOnoo5(-1) }}
                            >
                                <Text style={styles.text}>1 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal5(false), setOnoo5(-2) }}
                            >
                                <Text style={styles.text}>2 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal5(false), setOnoo5(-3) }}
                            >
                                <Text style={styles.text}>3 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal5(false), setOnoo5(-4) }}
                            >
                                <Text style={styles.text}>4 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal5(false), setOnoo5(-5) }}
                            >
                                <Text style={styles.text}>5 идсэн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal5(false), setOnoo5(0) }}
                            >
                                <Text style={styles.text}>Өнжсөн</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.inModal}
                                onPress={() => { setModal5(false), setOnoo5(+5) }}
                            >
                                <Text style={styles.text}>Ниссэн</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity onPress={() => onooHandler1()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo1}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooHandler2()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo2}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooHandler3()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo3}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooHandler4()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo4}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooHandler5()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo5}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity delayLongPress={1000} onLongPress={() => { onooHasah() }} activeOpacity={0.6} onPress={() => onooNemeh()}>
                    <Image style={{ width: 45, height: 45 }} source={require('../assets/pics/two2.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: widthD,
    },
    container2: {
        flex: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: widthD,
    },
    container3: {
        flex: 0.7,
        width: widthD,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container13: {
        flex: 0.7,
        width: widthD,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderBottomColor: 'red',
        borderTopColor: 'red'
    },
    text: {
        color: 'gray',
        fontSize: 24,
        fontWeight: '600',
    },
    ners: {
        backgroundColor: '#1e87db',
        width: 60,
        height: 40,
        marginHorizontal: 10,
        padding: 5,
        borderWidth: 0.4,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    nersText: {
        color: 'yellow',
        fontSize: 15,
        textAlign: 'center',
    },
    onooView: {
        width: 60,
        height: 40,
        marginHorizontal: 11,
        padding: 5,
        borderRightWidth: 1,
    },
    onooText: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
    },
    bottomButtonView: {
        width: widthD / 8 - 5,
        height: widthD / 8 - 5,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center'
    },
    bottomButtonText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    inModal: {
        borderWidth: 1,
        borderRadius: 25,
        marginVertical: 8,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 8,
    }
});

export default App;
