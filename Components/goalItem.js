import { StyleSheet,View,Text } from 'react-native';

const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
        padding: 12,
        color: 'white'
    }
});
export function GoalItem(props) {
    return (

        <View style={styles.goalItem} >
            <Text style={{ color: 'white' }}>{props.text}</Text>
        </View>
    );
}