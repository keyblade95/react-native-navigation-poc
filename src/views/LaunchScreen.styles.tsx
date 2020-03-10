import { StyleSheet } from 'react-native';
import { COLORS } from '../config';

export const styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  logoWrapper: {
    flexDirection: 'row',
    padding: 60,
    justifyContent: 'center'
  },
  logo: {
    tintColor: COLORS.accent,
    width: '100%',
    aspectRatio: 1,
    maxWidth: 260
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    height: 60,
    borderTopColor: COLORS.primary,
    borderTopWidth: 2,
    flexDirection: 'row'
  },
  footersubviewleft: {
    flex: 1,
    borderRightColor: COLORS.primary,
    borderRightWidth: 1,
    paddingTop: 8
  },
  footersubviewright: {
    flex: 1,
    borderLeftColor: COLORS.primary,
    borderLeftWidth: 1,
    paddingTop: 8
  }
  
});