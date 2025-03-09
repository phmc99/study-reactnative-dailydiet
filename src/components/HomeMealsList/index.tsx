import moment from "moment";
import MealItem from "./MealItem"
import * as S from "./styles"

interface Meal {
  name: string;
  description: string;
  date: Date;
  isOnDiet: boolean;
}

interface MealListProps {
  meals: Meal[],
  date: string
}

export default function MealList({ meals, date }: MealListProps) {
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
        />
      ))}
    </S.Container>
  )
}