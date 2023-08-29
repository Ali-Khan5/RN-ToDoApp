import { StyleSheet, View, Text, TextInput, Button, Modal, Image } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#28282B',
      paddingBottom: '40%'
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#424949',
    width: '90%',
    color:'#ECF0F1',
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
  },
  image: {
    height: 150,
    width: 120,
    margin: 20,
    alignItems: 'center'
  }

});
export function GoalInput(props) {
  return (
    <Modal visible={props.modalState} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image}
          source={require('../assets/notepad-icon.webp')} />
        <TextInput style={styles.textInput}
          placeholder='your course goal'
          onChangeText={props.SetInput}
          value={props.currentInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button title='Cancel'
              onPress={props.ChangeModal}
              color={'#E74C3C'}
              />
          </View>
          <View style={styles.button}>
            
              <Button title='Add GOAL'
              onPress={props.AddGoal}
              color={'#1E8449'}
            />
          </View>
        </View >
      </View>
    </Modal>
  );
}