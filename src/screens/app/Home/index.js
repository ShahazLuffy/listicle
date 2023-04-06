import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import CategoryBox from '../../../components/CategoryBox';

import ProductHomeItem from '../../../components/ProductHomeItem';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';

const Home = () => {
  const categories1 = [
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
  const products1 = [
    {
      id: 1,
      title: 'one',
      image: 'https://assets.stickpng.com/thumbs/5f491cbe68ecc70004ae702e.png',
      category: 1,
      price: '$ 21.11',
    },
    {
      id: 2,
      title: 'two',
      image: 'https://assets.stickpng.com/thumbs/58f3733fa4fa116215a923fe.png',
      category: 2,
      price: '$ 22.00',
    },
    {
      id: 3,
      title: 'three',
      image: 'https://assets.stickpng.com/thumbs/5f491cbe68ecc70004ae702e.png',
      category: 3,
      price: '$ 23.33',
    },
    {
      id: 4,
      title: 'four',
      image: 'https://assets.stickpng.com/thumbs/5f491cbe68ecc70004ae702e.png',
      category: 4,
      price: '$ 24.44',
    },
    {
      id: 5,
      title: 'five',
      image: 'https://assets.stickpng.com/thumbs/5f491cbe68ecc70004ae702e.png',
      category: 5,
      price: '$ 25.55',
    },
  ];

  const renderCategoryItem = ({item, index}) => {
    console.log('item', item, index);
    return (
      <CategoryBox
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  const renderProductItem = ({item}) => {
    console.log('item', item);
    return <ProductHomeItem {...item} />;
  };
  return (
    <SafeAreaView>
      <Header showSearch title="Find All You Need" showLogout />
      <FlatList
        style={styles.list}
        data={categories1}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        style={styles.productsList}
        data={products1}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
export default React.memo(Home);
