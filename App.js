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

});

export default function App() {

  const [enteredGOAL, setEnteredGOAL] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGOAL(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(goalList => [...goalList, {
      text: enteredGOAL, key: Math.random().toString()
    }]
    );
    // setEnteredGOAL('');
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput AddGoal={addGoalHandler} SetInput={goalInputHandler} />
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
        <FlatList
          data={courseGoals}
          renderItem={(goalsData) => {
            return (
              <GoalItem text={goalsData.item.text} />
            );

          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

