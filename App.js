

      import React from 'react';
      import { StyleSheet, View, Button, Text } from 'react-native';
      import * as firebase from 'firebase';


        // Initialize Firebase
        var config = {
          apiKey: "AIzaSyAJ4rGFG8IamEHfswEA4KHw0j1mLmD3H48",
          authDomain: "drpro-70dd4.firebaseapp.com",
          databaseURL: "https://drpro-70dd4.firebaseio.com",
          projectId: "drpro-70dd4",
          storageBucket: "drpro-70dd4.appspot.com",
          messagingSenderId: "820647571773"
        };
        firebase.initializeApp(config);






      export default class App extends React.Component {
      render() {
      return (


        <View style={styles.container}>

      <Button
      onPress={() => signIn()}
      title="Sign In"
      />
      </View>
      );
      }
      }


                signIn=()=>{
                  <View style={recaptcha.container}>
                  <Button
                  onPress={() => signIn()}
                  title="IDK"
                  />
                  </View>

                  // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha.container');
                  // firebase.auth().signInWithPhoneNumber("+919922960862",window.recaptchaVerifier)
                  //   .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
                  //   .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));

     };


      const styles = StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      },
      });
      const recaptcha = StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      },
      });

/*
      import React, { Component } from 'react';
      import { View, Button, Text, TextInput, Image } from 'react-native';

      import firebase from 'react-native-firebase';

      var config = {
        apiKey: "AIzaSyAJ4rGFG8IamEHfswEA4KHw0j1mLmD3H48",
        authDomain: "drpro-70dd4.firebaseapp.com",
        databaseURL: "https://drpro-70dd4.firebaseio.com",
        projectId: "drpro-70dd4",
        storageBucket: "drpro-70dd4.appspot.com",
        messagingSenderId: "820647571773"
      };
      firebase.initializeApp(config);


      const successImageUri = 'https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png';

      export default class PhoneAuthTest extends Component {
        constructor(props) {
          super(props);
          this.unsubscribe = null;
          this.state = {
            user: null,
            message: '',
            codeInput: '',
            phoneNumber: '+91',
            confirmResult: null,
          };
        }

        componentDidMount() {
          this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ user: user.toJSON() });
            } else {
              // User has been signed out, reset the state
              this.setState({
                user: null,
                message: '',
                codeInput: '',
                phoneNumber: '+91',
                confirmResult: null,
              });
            }
          });
        }

        componentWillUnmount() {
           if (this.unsubscribe) this.unsubscribe();
        }

        signIn = () => {
          const { phoneNumber } = this.state;
          this.setState({ message: 'Sending code ...' });

          firebase.auth().signInWithPhoneNumber(phoneNumber)
            .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
            .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
        };

        confirmCode = () => {
          const { codeInput, confirmResult } = this.state;

          if (confirmResult && codeInput.length) {
            confirmResult.confirm(codeInput)
              .then((user) => {
                this.setState({ message: 'Code Confirmed!' });
              })
              .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
          }
        };

        signOut = () => {
          firebase.auth().signOut();
        }

        renderPhoneNumberInput() {
         const { phoneNumber } = this.state;

          return (
            <View style={{ padding: 25 }}>
              <Text>Enter phone number:</Text>
              <TextInput
                autoFocus
                style={{ height: 40, marginTop: 15, marginBottom: 15 }}
                onChangeText={value => this.setState({ phoneNumber: value })}
                placeholder={'Phone number ... '}
                value={phoneNumber}
              />
              <Button title="Sign In" color="green" onPress={this.signIn} />
            </View>
          );
        }

        renderMessage() {
          const { message } = this.state;

          if (!!message.length) return null;

          return (
            <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
          );
        }

        renderVerificationCodeInput() {
          const { codeInput } = this.state;

          return (
            <View style={{ marginTop: 25, padding: 25 }}>
              <Text>Enter verification code below:</Text>
              <TextInput
                autoFocus
                style={{ height: 40, marginTop: 15, marginBottom: 15 }}
                onChangeText={value => this.setState({ codeInput: value })}
                placeholder={'Code ... '}
                value={codeInput}
              />
              <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
            </View>
          );
        }

        render() {
          const { user, confirmResult } = this.state;
          return (
            <View style={{ flex: 1 }}>

              {!user && !confirmResult && this.renderPhoneNumberInput()}

              {this.renderMessage()}

              {!user && confirmResult && this.renderVerificationCodeInput()}

              {user && (
                <View
                  style={{
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#77dd77',
                    flex: 1,
                  }}
                >
                  <Image source={{ uri: successImageUri }} style={{ width: 100, height: 100, marginBottom: 25 }} />
                  <Text style={{ fontSize: 25 }}>Signed In!</Text>
                  <Text>{JSON.stringify(user)}</Text>
                  <Button title="Sign Out" color="red" onPress={this.signOut} />
                </View>
              )}
            </View>
          );
        }
      }
*/
