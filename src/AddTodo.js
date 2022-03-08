import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert, Keyboard } from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            // Keyboard.dismiss()
            onSubmit(value.trim())
            setValue('')
        } else {
            Alert.alert('Todo name can\'t be empty')
        }
    }

    return (

        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Enter Todo name'
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Button
                title="ADD TODO"
                color="#3489eb"
                onPress={pressHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '75%',
        padding: 10,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#3489eb',
    },
})