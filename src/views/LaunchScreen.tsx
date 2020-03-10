import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  Button,
  Text
} from 'react-native';
// https://github.com/react-native-community/react-native-linear-gradient
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../config';
import { styles } from './LaunchScreen.styles';

export const LaunchScreenId = 'Launchscreen';

class LaunchScreen extends Component {

  render() {
    const bgrad1 = COLORS.bgGradient1;
    const bgrad2 = COLORS.bgGradient2;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <LinearGradient colors={[bgrad1, bgrad2]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.gradient}>
          <SafeAreaView style={styles.mainContainer}>

            <View style={styles.logoWrapper}>
              <Text>App Logo</Text>
            </View>
            
            <View style={styles.footer}>
              <View style={styles.footersubviewleft}>
                <Button title="SIGNUP" color={COLORS.primary} onPress={(e) => console.log(e)} />
              </View>
              <View style={styles.footersubviewright}>
                <Button title="LOGIN" color={COLORS.primary} onPress={(e) => console.log(e)} />
              </View>
            </View>
                
          </SafeAreaView>
        </LinearGradient>
      </>
    );
  }

};

export default LaunchScreen;