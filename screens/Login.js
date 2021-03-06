import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity, Image, TextInput, Alert, ActivityIndicator } from 'react-native'
import LogoIcon from '../components/LogoIcon'
import signIn from '../auth/signIn'
import { firebase } from '../config/firebase'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Login = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    const onLogin = () => {
        if (userEmail == "" && password == "") {
            Alert.alert("Username and Email Feild cannot be empty!")
        } else {
            setVisible(true)
            signIn(userEmail, password, navigation)
            setTimeout(function(){
                if (firebase.auth().currentUser !== null) {
                    setVisible(false)
                }
            },2000)

            
            
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />


            <View>
                <LogoIcon />
            </View>
            {
                visible == true ?
                    <ActivityIndicator size="large" color="#00ff00" />
                    :
                    <></>
            }
            <TextInput placeholder={'Email Address'} style={styles.input} onChangeText={(email) => setUserEmail(email)} />
            <TextInput placeholder={'Password'} style={styles.input} secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
            <TouchableOpacity style={styles.button} onPress={() => onLogin(navigation)}>
                <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.links}>
                <View style={styles.linkText}>
                    <Text style={styles.textLink}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textLink_}>Register Here</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linkTextBottom}>
                    <Text style={styles.textLink}>Forgot Password? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={styles.textLink_}>Reset Here</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )

}
export default Login

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%')
    },
    input: {
        width: 342,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
    }
    ,
    button: {
        width: 360,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
        
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    }
    ,
    links: {
        marginTop: 100,
        marginTop: 20
    }
    ,
    linkText: {
        alignSelf: 'center',
        flexDirection: 'row'
    }
    ,
    linkTextBottom: {
        alignSelf: 'center',
        flexDirection: 'row',
    }
    ,
    textLink: {
        fontWeight: "bold",
        color: '#000',
        fontSize: 15
    }
    ,
    textLink_: {
        fontWeight: "bold",
        color: '#3E64FF',
        fontSize: 15
    }
})
