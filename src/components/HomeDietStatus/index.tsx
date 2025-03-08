import * as S from "./styles"
import SvgComponent from "../Svg/ArrowUpRight";

export default function HomeDietStatus() {
  return (
    <S.Container isOutOfDiet={false}>
      <S.IconView><SvgComponent isOutOfDiet={false} /></S.IconView>
      <S.StatusText>90,86%</S.StatusText>
      <S.Text>das refeições dentro da dieta</S.Text>
    </S.Container>
  )
}