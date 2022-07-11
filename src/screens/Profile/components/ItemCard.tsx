import React, {VFC} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  onPress?: () => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const ItemCard: VFC<Props> = ({title, subtitle, icon, onPress}) => {
  const sharedValue = useSharedValue(1);

  const onPressIn = () => {
    sharedValue.value = withTiming(0, {duration: 100});
  };

  const onPressOut = () => {
    sharedValue.value = withTiming(1, {duration: 100});
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: interpolate(sharedValue.value, [0, 1], [0.95, 1])}],
  }));

  return (
    <AnimatedPressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.container, animatedStyle]}
      onPress={onPress}
      disabled={!onPress}>
      {icon}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.text}>{subtitle}</Text> : null}
      </View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: '#1F3345',
    paddingBottom: 2,
  },
  text: {
    color: '#2F5374',
    opacity: 0.7,
    fontWeight: '500',
    fontSize: 13,
  },
  textContainer: {
    paddingLeft: 12,
  },
});
