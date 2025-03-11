import { Meal } from "../../models/meal"
import * as S from "./styles"

interface MealItemProps extends Partial<Meal> {
  hour: string
  onPress: () => void
}

export default function MealItem({ hour, name, isOnDiet, onPress }: MealItemProps) {
  return (
    <S.MealContainer onTouchEnd={onPress}>
      <S.MealDateTitleBox>
        <S.Hour>{hour}</S.Hour>
        <S.Divider />
        <S.MealName numberOfLines={1} ellipsizeMode="tail">{name}</S.MealName>
      </S.MealDateTitleBox>
      <S.MealStatus isOnDiet={isOnDiet} />
    </S.MealContainer>
  )
}