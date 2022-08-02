import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



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
        <View style={styles.text}>
            <Text style={styles.text}>{title}</Text>
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
            <Text style={styles.text}>Muushig hotloh Screen !!!</Text>

            <FlatList
                horizontal={true}
                data={ners}
                renderItem={renderItem}
                keyExtractor={item => item?.id}
            />

            <Text style={styles.text}>{hedenGar}</Text>
            <Text style={styles.text}>{hedenTogrog}</Text>
            <Text style={styles.text}>{hedenBoolt}</Text>
            <Text style={styles.text}>{toglogch1}</Text>
            <Text style={styles.text}>{toglogch2}</Text>
            <Button title='Go next' onPress={() => navigation.navigate('ResultScreen')} />
            <Button title='test' onPress={() => toogoorDugaarlah()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
