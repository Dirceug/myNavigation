import Rect from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';


import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'

const Stack = createNativeStackNavigator  ();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Contacts' component={Contacts}  />
        <Stack.Screen name='Information' component={Information}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name='Contacts' component={Contacts}  />
//         <Drawer.Screen name='Information' component={Information}  />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }