import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Facility = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/facility.png')} />
            <Text style={styles.heading}>MEDICAL FACILITY</Text>
            <Text style={styles.text}>Should be able to find the nearest medical facility based on their current location and get directions</Text>
            <View style={styles.btns}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookDoctors')}><Text style={styles.text2}>Prev</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Login')}><Text style={styles.text2}>Next</Text></TouchableOpacity>
            </View>
            {
                /**
                 * 
                 * 
                 */
            }

        </View>
    )
}

export default Facility

const styles = StyleSheet.create({
    container: {
        height: '100%', // 70% of height device screen
        width: '100%',  // 80% of width device screen
        flex: 1,
      
        
    },
    icon: {
        width: '100%',
        height: "52%",
    
        alignSelf: 'center',

    },
    heading: {
        fontSize: 35,
        marginTop: 10,
        textAlign: 'center',
        color: '#054EDE',
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        color: '#00A48F',
        fontSize: 20,
    },
    button:{
        height: 40,
        width: 100,
        backgroundColor: '#3E64FF',
        borderRadius: 20,
        color: 'white',
        justifyContent: 'center',
        
    },
    btns: {
        flexDirection: 'row',
        width:'100%',
   
     
      
        justifyContent: 'space-between',
        height: '50%',
        marginTop:'40%',
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
        textAlign:'center'

    }
})

