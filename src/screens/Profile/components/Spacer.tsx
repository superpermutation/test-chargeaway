import React, {VFC} from 'react';
import {View} from 'react-native';

type Props = {
  height: number;
};

export const Spacer: VFC<Props> = ({height}) => <View style={{height}} />;
