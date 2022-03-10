import React from 'react';

import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const getIconFont = type => {
  switch (type) {
    case 'fontisto':
      return Fontisto;
    case 'feather':
      return Feather;
    case 'antDesign':
      return AntDesign;
    case 'simpleLineIcons':
      return SimpleLineIcons;
    case 'fa5':
      return FAIcon5;
    case 'fa':
      return FAIcon;
    case 'entypo':
      return EntypoIcon;
    case 'evilIcons':
      return EvilIcon;
    case 'foundation':
      return FoundationIcon;
    case 'ionIcon':
      return Ionicon;
    case 'materialCommunity':
      return MaterialCommunityIcon;
    case 'material':
      return MaterialIcon;
    case 'octicon':
      return OcticonIcon;
    case 'zocial':
      return ZocialIcon;
    default:
      return null;
  }
};

const Icon = ({type, ...props}) => {
  const FontIcon = getIconFont(type);

  return <FontIcon {...props} />;
};

export default Icon;
