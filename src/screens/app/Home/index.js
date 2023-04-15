import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, View, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import CategoryBox from '../../../components/CategoryBox';

import ProductHomeItem from '../../../components/ProductHomeItem';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';

const Home = () => {
  const [selectedCategory, setSeletectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [filteredProduct, setFilteredProduct] = useState(products);
  console.log(keyword);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProduct(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProduct(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProduct(updatedProducts);
    } else if (!selectedCategory && !keyword) {
      setFilteredProduct(products);
    }
  }, [selectedCategory, keyword]);

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
      title: 'this is one',
      image:
        'https://png.pngtree.com/png-clipart/20230206/ourlarge/pngtree-watercolor-art-of-rabbit-and-easter-eggs-on-grass-in-meadow-png-image_6587401.png',
      category: 1,
      price: '$ 21.11',
    },
    {
      id: 2,
      title: 'this is two',
      image:
        'https://www.serendipitydiamonds.com/blog/wp-content/uploads/2014/04/Wedding-Rings-Regular-Small-Finger-Sizes.jpg',
      category: 2,
      price: '$ 22.00',
    },
    {
      id: 3,
      title: 'this is three',
      image:
        'https://www.serendipitydiamonds.com/blog/wp-content/uploads/2014/01/Small-finger-size-wedding-ring-730x566.jpg',
      category: 3,
      price: '$ 23.33',
    },
    {
      id: 4,
      title: 'this is four',
      image:
        'https://www.jowhareh.com/images/Jowhareh/galleries_5/large_ee2d8096-a200-4199-8a3c-6978bbd42eaf.webp',
      category: 4,
      price: '$ 24.44',
    },
    {
      id: 5,
      title: 'this is five',
      image:
        'https://www.jowhareh.com/images/Jowhareh/galleries_5/large_93d9b594-5a55-4d85-bc18-a1038ee1e254.webp',
      category: 5,
      price: '$ 25.55',
    },
  ];

  const renderCategoryItem = ({item, index}) => {
    console.log('item', item, index, item.title);
    return (
      <CategoryBox
        onPress={() => setSeletectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
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
      <Header
        showSearch
        keyword={keyword}
        onSearch={setKeyword}
        title="Find All You Need"
        showLogout
      />
      <FlatList
        style={styles.list}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        style={styles.productsList}
        data={filteredProduct}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </SafeAreaView>
  );
};
export default React.memo(Home);
