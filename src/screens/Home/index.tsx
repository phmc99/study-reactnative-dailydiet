import * as S from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeHeader from '../../components/HomeHeader';
import HomeDietStatus from '../../components/HomeDietStatus';

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <S.Container safeTop={insets.top}>
      <HomeHeader />
      <HomeDietStatus />
    </S.Container>
  )
}