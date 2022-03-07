import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  wrapper: iconPosition => {
    return {
      height: 42,
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
      paddingHorizontal: 5,
      alignItems: 'center',
      marginTop: 5,
    };
  },
  textInput: {
    flex: 1,
  },
  errorText: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});

const Input = ({
  onChangeText,
  icon,
  iconPosition,
  style,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getBorderColor = () => {
    let color = colors.grey;
    if (error) color = colors.danger;
    if (focused) color = colors.primary;
    return {borderColor: color};
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper(iconPosition), getBorderColor()]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
