import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import { GoalItem } from './Components/goalItem';
import { GoalInput } from './Components/goalInput';
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 90,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsList: {
    flex: 5
  },
  emptyGoals:{
    fontSize:55,
    margin:10,
    textAlign:'center',
    fontWeight:'500'
  }

});

export default function App() {

  const [enteredGOAL, setEnteredGOAL] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [modal, setModal] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGOAL(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(goalList => [...goalList, {
      text: enteredGOAL, key: Math.random().toString()
    }]);
    setEnteredGOAL("");
    setModalHandler();
  }
  function deletGoalHandler(id) {
    console.log('deletteee sheeeeshh', id);
    setCourseGoals(goalList => {
      return goalList.filter((goal) => goal.key !== id);
    });
  }

  function setModalHandler() {
    setModal(prev => !prev)
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" onPress={setModalHandler}
          color={'#BA4A00'}

        />
        <GoalInput AddGoal={addGoalHandler} SetInput={goalInputHandler}
          currentInput={enteredGOAL}
          modalState={modal}
          ChangeModal={setModalHandler}
        />
        <View style={styles.goalsList}>
          {/* remember Scrollview needs a parent div to get styling */}
          {/* <ScrollView >
        {courseGoals.map((val, i) =>
        //import note : View only supports rounded corners for both ios 
        //and android
        //DOES NOT HAVE INHERITANCE OF CSS
        <View style={styles.goalItem} key={i}>
            <Text style={{color:'white'}}>{val}</Text>
          </View>
        )}
      </ScrollView> */}
          <Text style={styles.emptyGoals}>What are your goals for today?</Text>
          <FlatList
            data={courseGoals}
            renderItem={(goalsData) => {
              return (
                <GoalItem text={goalsData.item.text}
                  id={goalsData.item.key}
                  onDeleteItem={deletGoalHandler} />
              );

            }}
            keyExtractor={(item, index) => item.key}
          />

        </View>
      </View>
    </>
  );
}

