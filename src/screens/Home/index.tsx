import * as S from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeHeader from '../../components/HomeHeader';
import HomeDietStatus from '../../components/HomeDietStatus';
import AddMeal from '../../components/AddMeal';
import MealList from '../../components/HomeMealsList';
import { FlatList, Text } from 'react-native';
import { groupedMeals, sortedDates } from '../../mock/meals';
import { Meal } from '../../models/meal';

export default function Home(props: any) {
  const insets = useSafeAreaInsets();


  const handleMealDetails = (meal: Meal) => {
    props.navigation.navigate("mealDetails", { meal })
  }

  return (
    <S.Container safeTop={insets.top}>
      <HomeHeader />
      <HomeDietStatus />
      <AddMeal />

      <FlatList
        style={{ marginVertical: 20 }}
        data={sortedDates}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <MealList key={item} meals={groupedMeals[item]} date={item} handleMealDetails={handleMealDetails} />
        )}
        ListEmptyComponent={() => (<Text>Nenhuma refeição encontratada.</Text>)}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  )
}