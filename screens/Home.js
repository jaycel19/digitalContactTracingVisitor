import React, { useContext, useState, useEffect } from "react";
import { 
    Alert,
    Modal,
    Button, 
    Text, 
    View, 
    SafeAreaView, 
    TextInput, 
    StyleSheet, 
    Pressable } from "react-native";
import { AuthContext } from "./../context/AuthContextProvider";
import { VisitorContext } from "../context/VisitorContextProvider";
import CusTextInput from "./../components/CusTextInput";
import QrGenerate from "./QrGenerate";

const Home = ({route, navigation}) => {
    const [isLog, setIsLog] = useContext(AuthContext);
    const {fullName, setFullName, address, setAddress, contact, setContact} = useContext(VisitorContext);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleClickLog = () =>{
        navigation.navigate("Login");
    }
    const handleClickReg = () =>{
        navigation.navigate("Register");
    }
    const submitHandle = () => {
        if(fullName === "" || address === "" || contact === ""){
            alert("empty")
        }else{
            if(contact.length < 11 && contact.length !== 0){
                alert("Number too short");
            }else if(fullName.length < 6 && fullName.length !== 0){
                alert("Name Too short");
            }else if(address.length < 5 && address.length !== 0){
                alert("address too short");
            }else{
                navigation.navigate("QrGenerate");
            }
        }
    }
    return(
        <SafeAreaView>
            <Text style={styles.h1Styles} >DIGITAL CONTACT TRACING</Text>
            <Text style={styles.h2Styles} >VISITOR</Text>
            {isLog ?
                (<View><View style={styles.inputStyles}>
                    <View style={styles.textInput}>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={newFullname => setFullName(newFullname)}
                            value={fullName}
                            placeholder="Full Name:"
                            keyboardType="default"
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={newAddress => setAddress(newAddress)}
                            value={address}
                            placeholder="Address:"
                            keyboardType="default"
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            onChangeText={newContact => setContact(newContact)}
                            value={contact}
                            placeholder="Contact:"
                            keyboardType="number-pad"
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.button}>
                    <Pressable style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        borderRadius: 4,
                        elevation: 3,
                        backgroundColor: 'white',
                    }} onPress={submitHandle}>
                        <Text style={{
                            fontSize: 16,
                            lineHeight: 21,
                            fontWeight: 'bold',
                            letterSpacing: 0.25,
                            color: 'blue',
                        }}>Submit</Text>
                    </Pressable>
                </View>
                
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isSubmit}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!isSubmit);
                        }}>
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalText}>
                            <QrGenerate 
                                fullName={fullName}
                                address={address}
                                contact={contact}
                            />
                            </View>
                            <View style={styles.buttonView}>
                            <Pressable
                            style={[styles.buttonModal, styles.buttonClose]}
                            onPress={() => setIsSubmit(!isSubmit)}>
                            <Text style={styles.textStyle}>OK</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.buttonModal, styles.buttonClose]}
                            onPress={() => setIsSubmit(!isSubmit)}>
                            <Text style={styles.textStyle}>CANCEL</Text>
                            </Pressable>
                            </View>
                        </View>
                        </View>
                    </Modal>
                </View>
                
                </View>
                ) : (
                <View style={styles.btn}>
                    <Pressable style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        borderRadius: 4,
                        elevation: 3,
                        backgroundColor: 'white',
                    }} onPress={handleClickLog}>
                        <Text style={{
                            fontSize: 16,
                            lineHeight: 21,
                            fontWeight: 'bold',
                            letterSpacing: 0.25,
                            color: 'blue',
                        }}>Login</Text>
                    </Pressable>
                    <Pressable style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        borderRadius: 4,
                        elevation: 3,
                        backgroundColor: 'white',
                        marginTop: 10,
                    }} onPress={handleClickReg}>
                        <Text style={{
                            fontSize: 16,
                            lineHeight: 21,
                            fontWeight: 'bold',
                            letterSpacing: 0.25,
                            color: 'blue',
                        }}>Register</Text>
                    </Pressable>
                </View>)
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    h1Styles: {
        fontSize: 35,
        textAlign: 'center',
        backgroundColor: "rgba(118, 104, 252, 0.4)",
        fontWeight: "bold",
        color: "#5549c4",
        marginTop: 20
    },
    h2Styles: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold",
        color: "#5549c4"
    },
    inputStyles: {
        margin: 5,
        padding: 2,
        borderWidth: 1,
        borderColor: "blue",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 20,
        backgroundColor: "white"

    },
    textInput: {
        width: "100%",
        height: 20,
        margin: 20
    },
    button: {
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: 5
    },
    btn: {
        margin: 20,
    },
    input: {
        width: "100%",
        height: 40,
        margin: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: "blue",
        padding: 10
      },
    inputContainer:{
        maxWidth: 400,
        display: 'flex',
        justifyContent: 'center'
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonModal: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        margin: 10
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: 'white',
      },
      textStyle: {
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      buttonView: {
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-end",
      }
})


export default Home;