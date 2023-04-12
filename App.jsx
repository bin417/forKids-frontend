import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import EntryScreen from "./src/screens/Entry";
import ChatScreen from "./src/screens/Chat";
import SettingScreen from "./src/screens/Settings";
import TutorialScreen from "./src/screens/Tutorial";
import TutorialScreen2 from "./src/screens/Tutorial2";
const forKidsNav = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <forKidsNav.Navigator
        initialRouteName="Entry"
        screenOptions={{ headerShown: false }}
      >
        <forKidsNav.Screen name="Entry" component={EntryScreen} />
        <forKidsNav.Screen name="Chat" component={ChatScreen} />
        <forKidsNav.Screen name="Tutorial" component={TutorialScreen} />
        <forKidsNav.Screen name="Settings" component={SettingScreen} />
        <forKidsNav.Screen name="Tutorial2" component={TutorialScreen2} />
      </forKidsNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
