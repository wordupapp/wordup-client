
// /* eslint-disable react/prefer-stateless-function */
// /* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import SoundRecorder from 'react-native-sound-recorder';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  // ToastAndroid,
  View
} from 'react-native';
import SpeechAndroid from 'react-native-android-voice';
// import Stt from 'react-native-stt';
// import Voice from 'react-native-voice';

// const record = require('node-record-lpcm16');

// // Imports the Google Cloud client library
// // const Speech = require('@google-cloud/speech');
// // const fs = require('fs');
// // Instantiates a client
// const speech = Speech();

// // The encoding of the audio file, e.g. 'LINEAR16'
// const encoding = 'LINEAR16';

// // The sample rate of the audio file in hertz, e.g. 16000
// const sampleRateHertz = 16000;

// // The BCP-47 language code to use, e.g. 'en-US'
// const languageCode = 'en-US';

// const request = {
//   config: {
//     encoding: encoding,
//     sampleRateHertz: sampleRateHertz,
//     languageCode: languageCode
//   },
//   interimResults: false // If you want interim results, set this to true
// };

// Stream an audio file from disk to the Speech API, e.g. "./resources/audio.raw"
// fs.createReadStream(filename).pipe(recognizeStream);

// SoundRecorder.start(SoundRecorder.PATH_CACHE + '/test.mp4')
//     .then(function() {
//         console.log('started recording');
//     });

// SoundRecorder.stop()
//     .then(function(path) {
//         console.log('stopped recording, audio file saved at: ' + path);
//     });

// async _buttonClick(){
//     try{
//         //More Locales will be available upon release.
//         var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.GERMAN);
//         ToastAndroid.show(spokenText , ToastAndroid.LONG);
//     }catch(error){
//         switch(error){
//             case SpeechAndroid.E_VOICE_CANCELLED:
//                 ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
//                 break;
//             case SpeechAndroid.E_NO_MATCH:
//                 ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
//                 break;
//             case SpeechAndroid.E_SERVER_ERROR:
//                 ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
//                 break;
//             /*And more errors that will be documented on Docs upon release*/
//         }
//     }
// }

// import Voice from 'react-native-voice';
// import React, {Component} from 'react';

// class VoiceTest extends Component {
//   constructor(props) {
//     Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
//     Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
//     Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
//   }
//   onStartButtonPress(e){
//     const error = Voice.start('en');
//   }
//   ...
// }

export default class wordUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
    }
    // Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    // Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    // Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    // this.onPress = this.onPress.bind(this);
    this._buttonClick = this._buttonClick.bind(this);
  }

  async _buttonClick() {
        try {
          //More Locales will be available upon release.
          var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.DEFAULT);
          console.log(spokenText);
        } catch (error) {
          switch (error) {
            case SpeechAndroid.E_VOICE_CANCELLED:
              console.log("Voice Recognizer cancelled");
              break;
            case SpeechAndroid.E_NO_MATCH:
              console.log("No match for what you said");
              break;
            case SpeechAndroid.E_SERVER_ERROR:
              console.log("Google Server Error");
              break;
            default:
              console.log('default error');
            /*And more errors that will be documented on Docs upon release*/
          }
        }
      }
  
  // onStartPress() {
  //   console.log(this.state);

  //   if (this.state.isPressed) {
  //     this.setState({ isPressed: false });

  //     // SoundRecorder.stop()
  //     //   .then(function (path) {
  //     //     console.log('stopped recording, audio file saved at: ' + path);
  //     //     // Stream the audio to the Google Cloud Speech API
  //     //     const recognizeStream = speech.streamingRecognize(request)
  //     //       .on('error', console.error)
  //     //       .on('data', (data) => {
  //     //         console.log(
  //     //           `Transcription: ${data.results[0].alternatives[0].transcript}`);
  //     //       });
  //     //     fs.createReadStream(path).pipe(recognizeStream);
  //     //   });
  //   } else {
  //     this.setState({ isPressed: true });
  //     const _buttonClick = async () => {
  //       try {
  //         //More Locales will be available upon release.
  //         var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.DEFAULT);
  //         console.log(spokenText);
  //       } catch (error) {
  //         switch (error) {
  //           case SpeechAndroid.E_VOICE_CANCELLED:
  //             console.log("Voice Recognizer cancelled");
  //             break;
  //           case SpeechAndroid.E_NO_MATCH:
  //             console.log("No match for what you said");
  //             break;
  //           case SpeechAndroid.E_SERVER_ERROR:
  //             console.log("Google Server Error");
  //             break;
  //           default:
  //             console.log('default error');
  //           /*And more errors that will be documented on Docs upon release*/
  //         }
  //       }
  //     }
  //     _buttonClick();

  //     // SoundRecorder.start(SoundRecorder.PATH_CACHE + '/test.mp4')
  //     //   .then(function () {
  //     //     console.log(SoundRecorder.PATH_CACHE + '/test.mp4');
  //     //   });
  //   }
  // }

  // onStopPress() {

  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! YO DUDE
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button
          onPress={this._buttonClick}
          title="Record"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {/* <Button
          onPress={this.onStopPress}
          title="Stop"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('wordUp', () => wordUp);


// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableHighlight,
//   ToastAndroid,
// } from 'react-native';

// import Voice from 'react-native-voice';

// class wordUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       recognized: '',
//       pitch: '',
//       error: '',
//       end: '',
//       userEnded: false,
//       started: '',
//       results: [],
//       partialResults: [],
//     };
//     Voice.onSpeechStart = this.onSpeechStart.bind(this);
//     Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
//     Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
//     Voice.onSpeechError = this.onSpeechError.bind(this);
//     Voice.onSpeechResults = this.onSpeechResults.bind(this);
//     Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
//     Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
//   }
//   onSpeechStart(e) {
//     this.setState({
//       started: '√',
//     });
//   }
//   onSpeechRecognized(e) {
//     this.setState({
//       recognized: '√',
//     });
//   }
//   onSpeechEnd(e) {
//     if (this.state.userEnded) {
//       this.setState({
//         end: '√',
//       });
//     } else {
//       setTimeout(function() {
//         Voice.destroy();
//         setTimeout(function() {
//           Voice.start('en');
//         }, 0)
//       }, 0);
//       // console.log(this.state.userEnded);
//     }
//   }
//   onSpeechError(e) {
//     setTimeout(function() {
//       Voice.destroy();
//       setTimeout(function() {
//           Voice.start('en');
//         }, 0)
//     }, 0);
//     this.setState({
//       error: e.error,
//     });
//   }
//   onSpeechResults(e) {
//     this.setState({
//       results: e.value,
//     });
//   }
//   onSpeechPartialResults(e) {
//     this.setState({
//       partialResults: e.value,
//     });
//   }
//   onSpeechVolumeChanged(e) {
//     this.setState({
//       pitch: e.value,
//     });
//   }
//   _startRecognizing(e) {
//     this.setState({
//       recognized: '',
//       pitch: '',
//       error: '',
//       started: '',
//       results: [],
//       partialResults: [],
//     });
//     const error = Voice.start('en');
//     if (error) {
//       ToastAndroid.show(error, ToastAndroid.SHORT);
//     }
//   }
//   _stopRecognizing(e) {
//     const error = Voice.stop();
//     if (error) {
//       ToastAndroid.show(error, ToastAndroid.SHORT);
//     }
//   }
//   _cancelRecognizing(e) {
//     const error = Voice.cancel();
//     if (error) {
//       ToastAndroid.show(error, ToastAndroid.SHORT);
//     }
//   }
//   _destroyRecognizer(e) {
//     const error = Voice.destroy();
//     if (error) {
//       ToastAndroid.show(error, ToastAndroid.SHORT);
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native Voice!
//         </Text>
//         <Text style={styles.instructions}>
//           Press the button and start speaking when you hear the beep.
//         </Text>
//         <Text
//           style={styles.stat}>
//           {`Started: ${this.state.started}`}
//         </Text>
//         <Text
//           style={styles.stat}>
//           {`Recognized: ${this.state.recognized}`}
//         </Text>
//         <Text
//           style={styles.stat}>
//           {`Pitch: ${this.state.pitch}`}
//         </Text>
//         <Text
//           style={styles.stat}>
//           {`Error: ${this.state.error}`}
//         </Text>
//         <Text
//           style={styles.stat}>
//           Results
//         </Text>
//         {this.state.results.map((result, index) => {
//           return (
//             <Text
//               key={`result-${index}`}
//               style={styles.stat}>
//               {result}
//             </Text>
//           )
//         })}
//         <Text
//           style={styles.stat}>
//           Partial Results
//         </Text>
//         {this.state.partialResults.map((result, index) => {
//           return (
//             <Text
//               key={`partial-result-${index}`}
//               style={styles.stat}>
//               {result}
//             </Text>
//           )
//         })}
//         <Text
//           style={styles.stat}>
//           {`End: ${this.state.end}`}
//         </Text>
//         <TouchableHighlight onPress={this._startRecognizing.bind(this)}>
//           <Image
//             style={styles.button}
//             source={require('./buttons_PNG3.png')}
//           />
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this._stopRecognizing.bind(this)}>
//           <Text
//             style={styles.action}>
//             Stop Recognizing
//           </Text>
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this._cancelRecognizing.bind(this)}>
//           <Text
//             style={styles.action}>
//             Cancel
//           </Text>
//         </TouchableHighlight>
//         <TouchableHighlight onPress={this._destroyRecognizer.bind(this)}>
//           <Text
//             style={styles.action}>
//             Destroy
//           </Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   button: {
//     width: 50,
//     height: 50,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   action: {
//     textAlign: 'center',
//     color: '#0000FF',
//     marginVertical: 5,
//     fontWeight: 'bold',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   stat: {
//     textAlign: 'center',
//     color: '#B0171F',
//     marginBottom: 1,
//   },
// });

// AppRegistry.registerComponent('wordUp', () => wordUp);