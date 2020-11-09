# rn-nested-children-crash

Nested children crash example for iOS 14 and react-native 0.63.3.

## Steps To Recreate Enviroment From Scratch:
 1. Create clean bare react-native (0.63.3) app with `npx react-native init app`
 2. Add this [CODE][2] to App.js

## Clone Existing Enviroment:
 1. On a shell terminal clone git repo with `git clone https://github.com/xtealer/rn-nested-children-crash.git`
 2. Change to repo directory: `cd rn-nested-children-crash`
 3. Install npm modules: `npm install`

## Building App:
 1. Change to iOS folder and install pods `cd ios && pod install && cd ..`
 2. Run metro bundler `npm run start`
 3. Open `app.xcworkspace` with XCode
 4. Build app for running on emulator or physical device

**[edit]: Here some related issues that I've created on github.**

- [[iOS]: Misterious Nested Views Crash on 0.63.3][3]
- [[iOS][Crash]: Crash while trying example provided and existing implementation][4]


  [1]: https://i.stack.imgur.com/kSIC8.png
  [2]: https://github.com/xtealer/rn-nested-children-crash/blob/master/App.js
  [3]: https://github.com/facebook/react-native/issues/30344
  [4]: https://github.com/renrizzolo/react-native-sectioned-multi-select/issues/217

## Issue Details So Far: 
 - React Native Core: https://github.com/facebook/react-native/issues/30344
 - Stack Overflow Thread: https://stackoverflow.com/questions/64750407/reactnativeios-misterious-nested-views-crash-on-0-63-3

## Related Issues:

1. https://github.com/renrizzolo/react-native-sectioned-multi-select/issues/217
