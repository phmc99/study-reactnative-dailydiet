import styled from 'styled-components/native';
import theme from '../../theme';

interface DietStatusProps {
  isOutOfDiet: boolean;
}

const greenBackground = theme.colors.lightGreen
const redBackground = theme.colors.roseLight

export const Container = styled.View<DietStatusProps>`
  position: relative;
  width: max-content;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px 0;
  height: 130px;
  margin: 20px 0;
  background-color: ${({isOutOfDiet}) => isOutOfDiet ? redBackground : greenBackground};
`;

export const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.gray700};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl3};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray600};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const IconView = styled.View`
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;
`;
