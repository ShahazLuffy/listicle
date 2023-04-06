import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import CategoryBox from '../../../components/CategoryBox';
//import {categories} from '../../../data/categories';

const Home = () => {
  const categories = [
    {
      title: 'popular',
      image: 'https://assets.stickpng.com/thumbs/5f491cbe68ecc70004ae702e.png',
    },
    {
      id: 1,
      title: 'Lamp',
      image: 'https://assets.stickpng.com/thumbs/6122619210aa310004f3981c.png',
    },
    {
      id: 2,
      title: 'Armchair',
      image: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c252.png',
    },
    {
      id: 3,
      title: 'Table',
      image: 'https://assets.stickpng.com/thumbs/58f3733fa4fa116215a923fe.png',
    },
    {
      id: 4,
      title: 'Chair',
      image: 'https://assets.stickpng.com/thumbs/5f42c03341b1ee000404b72c.png',
    },
    {
      id: 5,
      title: 'Bed',
      image: 'https://assets.stickpng.com/thumbs/6122619210aa310004f3981c.png',
    },
  ];
  const renderCategoryItem = ({item, index}) => {
    console.log('item', item, index);
    return <CategoryBox title={item?.title} image={item?.image} />;
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header showSearch title="Find All You Need" showLogout />
        <FlatList
          style={styles.list}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
          horizontal
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(Home);
