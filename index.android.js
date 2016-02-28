'use strict'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native'

import FuelForceForm from './FuelForceForm'

// TODO
// Data
// Price per litr
// Total proce
// Count of liters
// Button
// Swipe right List

class FuelForce extends Component {
  render() {
    return (
      <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
        <View style={styles.pageStyle}>
          <FuelForceForm/>
        </View>
        <View style={styles.pageStyle}>
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>
    )
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20
  }
})

AppRegistry.registerComponent('FuelForce', () => FuelForce)
