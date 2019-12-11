import { View, Text, Dimensions, Image,TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react'

import screen from './src/screen'
export default class App extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "FunDoo",
      headerStyle: { backgroundColor: "red" },
      headerTitleStyle: { textAlign: "left", flex: 1 }
    };
  };
  constructor() {
    super();
    this.state = { orientation: '' }
  }

  getOrientation = () => {
    if (this.refs.rootView) {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({ orientation: 'portrait' });
      }
      else {
        this.setState({ orientation: 'landscape' });
      }
    }
  }

  componentDidMount() {
    this.getOrientation();

    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.innerView}>
        <ScrollView style={{ width: '100%', height: '100%' }} >
          

          <View ref="rootView" style={[styles.container, { backgroundColor: (this.state.orientation == 'portrait') ? '#1B5E20' : '#006064' }]}>
            <Text style={styles.loginText}>{this.state.orientation.toUpperCase()} VIEW</Text>
          </View>
          
          <View style={{ flexDirection: 'row',flexWrap:"wrap",justifyContent:'center',alignItems:'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('/Users/admin/Documents/ScreenOrientation/login.png')}
                style={{ width: 200, height: 200,margin:40 }} />
            </View>


            <View style={{ justifyContent: 'center' }}>
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => this.validateEmail(text)} />
              <Text style={styles.error}>{this.state.emailError}</Text>

              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(text) => this.validatePass(text)} />
              <Text style={styles.error}>{this.state.passError}</Text>


            <TouchableOpacity
              style={styles.submitButton}
              onPress={this.handleLogin}>
              <Text style={styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    innerView: {
      flex: 1,
      width: '100%',
      backgroundColor: "white",
      // justifyContent: "flex-start",
      // alignItems: "center",
    },
    text:
    {
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold'
    },
    input: {
      marginTop: 15,
      maxWidth:'40%',
      minWidth:300,
      borderColor: '#7a42f4',
      alignSelf: "center",
      borderWidth: 1
    },
    loginText: {
      display: 'flex',
      alignSelf: "center",
      paddingRight: 40,
      marginHorizontal: 20,
      marginVertical: 20,
      fontSize: 30,
      fontWeight: "bold",
    },
    submitButton: {
      alignSelf: "center",
      backgroundColor: '#7a42f4',
      margin: 15,
      height: 40,
      width: 200,
      fontSize: 30,
    },
    submitButtonText: {
      color: 'white',
      padding: 10,
      alignSelf: "center"
    },
  });