import { View, Text, Image } from 'react-native';

import * as S from "./styles"

import Logo from '../../../assets/logo.png';
import Avatar from '../../../assets/avatar.png';

export default function HomeHeader() {
  return (
    <S.Container>
      <S.LogoImage source={Logo} />

      <S.AvatarImage source={Avatar} />
    </S.Container>
  );
}
