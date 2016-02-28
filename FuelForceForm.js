'use strict'

import React, { Component,
         StyleSheet,
         View,
         Text,
         TextInput } from 'react-native'
import moment from 'moment'
import Button from 'react-native-button'
import 'moment/locale/uk'

class FuelForceForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pricePerLiter: '',
      totalPrice: '',
      amountLiters: '',
      date: moment().format('D MMMM YYYY')
    }
  }

  onChangeValue(value) {
    return value
  }

  saveFuelReport() {
    console.log('saved')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          FuelForce
        </Text>
        <View style={styles.inputGroup}>
          <Text>
            Дата:
          </Text>
          <TextInput
            editable={false}
            value={this.state.date}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>
            Вартісь палива:
          </Text>
          <TextInput
            keyboardType='numeric'
            onChangeValue={(pricePerLiter) => this.setState({pricePerLiter})}
            value={this.state.pricePerLiter}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>
            Сума заправки:
          </Text>
          <TextInput
            keyboardType='numeric'
            onChangeValue={(totalPrice) => this.setState({totalPrice})}
            value={this.state.totalPrice}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text>
            Кількість літрів:
          </Text>
          <TextInput
            keyboardType='numeric'
            onChangeValue={(amountLiters) => this.setState({amountLiters})}
            value={this.state.amountLiters}
          />
        </View>
        <Button

          styleDisabled={{color: 'red'}}
          onPress={this.saveFuelReport}>
          Зберегти
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10
  },
  inputGroup: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

module.exports = FuelForceForm