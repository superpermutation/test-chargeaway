import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const PaymentsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M20.016 8.016V6H3.984v2.016h16.032Zm0 9.984v-6H3.984v6h16.032Zm0-14.016c.562 0 1.03.204 1.406.61.375.375.562.843.562 1.406v12c0 .563-.187 1.047-.562 1.453-.375.375-.844.563-1.406.563H3.984c-.562 0-1.03-.188-1.406-.563A2.069 2.069 0 0 1 2.016 18V6c0-.563.187-1.031.562-1.406.375-.407.844-.61 1.406-.61h16.032Z"
      fill="#122945"
      fillOpacity={0.54}
    />
  </Svg>
);
