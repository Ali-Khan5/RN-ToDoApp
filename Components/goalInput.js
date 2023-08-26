import { StyleSheet,View,Text,TextInput,Button } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
      },
      textInput: {
        borderWidth: 1,
        backgroundColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    
      },

});
export function GoalInput(props) {
    return (

        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal'
          onChangeText={props.SetInput}
        />
        <Button title='Add GOAL'
          onPress={props.AddGoal}
        />
      </View>
    );
}