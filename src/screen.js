import React, { Component } from "react";
import { View, TouchableOpacity, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput } from "react-native";
export default class screen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "FunDoo",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { textAlign: "left", flex: 1 }
    };
  };
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      emailError: null,
      passError:null,

    }
    // this.handleLogin = this.handleLogin.bind(this);
  }

  validateEmail = (text) => {
    console.log(text);
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if (email.test(text) === false) {
      this.setState({ emailError: 'Email is Not Correct' });
      return false;
    }
    else {
      //email correct
      this.setState({ email: text })
      this.setState({ emailError: null });
    }
  } 
  validatePass = (text) => {
    console.log(text);
    let pass = /^[#\w@_-]{8,20}$/
    if (pass.test(text) === false) {
      this.setState({ passError: 'enter valid pass' });
      this.setState({ password: text })
      return false;
    }
    else {
      //email correct
      this.setState({ password: text })
      this.setState({ passError: null });

    }
  }


  // handleLogin = () =>{
  //    console.log("hii");
  //    console.log(this.state.email);

  //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => this.props.navigation.navigate('Welcome'))
  //     .catch((error) => {
  //       alert("Enter the valid Details...!", error)
  //       var errorCode = error.code;
  //       var errorMessage = error.errorMessage;
  //       console.log('Error code :' + errorCode);
  //       console.log('Error Msg :' + errorMessage);
  //     });
  // }
  render() {
    return (

      <KeyboardAvoidingView style={styles.innerView}>
        <ScrollView>
          <Text style={styles.loginText}>
            Login
            </Text>

          <View>
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



            {/* 
              <PasswordInputText style={{height: 90,width: 300,alignSelf: "center",height: 40,margin: 1,borderWidth: 1,}}
              onChangeText={(text) => this.setState({ password: text })} >
              </PasswordInputText> */}

            <TouchableOpacity
              style={styles.submitButton}
              onPress={alert("Registration Complete Succesfully...!")}>
              <Text style={styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgotPass') }}>
              <Text style={styles.text}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Registration') }}>
              <Text style={styles.text}>
                Sign UP
              </Text>
            </TouchableOpacity>
 */}

          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#daebf4",

  },
  innerView: {
    flex: 1,
    width: '100%',
    backgroundColor: "white",
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  input: {
    marginTop: 15,
    width: '90%',
    borderColor: '#7a42f4',
    alignSelf: "center",
    borderWidth: 1
  },
  loginText: {
    display: 'flex',
    alignSelf: "center",
    paddingRight: 40,
    marginHorizontal: 20,
    marginVertical: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  submitButton: {
    alignSelf: "center",
    backgroundColor: '#7a42f4',
    margin: 15,
    height: 40,
    width: 300,
    fontSize: 30,
  },
  submitButtonText: {
    color: 'white',
    padding: 10,
    alignSelf: "center"
  },
  text: {
    flexDirection: "row",
    fontSize: 15,
    alignSelf: "center",
    //alignItems:"flex-end"
  },
  error: {
    color: 'red',
    width:'90%',
    marginTop:1,
    marginHorizontal:30,
    flexDirection: "row",
    fontSize: 11,
    
  }



});