
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import SoundRecorder from 'react-native-sound-recorder';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

const record = require('node-record-lpcm16');

// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');
const fs = require('fs');
// Instantiates a client
const speech = Speech();

// The encoding of the audio file, e.g. 'LINEAR16'
const encoding = 'LINEAR16';

// The sample rate of the audio file in hertz, e.g. 16000
const sampleRateHertz = 16000;

// The BCP-47 language code to use, e.g. 'en-US'
const languageCode = 'en-US';

const request = {
  config: {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode
  },
  interimResults: false // If you want interim results, set this to true
};



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

export default class wordUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
    }
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log(this.state);
    if (this.state.isPressed) {
      this.setState({ isPressed: false });
      SoundRecorder.stop()
        .then(function (path) {
          console.log('stopped recording, audio file saved at: ' + path);
          // Stream the audio to the Google Cloud Speech API
          const recognizeStream = speech.streamingRecognize(request)
            .on('error', console.error)
            .on('data', (data) => {
              console.log(
                `Transcription: ${data.results[0].alternatives[0].transcript}`);
            });
          fs.createReadStream(path).pipe(recognizeStream);
        });
    } else {
      this.setState({ isPressed: true });
      SoundRecorder.start(SoundRecorder.PATH_CACHE + '/test.mp4')
        .then(function () {
          console.log(SoundRecorder.PATH_CACHE + '/test.mp4');
        });
    }
  }

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
          onPress={this.onPress}
          title="Record"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
