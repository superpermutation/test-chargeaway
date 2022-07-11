import {useNavigation} from '@react-navigation/native';
import React, {VFC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  DeleteIcon,
  ExitIcon,
  NumberIcon,
  OrdersIcon,
  PaymentsIcon,
} from '../../components/icons';
import {ItemCard, Spacer, ProfileHeader, EmailCard} from './components';
import {ERoutes, StackScreenProps} from '../../types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {voidFn} from '../../util';

type ProfileNavigationProp = NativeStackNavigationProp<
  StackScreenProps,
  ERoutes.Profile
>;

export const Profile: VFC = () => {
  const navigation = useNavigation<ProfileNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <ItemCard
        title="Номер телефона"
        subtitle="+7 (927) 341 52 92"
        icon={<NumberIcon />}
      />
      <EmailCard />
      <ItemCard
        title="История заказов"
        icon={<OrdersIcon />}
        onPress={() => navigation.navigate(ERoutes.OrderHistory)}
      />
      <ItemCard
        title="Способ получения оплаты"
        icon={<PaymentsIcon />}
        onPress={() => navigation.navigate(ERoutes.PaymentMethods)}
      />
      <Spacer height={32} />
      <ItemCard title="Выйти" icon={<ExitIcon />} onPress={voidFn} />
      <ItemCard
        title="Удалить аккаунт"
        icon={<DeleteIcon />}
        onPress={voidFn}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
});
