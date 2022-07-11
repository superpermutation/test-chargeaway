import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const OrdersIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 1h-2v2H8V1H6v2H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2V1ZM6 5H4v15h16V5h-2v1h-2V5H8v1H6V5Zm4.56 11.46 5.94-5.93-1.07-1.06-4.87 4.87-2.11-2.11-1.06 1.06 3.17 3.17Z"
      fill="#122945"
      fillOpacity={0.54}
    />
  </Svg>
);
