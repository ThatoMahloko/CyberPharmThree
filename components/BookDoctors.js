import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const BookDoctors = ({ navigation }) => {
    return (

        <View style={styles.container} >
           
                <View style={{ height: '50%' }}>
                    <Image style={styles.icon} source={require('../assets/appointment.png')} />
                </View>

                <View style={{ height: '20%' }}>
                    <Text style={styles.heading}>BOOK APPOINTMENT</Text>
                    <Text style={styles.text}> Will be able to book appointments and get notifications before the apooint is due.</Text>
                </View>

                <View style={styles.btns}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DonateBlood')}><Text style={styles.text2}>Prev</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Facility')}><Text style={styles.text2}>Next</Text></TouchableOpacity>
                </View>
           


        </View>


    )
}

export default BookDoctors

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%', // 70% of height device screen
        width: '100%',  // 80% of width device screen
       
    },
    icon: {

        width: '100%',
        height: 350,

        alignSelf: 'center',

    },
    heading: {
        fontSize: 35,
        textAlign: 'center',
        color: '#054EDE',
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        color: '#00A48F',
        fontSize: 20,
    },
    button: {
        height: 40,
        width: 100,
        backgroundColor: '#3E64FF',
        borderRadius: 20,
        color: 'white',
        justifyContent: 'center',
    },
    btns: {
        flexDirection: 'row',
        width: '100%',



        justifyContent: 'space-between',
        height: '50%',
        marginTop: '41%',
        position: 'relative',
    },

    button2: {
        height: 40,
        width: 100,
        position: 'relative',
        backgroundColor: '#3E64FF',
        borderRadius: 20,
        padding: 9,
        color: 'white',
    },
    text2: {
        color: 'white',
        textAlign: 'center'

    }
})
