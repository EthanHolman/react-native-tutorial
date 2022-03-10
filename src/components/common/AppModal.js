import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from './Icon';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    minHeight: 300,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  body: {
    flex: 1,
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footer: {
    borderTopColor: colors.grey,
    borderTopWidth: 1,
    padding: 20,
  },
});

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Icon size={27} type="evilIcons" name="close" />
              <Text>{title || 'RNContacts'}</Text>
            </View>
            <View style={styles.body}>{modalBody}</View>
            {modalFooter}
            {!modalFooter && (
              <View style={styles.footer}>
                <Text>Default Footer</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
