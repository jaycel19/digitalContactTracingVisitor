import React, { useContext } from "react";
import { 
    Text, 
    View, 
    SafeAreaView, 
    StyleSheet, 
    Pressable,
    ScrollView,
    KeyboardAvoidingView } from "react-native";
import { AuthContext } from "./../context/AuthContextProvider";
import { VisitorContext } from "../context/VisitorContextProvider";
import CustomTextInput from "../components/CustomTextInput";


const Home = ({route, navigation}) => {
    const [ isLog ] = useContext(AuthContext);
    const { fullName, 
            setFullName, 
            address, 
            setAddress, 
            contact, 
            setContact } = useContext(VisitorContext);

    const handleClickLog = () =>{
        navigation.navigate("Login");
    }
    const handleClickReg = () =>{
        navigation.navigate("Register");
    }
    const submitHandle = () => {
        if(fullName === "" || address === "" || contact === ""){
            alert("Error: Empty fields! Please fill out all the fields");
            console.log(fullName + address + contact);
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
            <KeyboardAvoidingView>
                <ScrollView>
                    <Text style={styles.h1Styles} >DIGITAL CONTACT TRACING</Text>
                    <Text style={styles.h2Styles} >VISITOR</Text>
                    {isLog ?
                        (<View><View style={styles.inputStyles}>
                            <View style={styles.textInput}>
                                <CustomTextInput 
                                    type="default"
                                    value={fullName}
                                    placeholder="Full Name"
                                    setValue={setFullName}
                                />
                            </View>
                            <View style={styles.textInput}>
                                <CustomTextInput 
                                    type="default"
                                    value={address}
                                    placeholder="Address"
                                    setValue={setAddress}
                                />
                            </View>
                            <View style={styles.textInput}>
                                <CustomTextInput 
                                    type="number-pad"
                                    value={contact}
                                    placeholder="Contact"
                                    setValue={setContact}
                                />
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
                </ScrollView>
            </KeyboardAvoidingView>
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
        marginRight: 5,
        marginBottom: 20
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
      }
})


export default Home;