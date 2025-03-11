import moment from "moment";
import MealItem from "./MealItem"
import * as S from "./styles"
import { Meal } from "../../models/meal";
import { useNavigation } from "@react-navigation/native";

interface MealListProps {
  meals: Meal[],
  date: string,
  handleMealDetails: (meal: Meal) => void
}

export default function MealList({ meals, date, handleMealDetails }: MealListProps) {
  const [year, month, day] = date.split("-");
  const formattedDate = `${day}/${month}`

  return (
    <S.Container>
      <S.Date>{formattedDate}</S.Date>
      {meals.map((meal, idx) => (
        <MealItem
          key={`${meal.name}-${idx}`}
          hour={moment(meal.date).format("HH:mm")}
          name={meal.description}
          isOnDiet={meal.isOnDiet}
          onPress={() => handleMealDetails(meal)}
        />
      ))}
    </S.Container>
  )
}