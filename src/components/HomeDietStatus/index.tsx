import * as S from "./styles"
import ArrowUpRight from '../../../assets/icons/ArrowUpRight.png';

export default function HomeDietStatus() {
  return (
    <S.Container isOutOfDiet={true}>
      <S.IconView><S.Icon isOutOfDiet={false} source={ArrowUpRight} /></S.IconView>
      <S.StatusText>90,86%</S.StatusText>
      <S.Text>das refeições dentro da dieta</S.Text>
    </S.Container>
  )
}