import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


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
        backgroundColor: 'white',
        height: '100%'
    },
    icon: {
        marginTop: 0,
        width:'100%',
        height: 300,
        alignSelf: 'center'
    },
    heading: {
        fontSize: 35,
        marginTop: 80,
        textAlign: 'center',
        color: '#054EDE',
        fontWeight: 'bold',
    },
    text: {
        marginTop: 50,
        textAlign: 'center',
        color: '#00A48F',
        fontSize: 20
    },
   
button:{
    height:40,
    width:100,
   
    backgroundColor:'#3E64FF',
    borderRadius:20,
    paddingLeft:10,
    paddingTop:6,
    color:'white',
    marginTop:150,
    marginRight:250,
    justifyContent:'center',
    
},
    btns: {
        flexDirection: 'row',
    },
    text2: {
        color: 'white'
    },
    button2: {
        height:40,
        width:100,
     
        backgroundColor:'#3E64FF',
        borderRadius:20,
       padding:9,
        color:'white',
        marginTop:150,
        right:"26%"
    },
})
