import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const LogoIcon = props => (
  <Svg viewBox="0 0 29 24" fill="none" {...props}>
    <Path
      transform="matrix(.71775 -.6963 .75843 .65175 3 15.31)"
      stroke="#fff"
      strokeWidth={3}
      d="M0-1.5h17.68"
    />
    <Path
      transform="scale(1.04438 .95356) rotate(45 2.195 16.041)"
      stroke="#fff"
      strokeWidth={3}
      d="M0-1.5h18.257"
    />
    <Path
      stroke="#fff"
      strokeWidth={3}
      d="M8.5 24V13M14.5 24V13M20.5 24V13"
    />
  </Svg>
)

LogoIcon.defaultProps = {
  width: 29,
  height: 24,
};
