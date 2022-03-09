import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});

const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
