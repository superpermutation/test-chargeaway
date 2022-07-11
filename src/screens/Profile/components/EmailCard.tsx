import React, {VFC} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {EmailIcon} from '../../../components/icons';

type Props = {};

export const EmailCard: VFC<Props> = () => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <EmailIcon />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Введите email"
        style={styles.textInput}
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginBottom: 4,
    borderRadius: 4,
    flex: 1,
  },
  textInput: {
    fontWeight: '500',
    fontSize: 16,
    color: '#1F3345',
    paddingVertical: 0,
    flex: 1,
    marginRight: 16,
    marginLeft: 12,
    paddingLeft: 0,
  },
});
