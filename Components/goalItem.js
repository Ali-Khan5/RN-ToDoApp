import { StyleSheet, View, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#239B56',
        // padding: 12,
        color: 'white'
    },
    pressedItem: {
        opacity: 0.9,
        backgroundColor: '#FF0000',
        borderRadius: 12,

    }
});
export function GoalItem(props) {
    return (
        <View style={styles.goalItem} >
            <Pressable onPress={() => props.onDeleteItem(props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={{ color: 'white', padding: 15 }}>{props.text}</Text>
            </Pressable>
        </View>
    );
}