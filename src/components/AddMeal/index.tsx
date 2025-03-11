import { useNavigation } from "@react-navigation/native"
import * as S from "./styles"

export default function AddMeal() {

  const navigation = useNavigation()

  const handleNewMeal = () => {
    navigation.navigate("newMeal")
  }

  return (
    <S.Container>
      <S.Text>Refeições</S.Text>
      <S.Button onPress={handleNewMeal}><S.ButtonText>Nova Refeição</S.ButtonText></S.Button>
    </S.Container>
  )
}