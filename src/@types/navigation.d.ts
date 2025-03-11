import { Meal } from "../models/meal"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      newMeal: undefined
      mealDetails: {
        meal: Meal
      }
    }
  }
}