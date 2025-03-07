import styled from "styled-components/native";

interface ContainerProps {
  safeTop: number;
}

export const Container = styled.View<ContainerProps>`
  padding: 0 20px;
  padding-top: ${({ safeTop }) => safeTop}px;
  background-color: ${({ theme }) => theme.colors.gray100};
  
  flex: 1;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray700};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`