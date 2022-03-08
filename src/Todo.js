import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({todo, onRemove}) => {
    const [textStyle, setTextStyle] = useState({
        line: 'none',
        color: 'black'
    })

    const changeStyle = () => {
        return setTextStyle({
            line: 'line-through',
            color: 'gray'
        })
    }


    return (
        <TouchableOpacity
            onPress={changeStyle}
            activeOpacity={0.5}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <Text style={{textDecorationLine: textStyle.line, color: textStyle.color }}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

// line-through

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#3489eb',
        borderRadius: 5,
    }
})