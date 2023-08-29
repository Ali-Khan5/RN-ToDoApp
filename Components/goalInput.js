import { StyleSheet, View, Text, TextInput, Button, Modal } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#cccccc',
    width: '90%',
    // marginRight: 8,
    padding: 20,

  },
  buttonContainer: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
    marginVertical: 20
  }

});
export function GoalInput(props) {
  return (
    <Modal visible={props.modalState} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder='your course goal'
          onChangeText={props.SetInput}
          value={props.currentInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add GOAL'
              onPress={props.AddGoal}
            />
          </View>
          <View style={styles.button}>
            <Button title='Cancel'
              onPress={props.ChangeModal} />
          </View>
        </View >
      </View>
    </Modal>
  );
}