import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ViewNavigator from '../navigator/TestNavigator';
import {createSwitchNavigator} from 'react-navigation';

const SwitchNavigator = createSwitchNavigator(
  {
    Login: ViewNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

class SdkButton extends PureComponent {
  props: {};
  render() {
    return (
      <View style={styles.body}>
        <SwitchNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default SdkButton;
