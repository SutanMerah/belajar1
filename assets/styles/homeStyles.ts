import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { typography } from './typography';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 432,
    height: 324,
    marginBottom: 20,
  },
  text: {
    ...typography.body,
    color: colors.textPrimary,
  },
  title: {
    ...typography.title,
    color: colors.textPrimary,
    marginBottom: 10,
  },
});