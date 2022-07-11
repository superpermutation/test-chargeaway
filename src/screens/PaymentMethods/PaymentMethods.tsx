import React, {VFC} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {AddPaymentIcon, PaymentsIcon} from '../../components/icons';
import {Item} from '../../types';
import {voidFn} from '../../util';
import {ItemCard} from '../Profile/components';

const data: Item[] = Array.from({length: 5}, (_, i) => ({id: String(i + 1)}));

const keyExtractor = (item: Item) => item.id;
const renderItem = () => (
  <ItemCard title="MasterCard ****0806" icon={<PaymentsIcon />} />
);

export const PaymentMethods: VFC = () => (
  <FlatList
    keyExtractor={keyExtractor}
    data={data}
    renderItem={renderItem}
    style={styles.flatlist}
    contentContainerStyle={styles.contentContainer}
    ListFooterComponent={
      <ItemCard
        title="Добавить карту"
        icon={<AddPaymentIcon />}
        onPress={voidFn}
      />
    }
  />
);

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 12,
  },
});
