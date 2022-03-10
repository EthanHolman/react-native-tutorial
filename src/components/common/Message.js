import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    paddingVertical: 13,
    marginVertical: 5,
    borderRadius: 4,
  },
  loaderSection: {
    flexDirection: 'row',
  },
});

const Message = ({
  message,
  primary,
  danger,
  info,
  success,
  retry,
  retryFn,
  onDismiss,
}) => {
  const [dismissed, setDismissed] = React.useState(false);
  const getBgColor = () => {
    if (primary) return colors.primary;
    if (danger) return colors.danger;
    if (success) return colors.success;
    if (info) return colors.secondary;
  };

  return (
    <>
      {dismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.white}}>{message}</Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{color: colors.white}}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text style={{color: colors.white}}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
