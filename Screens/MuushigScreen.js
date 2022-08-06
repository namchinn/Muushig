import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Dimensions,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
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

    const [onoodor, setOnoodor] = useState('Өнөөдөр');
    const [idd, setIdd] = useState(11);

    const [onoo, setOnoo] = useState([
        { id: '1', item: 15 },
        { id: '2', item: 15 },
        { id: '3', item: 15 },
        { id: '4', item: 15 },
        { id: '5', item: 15 },
        { id: '6', item: 15 },
        { id: '7', item: 15 },
        { id: '8', item: 15 },
        { id: '9', item: 15 },
        { id: '10', item: 15 },
        { id: '11', item: 15 },
    ])

    const [onoo1, setOnoo1] = useState(0);
    const [onoo2, setOnoo2] = useState(0);
    const [onoo3, setOnoo3] = useState(0);
    const [onoo4, setOnoo4] = useState(0);
    const [onoo5, setOnoo5] = useState(0);

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
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        utgaAwah();
        toogoorDugaarlah();
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


    const toogoorDugaarlah = () => {
        console.log(hedenGar);
        console.log(hedenTogrog);
        console.log(hedenBoolt);

        console.log(toglogch1);
        console.log(toglogch2);
        console.log(toglogch3);
        console.log(toglogch4);
        console.log(toglogch5);

        console.log(onoodor);
    };

    const renderItem = ({ item }) => (
        <Item title={item.ner} />
    );
    const renderOnoo = ({ item }) => (
        <OnooItem title={item.id} />
    );
    const onooNemeh = () => {
        var iddd = idd
        iddd++;
        setIdd(iddd);
        setOnoo([...onoo, { id: iddd.toString(), item: toglogch1.toString() }]);
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
                <Button title='test' onPress={() => onooNemeh()} />
            </View>
            <View style={styles.container3}>
                <TouchableOpacity onPress={() => onooNemeh()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo1}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooNemeh()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo2}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooNemeh()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo3}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooNemeh()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo4}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooNemeh()}>
                    <View style={styles.bottomButtonView}>
                        <Text style={styles.bottomButtonText}>{onoo5}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onooNemeh()}>
                    <Image style={{width: 45, height: 45}} source={require('../assets/pics/addd.png')}/>
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
        //backgroundColor: '#F2E205',
        backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderBottomColor: 'red',
        borderTopColor: 'red'
    },
    text: {
        //color: '#000',
        color: 'gray',
        fontSize: 24,
        fontWeight: '600',
    },
    ners: {
        //backgroundColor: '#11234f',
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
        //backgroundColor: '#1e87db',
        width: 60,
        height: 40,
        marginHorizontal: 11,
        padding: 5,
        borderRightWidth: 1,
        //borderLeftWidth: 1,
        // borderTopLeftRadius: 5,
        // borderBottomRightRadius: 5,
        // borderTopRightRadius: 20,
        // borderBottomLeftRadius: 20,
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

        //padding: 5,
    }
});

export default App;
