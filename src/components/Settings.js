import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Container from './common/Container';
import colors from '../assets/theme/colors';
import AppModal from './common/AppModal';
import Icon from './common/Icon';

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white},
  item: {paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20},
  itemText: {fontSize: 17},
  itemSubTitle: {fontSize: 14, opacity: 0.6, paddingTop: 5},
  dividerLine: {height: 1, backgroundColor: colors.grey, opacity: 0.4},
});

const SettingsComponent = ({
  settingsOptions,
  modalVisible,
  setModalVisible,
  prefArr,
}) => {
  return (
    <>
      <AppModal
        closeOnTouchOutside={false}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalFooter={<></>}
        modalBody={
          <View>
            {prefArr.map(({name, selected, onPress}) => (
              <View>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 5,
                  }}>
                  {selected && <Icon size={17} name="check" type="material" />}
                  <Text style={{fontSize: 17, paddingLeft: selected ? 15 : 32}}>
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        title="Sort By"
      />
      <ScrollView style={styles.container}>
        {settingsOptions.map(({title, subTitle, onPress}) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{title}</Text>
              {subTitle && <Text style={styles.itemSubTitle}>{subTitle}</Text>}
            </View>
            <View style={styles.dividerLine} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
