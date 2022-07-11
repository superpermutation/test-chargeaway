import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const AddPaymentIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3ZM19 8V6H3v2h16Zm0 4H3v6h11v2H3a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h16a2 2 0 0 1 2 2v7h-2v-1Z"
      fill="#3DACEB"
    />
  </Svg>
);
