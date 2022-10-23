import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { ejercicio2} from "./pages/ejercicio2";
import { ejercicio1 } from "./pages/ejercicio1";
import { Inicio } from "./pages/Inicio";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen
          name="Inicio"
          options={{
            headerTitle: "Practico2",
          }}
          component={Inicio}

        
        />
        <Menu.Screen name="ejercicio2" component={ejercicio2} />
        <Menu.Screen name="ejercicio1" component={ejercicio1} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}
