import ListingScreen from './components/ListingScreen';
import PreTrade from './components/PreTrade/PreTrade';
import Home from './components/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        // screenOptions={{
          // headerTop: () => (
          //   <Pressable onPress={() => alert("Menu button pressed!")}>
          //     <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          //   </Pressable>
          // ),
        // }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Navigation title Home",
          }}
        />
        <Stack.Screen
          name="ListingScreen"
          component={ListingScreen}
          options={({ route }) => ({
            title: route.name,
          })}
        />
        <Stack.Screen 
          name="PreTrade"
          component={PreTrade}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;