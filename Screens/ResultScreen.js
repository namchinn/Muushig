import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    FlatList,
    Dimensions,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage';
const widthD = Dimensions.get('window').width;
const heightD = Dimensions.get('window').height;
function App({ navigation }) {

    const [lastOnoo1, setLastOnoo1] = useState([]);

    const utgaAwah = async () => {
        try {
            var value1 = await AsyncStorage.getItem('suuliinMor');
            setLastOnoo1(JSON.parse(value1));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        utgaAwah();
    }, []);

    const OnooItem = ({ title }) => (
        <View style={styles.onooView}>
            <Text style={styles.onooText}>{title}</Text>
        </View>
    );

    const renderOnoo = ({ item }) => (
        <OnooItem title={item} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.firstSection}>
                <ImageBackground source={require('../assets/pics/pexelCardd.jpg')} resizeMode='cover' style={styles.container1}>
                    <Image style={{ marginTop: 35, width: widthD / 8 * 7, }} source={require('../assets/pics/blueLogo.png')} />
                </ImageBackground>
            </View>
            <View>
                <FlatList
                    scrollEnabled={true}
                    numColumns={5}
                    horizontal={false}
                    data={lastOnoo1}
                    renderItem={renderOnoo}
                    keyExtractor={item => item?.id}
                />
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
    },
    onooView: {
        width: 60,
        height: 40,
        padding: 5,
        borderRightWidth: 1,
        marginHorizontal: 11,
    },
    onooText: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
});

export default App;
