import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  margin: 20px 0;
`;

export const LogoImage = styled.Image`
  width: 100px;
  height: 40px;
`;

export const AvatarImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.gray600};
`;