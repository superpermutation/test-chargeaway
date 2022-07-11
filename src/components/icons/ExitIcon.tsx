import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ExitIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="m12 7-1.4 1.4 2.6 2.6H3v2h10.2l-2.6 2.6L12 17l5-5-5-5Zm7 12v2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2v16Z"
      fill="#FF5A81"
    />
  </Svg>
);
