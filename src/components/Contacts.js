import React from 'react';
import AppModal from './common/AppModal';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import CustomButton from './common/CustomButton';
import Message from './common/Message';
import colors from '../assets/theme/colors';
import Icon from './common/Icon';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingRight: 20,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
  },
  phoneNumber: {
    opacity: 0.6,
    fontSize: 14,
    paddingVertical: 5,
  },
});

const ListEmptyComponent = () => {
  return (
    <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
      <Message info message="No Contacts to show" />
    </View>
  );
};

const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  const renderItem = ({item}) => {
    console.log(item);
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {item.contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: item.contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text style={styles.name}>{item.first_name?.[0]}</Text>
              <Text style={styles.name}>{item.last_name?.[0]}</Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{item.first_name}</Text>
              <Text style={styles.name}> {item.last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${item.country_code} ${item.phone_number}`}</Text>
          </View>
        </View>
        <Icon size={17} color={colors.grey} name="right" type="antDesign" />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: colors.white}}>
      <AppModal
        {...{modalVisible, setModalVisible}}
        title="My Profile"
        modalBody={
          <View>
            <Text>Helllo</Text>
          </View>
        }
        modalFooter={<></>}
      />
      {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {!loading && (
        <View style={[{paddingVertical: 20}]}>
          <FlatList
            data={data}
            ListEmptyComponent={ListEmptyComponent}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            ListFooterComponent={<View style={{height: 15}}></View>}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: colors.grey}} />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default ContactsComponent;
