//https://react-svgr.com/playground/?native=true&typescript=true

import Svg, { Path } from "react-native-svg"
import theme from "../../theme";

interface ISvgProps {
  isOutOfDiet: boolean;
}

const greenText = theme.colors.darkGreen
const redText = theme.colors.red

const SvgComponent = ({ isOutOfDiet, ...rest }: ISvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...rest}
  >
    <Path
      fill={isOutOfDiet ? redText : greenText}
      fillRule="evenodd"
      d="M24.707 7.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={isOutOfDiet ? redText : greenText}
      fillRule="evenodd"
      d="M10 8a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V9H11a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
