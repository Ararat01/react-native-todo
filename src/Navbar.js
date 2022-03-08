import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 80,
        backgroundColor: '#3489eb',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 15,
    },
    text: {
        color: 'white',
        fontWeight: "900",
        fontFamily: "sans-serif",
        fontSize: 20,
    }
})