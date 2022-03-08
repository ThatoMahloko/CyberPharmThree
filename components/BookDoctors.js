import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const BookDoctors = ({navigation}) => {
    return (
    <View style={styles.container} >
        <Image style={styles.icon} source={require('../assets/appointment.png')}/>
        <Text style={styles.heading}>BOOK APPOINTMENT</Text>
        <Text style={styles.text}> Will be able to book appointments and get notifications before the apooint is due.</Text>
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
        backgroundColor:'white',
        height:"100%",
        
        
      
        
    },
    icon: {
        marginTop: 0,
        width:'100%',
        height: 300,
        alignSelf: 'center'
    },
    heading: {
        fontSize: 35,
        marginTop: 10,
        textAlign: 'center',
        color: '#054EDE',
        fontWeight: 'bold',
    },
    text: {
        marginTop: 20,
        textAlign: 'center',
        color: '#00A48F',
        fontSize: 20,
        marginLeft:20,
        marginRight:20
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
    text2: {
        color: 'white',
        textAlign:'center'

    }
})
