import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = ({navigation}) =>{
    //CAPTCHA
    const firstDigit = Math.floor(Math.random() * (9 - 0) + 0);
    const secondDigit = Math.floor(Math.random() * (9 - 0) + 0);
    const thirdDigit = Math.floor(Math.random() * (9 - 0) + 0);
    const fourthDigit = Math.floor(Math.random() * (9 - 0) + 0);
    const [randomCaptcha, setRandomCaptcha] = useState(`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`);
    const [captchaValue, setCaptchaValue] = useState();

    const REGISTERURL = "https://whispering-crag-31764.herokuapp.com/visitor/signup";

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [confirmPass, setConfirmPass] = useState("");
    const [captchaConfirmed, setCaptchaConfirmed] = useState();

    const handleClick = () =>{
        navigation.navigate("Login");
    }

    const handleRegister = () =>{
        async function registerUser(){
            setIsLoading(true)
            try{
                if(userInfo.email !== "" || userInfo.password !== "" || confirmPass !== ""){
                    if(randomCaptcha === captchaValue.toString()){
                        setCaptchaConfirmed(true);
                        if(confirmPass === userInfo.password){
                            const res = await axios.post(REGISTERURL, userInfo);
                            setIsLoading(false)
                            if(isLoading === false){
                                if(res.data === false){
                                    alert("That email already exist! Please try again");
                                    setUserInfo((prev)=>{
                                        return{
                                            ...prev,
                                            email: ""
                                        }
                                    })
                                }else if(res.data === true){
                                    alert("New user is created!");
                                    setCaptchaConfirmed();
                                    setRandomCaptcha(`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`);
                                    setCaptchaValue('');

                                }
                            }
                        }else{
                            alert("Your password does not match.")
                            setUserInfo((prev)=>{
                                return{
                                    ...prev,
                                    password: ""
                                }
                            })
                            setConfirmPass("");
                        }
                    }else{
                        setCaptchaConfirmed(false);
                        setIsLoading(false);
                    }
                }else{
                    alert("Error: Empty fields! Please fill out all the fields");
                    setIsLoading(false);
                }
                
            }catch(error){
                console.error(error.request?._response);
            }
        }
        registerUser();
    }

    let error = <Text></Text>;
    if(captchaConfirmed === false){
        error = <Text style={{color: 'red'}}>Wrong please try again...</Text>
    }

    return(
        <SafeAreaView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <Text style={styles.h1Styles} >DIGITAL CONTACT TRACING</Text>
                    <Text style={styles.h2Styles} >VISITOR</Text>
                
                    <View style={styles.inputStyles}>
                        <View style={styles.textInput}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                style={styles.input}
                                onChangeText={newEmail => setUserInfo((prev)=>{
                                    return{
                                        ...prev,
                                        email: newEmail
                                    }
                                })}
                                value={userInfo.email}
                                placeholder="Email:"
                                keyboardType="default"
                                />
                            </View>
                        </View>
                        <View style={styles.textInput}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                style={styles.input}
                                onChangeText={newPassword => setUserInfo((prev)=>{
                                    return{
                                        ...prev,
                                        password: newPassword
                                    }
                                })}
                                value={userInfo.password}
                                placeholder="Password:"
                                keyboardType="default"
                                secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <View style={styles.textInput}>
                        
                            <View style={styles.inputContainer}>
                                <TextInput
                                style={styles.input}
                                onChangeText={newConfirmPassword => setConfirmPass(newConfirmPassword)}
                                value={confirmPass}
                                placeholder="Confirm Password:"
                                keyboardType="default"
                                secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={{
                                    height: 120,
                                    width: '50%',
                                    //alignItems: 'center',
                                    backgroundColor: '#fff'
                                }}
                            >
                                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{fontSize: 50, fontFamily: 'serif'}}>{randomCaptcha}</Text>
                                    <TextInput
                                        style={{
                                            width: "50%",
                                            height: 40,
                                            margin: 5,
                                            borderWidth: 1,
                                            borderTopWidth: 0,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                            padding: 10
                                        }}
                                        keyboardType="number-pad"
                                        value={captchaValue}
                                        onChangeText={newCaptchaValue => setCaptchaValue(newCaptchaValue)}
                                        maxLength={4}
                                    />
                                    {error}
                                </View>
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
                        }} disable={isLoading ? true : false} onPress={handleRegister}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                fontWeight: 'bold',
                                letterSpacing: 0.25,
                                color: 'blue',
                            }}>{ isLoading ? "adding user..." : "Register" }</Text>
                        </Pressable>
                        <Pressable style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 12,
                            paddingHorizontal: 32,
                            borderRadius: 4,
                            elevation: 3,
                            backgroundColor: 'white',
                            marginLeft: 3
                        }} onPress={handleClick}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                fontWeight: 'bold',
                                letterSpacing: 0.25,
                                color: 'blue',
                            }}>Login</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    h1Styles: {
        fontSize: 35,
        textAlign: 'center',
        backgroundColor: "rgba(118, 104, 252, 0.4)",
        fontWeight: "bold",
        color: "#5549c4"
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


export default Register;