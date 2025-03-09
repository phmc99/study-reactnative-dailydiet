import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  width: max-content;
  gap: 8px;
  margin-top: 20px;
`

export const Date = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.gray700};
`

// Meal Item Component
export const MealContainer = styled.View`
  flex-direction: row;
  width: max-content;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.gray300};
`
export const MealDateTitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.gray700};
`

export const Divider = styled.View`
  border: 1px solid;
  height: 16px;
  margin: 0 10px;
  border-color: ${({ theme }) => theme.colors.gray300};
`

export const MealName = styled.Text`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};

  width: 70%;
`

interface MealStatusProps {
  isOnDiet?: boolean
}

const greenBackground = theme.colors.lightGreen
const redBackground = theme.colors.rose

export const MealStatus = styled.View<MealStatusProps>`
  width: 16px;
  height: 16px;
  background-color: ${({ isOnDiet }) => isOnDiet ? greenBackground : redBackground };
  border-radius: 999px;
`

