import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { unit } from '../../helper/Unit';

interface IconsProps extends ViewProps {
  iconName: string;
  fill: number;
  color: string;
  size: number;
}


const iconMap = [
  {
    IconName: 'ArrowBack',
    Filled: 'm266-466 234 234-20 20-268-268 268-268 20 20-234 234h482v28H266Z',
    NotFilled: 'm266-466 234 234-20 20-268-268 268-268 20 20-234 234h482v28H266Z',
  },
  {
    IconName: 'Add',
    Filled: 'M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z',
    NotFilled: 'M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z',
  },
];

const Icon100: FC<IconsProps> = ({ iconName, fill, color, size, ...props }) => {
  const iconObject = iconMap.find(icon => icon.IconName === iconName)?.[fill === 1 ? 'Filled' : 'NotFilled'];

  return (
    <View {...props}>
      <Svg width={unit(size)} height={unit(size)} viewBox="0 -960 960 960">
        <Path fill={color} d={iconObject} />
      </Svg>
    </View>
  );
};

export default Icon100;

