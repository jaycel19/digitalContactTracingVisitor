import React, { useContext } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { VisitorContext } from '../context/VisitorContextProvider';
import CustomButton from '../components/CustomButton';

//style={{flex: 1, justifyContent: "space-between", flexDirection: 'row', backgroundColor: "white", padding: 15}}

const QrGenerate = ({navigation}) => {
    const { fullName, address, contact, setFullName, setAddress, setContact } = useContext(VisitorContext);
    const handleEditBtn = () => {
        navigation.navigate("Home");
    }

    const handleOkBtn = () => {
        setFullName("");
        setAddress("");
        setContact("");
        navigation.navigate("Home");
    }
    return(
        <SafeAreaView style={{flex: 1, justifyContent: "space-between", flexDirection: "column", backgroundColor: '#fff'}}>
            
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{marginTop: 15}}>
                        <QRCode
                            size={340}
                            value={JSON.stringify({
                                fullName: fullName,
                                address: address,
                                contact: contact
                            })}
                        />
                    </View>
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: "blue",
                    padding: 10
                }}>
                    <Text style={styles.textMarg}>Name: Jhun Chester lalongisip{fullName}</Text>
                    <Text style={styles.textMarg}>Address: Kale hills{address}</Text>
                    <Text style={styles.textMarg}>Contact #: 09263488299{contact}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <CustomButton 
                            onPress={handleOkBtn}
                            title="Ok"
                        />
                        <CustomButton
                            onPress={handleEditBtn}
                            title="Edit"
                        />
                    </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textMarg: {
        margin: 5
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default QrGenerate;
