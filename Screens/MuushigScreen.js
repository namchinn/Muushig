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
        { id: '1', ner: toglogch1 },
        { id: '2', ner: toglogch2 },
        { id: '3', ner: toglogch3 },
        { id: '4', ner: toglogch4 },
        { id: '5', ner: toglogch5 },
    ];

    const Item = ({ title }) => (
        <View style={styles.ners}>
            <Text style={styles.nersText}>{title}</Text>
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

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/pics/pexelCardd.jpg')} resizeMode='cover' style={styles.container1}>
                <Image style={{ marginTop: 35, width: widthD / 8 * 7, }} source={require('../assets/pics/blueLogo.png')} />
                <FlatList
                    horizontal={true}
                    data={ners}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                />
            </ImageBackground>
            <View style={styles.container2}>
                {/* <FlatList
                    horizontal
                    data={ners}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                /> */}
                <Button title='Go next' onPress={() => navigation.navigate('ResultScreen')} />
                <Button title='test' onPress={() => toogoorDugaarlah()} />
                <View style={{height: 2, width: widthD, backgroundColor: '#000'}}></View>
                <Text style={styles.text}>{hedenGar}</Text>
                <Text style={styles.text}>{hedenTogrog}</Text>
                <Text style={styles.text}>{hedenBoolt}</Text>
                <Text style={styles.text}>{toglogch1}</Text>
                <Text style={styles.text}>{toglogch2}</Text>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1: {
        height: heightd / 4,
        width: widthD,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        height: heightd / 4 * 3 + 45,
        width: widthD,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff99',
        marginTop: -45,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
        marginHorizontal: 11,
        padding: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    nersText: {
        color: 'yellow',
        fontSize: 15,
        textAlign: 'center',
    }

});

export default App;
