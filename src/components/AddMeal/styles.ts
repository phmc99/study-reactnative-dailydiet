import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 20px;
  gap: 10px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`

export const Button = styled.TouchableOpacity`
  width: max-content;
  align-items: center;
  padding: 20px 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray700};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
`