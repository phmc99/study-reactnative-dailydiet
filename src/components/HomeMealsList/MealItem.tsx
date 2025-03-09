import * as S from "./styles"

interface MealItemProps {
  hour: string;
  name: string;
  isOnDiet: boolean;
}

export default function MealItem({ hour, name, isOnDiet }: MealItemProps) {
  return (
    <S.MealContainer>
      <S.MealDateTitleBox>
        <S.Hour>{hour}</S.Hour>
        <S.Divider />
        <S.MealName numberOfLines={1} ellipsizeMode="tail">{name}</S.MealName>
      </S.MealDateTitleBox>
      <S.MealStatus isOnDiet={isOnDiet} />
    </S.MealContainer>
  )
}