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
                                style={styles.inModalNissen}
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
                                style={styles.inModalNissen}
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
                                style={styles.inModalNissen}
                                onPress={() => { setModal3(false), setOnoo3(+5) }}
                            >
                                <Text style={styles.text}>Ниссэн</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
        height: heightD / 3,
        width: widthD - 100,
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
        padding: 5,
        height: 40,
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
