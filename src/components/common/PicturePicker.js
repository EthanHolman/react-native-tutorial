import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../assets/theme/colors';
import Icon from './Icon';
import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  optionsWrapper: {
    paddingHorizontal: 20,
  },
  pickerOption: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    paddingLeft: 17,
  },
});

const PicturePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take a Photo',
      icon: <Icon color={colors.grey} size={21} name="camera" />,
      onPress: () => {
        ImagePicker.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
    {
      name: 'Choose from gallery',
      icon: <Icon color={colors.grey} size={21} name="image" />,
      onPress: () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={200}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, icon, onPress}) => (
          <TouchableOpacity
            style={styles.pickerOption}
            key={name}
            onPress={onPress}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default PicturePicker;
