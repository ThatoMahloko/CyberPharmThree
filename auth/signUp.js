import { Alert } from "react-native";
import { firebase } from "../config/firebase";
import { NavigationContainer } from '@react-navigation/native'

const signUp = (email, password, navigation) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            navigation.navigate('Login');
            Alert.alert('User Successfully Registered!!')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorMessage, ": " + errorCode)
        })


    firebase.firestore().collection("Users").doc(email).set({
        FirstName: "Edit Profile",
        LastName: "Edit Profile",
        PhoneNumber: "Edit Profile"
    })
}

export default signUp