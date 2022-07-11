import React, {VFC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ProfileHeader: VFC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <Text style={styles.name}>Пользователь</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 52,
    paddingVertical: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 112,
    width: 112,
    backgroundColor: 'pink',
    borderRadius: 8,
    marginBottom: 4,
  },
  name: {
    color: '#1F3345',
    fontSize: 16,
  },
});
