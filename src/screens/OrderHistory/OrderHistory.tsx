import React, {VFC} from 'react';
import {StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {OrdersIcon} from '../../components/icons';
import {Item} from '../../types';
import {voidFn} from '../../util';
import {ItemCard} from '../Profile/components';

const data: Item[] = Array.from({length: 15}, (_, i) => ({id: String(i + 1)}));

const getDateTime = () => {
  const rawDate = new Date();
  const date = rawDate.toLocaleDateString('ru');
  const rawTime = rawDate.toTimeString();
  const [hh, mm] = rawTime.split(':');
  return `${date} ${hh}:${mm}`;
};

const keyExtractor = (item: Item) => item.id;
const renderItem: ListRenderItem<Item> = ({item: {id}}) => (
  <ItemCard
    title={`Заказ #${id}`}
    icon={<OrdersIcon />}
    subtitle={getDateTime()}
    onPress={voidFn}
  />
);

export const OrderHistory: VFC = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={data}
      renderItem={renderItem}
      style={styles.flatlist}
      contentContainerStyle={[styles.contentContainer, {paddingBottom: bottom}]}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 12,
  },
});
