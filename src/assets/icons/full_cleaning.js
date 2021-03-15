import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { widthPercentageToDP } from '../../utils/helpers/sizes';
import { ORANGE } from '../../utils/constants/colors';

export const FullCleaningIcon = props => (
  <Svg viewBox="0 0 18 18" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.901 7.843L9.348 0v6.035h-.742V.089L.169 7.681c-.45.55.14.8.14.8h2.293L2.664 18h12.71V8.482h2.155c.76-.152.372-.639.372-.639zM6.261 7.56s-.013-.33.351-.396h1.382s.456-.093.495-.475V6.2H9.57v.489c.039.382.494.475.494.475h1.381c.365.065.352.396.352.396v.726H6.26V7.56zm5.536.86H6.203l-.274.774h6.142l-.274-.773zm.464 7.486H5.584v-5.653h6.677v5.653zm-.508-5.138H6.092v1.153h5.661v-1.153zm0 1.667H9.142v3.15h2.611v-3.15zm-5.661 0h2.542v3.15H6.092v-3.15z"
    />
  </Svg>
)

FullCleaningIcon.defaultProps = {
  fill: ORANGE,
  width: widthPercentageToDP('4.8'),
  height: widthPercentageToDP('4.8'),
};
