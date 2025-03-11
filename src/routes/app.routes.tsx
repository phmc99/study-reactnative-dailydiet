import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home"
import NewMeal from "../screens/NewMeal"
import MealDetails from "../screens/MealDetails"

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="newMeal"
        component={NewMeal}
      />
      <Screen
        name="mealDetails"
        component={MealDetails}
      />
    </Navigator>
  )
}