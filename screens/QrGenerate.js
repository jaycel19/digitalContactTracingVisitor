import React, { useContext } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { View, Text, StyleSheet, Pressable } from "react-native";
import { VisitorContext } from '../context/VisitorContextProvider';

//style={{flex: 1, justifyContent: "space-between", flexDirection: 'row', backgroundColor: "white", padding: 15}}

const QrGenerate = () => {
    const { fullName, address, contact } = useContext(VisitorContext);
    return(
        <View style={{flex: 1, justifyContent: "space-between", flexDirection: "column"}}>
            <View>
                <QRCode
                    size={340}
                    value={JSON.stringify({
                        fullName: fullName,
                        address: address,
                        contact: contact
                    })}
                />
            </View>
            <View style={{
                borderWidth: 1,
                borderColor: "blue",
                padding: 10
            }}>
                <Text style={styles.textMarg}>Name: Jhun Chester lalongisip{fullName}</Text>
                <Text style={styles.textMarg}>Address: Kale hills{address}</Text>
                <Text style={styles.textMarg}>Contact #: 09263488299{contact}</Text>
                <View>
                    <Pressable style={styles.button} >
                        <Text style={styles.text}>Save</Text>
                    </Pressable>
                    <Pressable style={styles.button} >
                        <Text style={styles.text}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </View>
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
