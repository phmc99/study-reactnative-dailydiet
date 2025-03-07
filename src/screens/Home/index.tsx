import * as S from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeHeader from '../../components/HomeHeader';

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <S.Container safeTop={insets.top}>
      <HomeHeader />
      <S.Text>Daily Diet</S.Text>
    </S.Container>
  )
}