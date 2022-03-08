import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const DonateBlood = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/donate.png')} />
            <Text style={styles.heading}>DONATE BLOOD</Text>
            <Text style={styles.text}>Provides information on the importance of blood and will direct you to the SANBS webpage.</Text>

            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('BookDoctors')}><Text style={styles.text2}>Next</Text></TouchableOpacity>


        </View>
    )
}

export default DonateBlood

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
       
        flex: 1,
    },
    icon: {
        marginTop: 0,
        width:'100%',
        height: 300,
        alignSelf: 'center'
    },
    heading: {
        fontSize: 35,
        marginTop: 30,
        textAlign: 'center',
        color: '#054EDE',
        fontWeight: 'bold',
    },
    text: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        color: '#00A48F',
        fontSize: 20
    },
    button2: {
        height: 40,
        width: 100,
        position: 'relative',
        backgroundColor: '#3E64FF',
        borderRadius: 20,
        padding:9,
        color: 'white',
        top: "8%",
        marginLeft: 270
    },
    text2: {
        color: 'white',
        textAlign: 'center'

    }
})
