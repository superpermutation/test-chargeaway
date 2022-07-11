import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const DeleteIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 36 36" {...props}>
    <Path
      d="M13.5 4.5V6H6v3h1.5v19.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V9H30V6h-7.5V4.5h-9Zm-3 4.5h15v19.5h-15V9Zm3 3v13.5h3V12h-3Zm6 0v13.5h3V12h-3Z"
      fill="#FF5A81"
    />
  </Svg>
);
