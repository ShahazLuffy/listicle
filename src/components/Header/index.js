import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';

const Header = ({
  title,
  onBackPress,
  onLogout,
  showLogout,
  showSearch,
  showBack,
}) => {
  return (
    <View style={styles.container}>
      {showBack ? (
        <Pressable onPress={onBackPress} hitSlop={20}>
          <Image
            style={styles.icon}
            source={require('../../assets/search.png')}
          />
        </Pressable>
      ) : showSearch ? (
        <Pressable onPress={onBackPress} hitSlop={20}>
          <Image
            style={styles.icon}
            source={require('../../assets/search.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.space} />
      )}

      <Text style={styles.title}>{title}</Text>

      {showLogout ? (
        <Pressable onPress={onLogout} hitSlop={20}>
          <Image
            style={styles.icon}
            source={require('../../assets/search.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.space} />
      )}
      {/* be jaye : null ma miaim ye style khali tarif mikonim chon mikhaim age null bood yechizi por she va element hamon ja be ja nashan ro safhe */}
    </View>
  );
};
export default React.memo(Header);
