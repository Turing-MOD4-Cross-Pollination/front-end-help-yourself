import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { bInterpolate, bInterpolateColor } from 'react-native-redash';

const size = 30;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ({ transition }) => {
  const rotateZ = bInterpolate(transition, Math.PI, 0);
  const backgroundColor = bInterpolateColor(
    transition,
    { r: 84, g: 84, b: 84 },
    { r: 237, g: 59, b: 83 },
  );
  return (
    <Animated.View style={[styles.container, { transform: [{ rotateZ }], backgroundColor }]}>
      <Icon name="chevron-down" color="white" size={24} />
    </Animated.View>
  );
};
