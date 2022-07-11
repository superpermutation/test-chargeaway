export enum ERoutes {
  Profile = 'Profile',
  OrderHistory = 'OrderHistory',
  PaymentMethods = 'PaymentMethods',
}

export type StackScreenProps = {
  [ERoutes.Profile]: undefined;
  [ERoutes.OrderHistory]: undefined;
  [ERoutes.PaymentMethods]: undefined;
};
