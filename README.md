## Setup
The following 

```bash
(base) ➜  Repository npx react-native init test_app

               ######                ######
             ###     ####        ####     ###
            ##          ###    ###          ##
            ##             ####             ##
            ##             ####             ##
            ##           ##    ##           ##
            ##         ###      ###         ##
             ##  ########################  ##
          ######    ###            ###    ######
      ###     ##    ##              ##    ##     ###
   ###         ## ###      ####      ### ##         ###
  ##           ####      ########      ####           ##
 ##             ###     ##########     ###             ##
  ##           ####      ########      ####           ##
   ###         ## ###      ####      ### ##         ###
      ###     ##    ##              ##    ##     ###
          ######    ###            ###    ######
             ##  ########################  ##
            ##         ###      ###         ##
            ##           ##    ##           ##
            ##             ####             ##
            ##             ####             ##
            ##          ###    ###          ##
             ###     ####        ####     ###
               ######                ######


                  Welcome to React Native!
                 Learn once, write anywhere

✔ Downloading template
✔ Copying template
✔ Processing template
✔ Installing CocoaPods dependencies (this may take a few minutes)

  Run instructions for iOS:
    • cd "/Users/federico/Documents/Repository/test_app" && npx react-native run-ios
    - or -
    • Open test_app/ios/test_app.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/federico/Documents/Repository/test_app" && npx react-native run-android

(base) ➜  Repository cd test_app
(base) ➜  test_app ls
App.js          app.json        ios             package.json
__tests__       babel.config.js metro.config.js yarn.lock
android         index.js        node_modules
(base) ➜  test_app yarn init .
yarn init v1.22.0
question name (test_app):
question version (0.0.1):
question description:
question entry point (index.js):
question repository url:
question author:
question license (MIT):
question private (true):
success Saved package.json
✨  Done in 6.64s.
(base) ➜  test_app ls
App.js          app.json        ios             package.json
__tests__       babel.config.js metro.config.js yarn.lock
android         index.js        node_modules
(base) ➜  test_app ..
(base) ➜  Repository rm -rf test_app
(base) ➜  Repository npx react-native init test_app --template react-native-template-typescript

               ######                ######
             ###     ####        ####     ###
            ##          ###    ###          ##
            ##             ####             ##
            ##             ####             ##
            ##           ##    ##           ##
            ##         ###      ###         ##
             ##  ########################  ##
          ######    ###            ###    ######
      ###     ##    ##              ##    ##     ###
   ###         ## ###      ####      ### ##         ###
  ##           ####      ########      ####           ##
 ##             ###     ##########     ###             ##
  ##           ####      ########      ####           ##
   ###         ## ###      ####      ### ##         ###
      ###     ##    ##              ##    ##     ###
          ######    ###            ###    ######
             ##  ########################  ##
            ##         ###      ###         ##
            ##           ##    ##           ##
            ##             ####             ##
            ##             ####             ##
            ##          ###    ###          ##
             ###     ####        ####     ###
               ######                ######


                  Welcome to React Native!
                 Learn once, write anywhere

✔ Downloading template
✔ Copying template
✔ Processing template
✔ Installing CocoaPods dependencies (this may take a few minutes)

  Run instructions for iOS:
    • cd "/Users/federico/Documents/Repository/test_app" && npx react-native run-ios
    - or -
    • Open test_app/ios/test_app.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/federico/Documents/Repository/test_app" && npx react-native run-android

(base) ➜  Repository cd test_app
(base) ➜  test_app yarn add react-native-navigation
yarn add v1.22.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "@react-native-community/eslint-config > @typescript-eslint/eslint-plugin@1.13.0" has incorrect peer dependency "eslint@^5.0.0".
warning "@react-native-community/eslint-config > @typescript-eslint/parser@1.13.0" has incorrect peer dependency "eslint@^5.0.0".
warning "@react-native-community/eslint-config > eslint-plugin-react@7.12.4" has incorrect peer dependency "eslint@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@react-native-community/eslint-config > eslint-plugin-react-native@3.6.0" has incorrect peer dependency "eslint@^3.17.0 || ^4 || ^5".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.22.4", while you're on "1.22.0".
info To upgrade, run the following command:
$ brew upgrade yarn
success Saved 3 new dependencies.
info Direct dependencies
└─ react-native-navigation@6.1.1
info All dependencies
├─ hoist-non-react-statics@3.3.2
├─ react-lifecycles-compat@2.0.0
└─ react-native-navigation@6.1.1
✨  Done in 4.50s.
(base) ➜  test_app yarn add react-native-linear-gradient
yarn add v1.22.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "@react-native-community/eslint-config > @typescript-eslint/eslint-plugin@1.13.0" has incorrect peer dependency "eslint@^5.0.0".
warning "@react-native-community/eslint-config > @typescript-eslint/parser@1.13.0" has incorrect peer dependency "eslint@^5.0.0".
warning "@react-native-community/eslint-config > eslint-plugin-react@7.12.4" has incorrect peer dependency "eslint@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@react-native-community/eslint-config > eslint-plugin-react-native@3.6.0" has incorrect peer dependency "eslint@^3.17.0 || ^4 || ^5".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ react-native-linear-gradient@2.5.6
info All dependencies
└─ react-native-linear-gradient@2.5.6
✨  Done in 4.75s.
(base) ➜  test_app cd ios
(base) ➜  ios pod install
Detected React Native module pods for BVLinearGradient and ReactNativeNavigation
Analyzing dependencies
Downloading dependencies
Installing BVLinearGradient (2.5.6)
Installing ReactNativeNavigation (6.1.1)
Generating Pods project
Integrating client project
Pod installation complete! There are 30 dependencies from the Podfile and 28 total pods installed.
(base) ➜  ios cd ..
(base) ➜  test_app yarn add redux react-redux
yarn add v1.22.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "@react-native-community/eslint-config > @typescript-eslint/eslint-plugin@1.13.0" has incorrect peer dependency "eslint@^5.0.0".
warning "@react-native-community/eslint-config > @typescript-eslint/parser@1.13.0" has incorrect peer dependency "eslint@^5.0.0".
warning "@react-native-community/eslint-config > eslint-plugin-react@7.12.4" has incorrect peer dependency "eslint@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@react-native-community/eslint-config > eslint-plugin-react-native@3.6.0" has incorrect peer dependency "eslint@^3.17.0 || ^4 || ^5".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
├─ react-redux@7.2.0
└─ redux@4.0.5
info All dependencies
├─ react-redux@7.2.0
├─ redux@4.0.5
└─ symbol-observable@1.2.0
✨  Done in 4.24s.
(base) ➜  test_app npx react-native run-ios
info Found Xcode workspace "test_app.xcworkspace"
info Building (using "xcodebuild -workspace test_app.xcworkspace -configuration Debug -scheme test_app -destination id=3427CCF1-97F0-4805-B410-12E05FE1FA10")
.....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
info Installing "/Users/federico/Library/Developer/Xcode/DerivedData/test_app-bhazlxuuzvpsyacvhdmvyvpeekds/Build/Products/Debug-iphonesimulator/test_app.app"
info Launching "org.reactjs.native.example.test-app"
success Successfully launched the app on the simulator
(base) ➜  test_app npx react-native run-ios
info Found Xcode workspace "test_app.xcworkspace"
info Building (using "xcodebuild -workspace test_app.xcworkspace -configuration Debug -scheme test_app -destination id=3427CCF1-97F0-4805-B410-12E05FE1FA10")
......................
info Installing "/Users/federico/Library/Developer/Xcode/DerivedData/test_app-bhazlxuuzvpsyacvhdmvyvpeekds/Build/Products/Debug-iphonesimulator/test_app.app"
info Launching "org.reactjs.native.example.test-app"
success Successfully launched the app on the simulator
(base) ➜  test_app npx react-native run-android
info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 1212 file(s) to forward-jetify. Using 4 workers...
info JS server already running.
* daemon not running; starting now at tcp:5037
* daemon started successfully
info Launching emulator...
info Successfully launched emulator.
info Installing the app...
Starting a Gradle Daemon (subsequent builds will be faster)

FAILURE: Build completed with 2 failures.

1: Task failed with an exception.
-----------
* Where:
Build file '/Users/federico/Documents/Repository/test_app/node_modules/react-native-navigation/lib/android/app/build.gradle' line: 4

* What went wrong:
A problem occurred evaluating project ':react-native-navigation'.
> Plugin with id 'kotlin-android' not found.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
==============================================================================

2: Task failed with an exception.
-----------
* What went wrong:
A problem occurred configuring project ':react-native-navigation'.
> compileSdkVersion is not specified.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
==============================================================================

* Get more help at https://help.gradle.org

BUILD FAILED in 14s

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment. Run CLI with --verbose flag for more details.
Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build completed with 2 failures.

1: Task failed with an exception.
-----------
* Where:
Build file '/Users/federico/Documents/Repository/test_app/node_modules/react-native-navigation/lib/android/app/build.gradle' line: 4

* What went wrong:
A problem occurred evaluating project ':react-native-navigation'.
> Plugin with id 'kotlin-android' not found.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
==============================================================================

2: Task failed with an exception.
-----------
* What went wrong:
A problem occurred configuring project ':react-native-navigation'.
> compileSdkVersion is not specified.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
==============================================================================

* Get more help at https://help.gradle.org

BUILD FAILED in 14s

    at checkExecSyncError (child_process.js:621:11)
    at execFileSync (child_process.js:639:15)
    at runOnAllDevices (/Users/federico/Documents/Repository/test_app/node_modules/@react-native-community/cli-platform-android/build/commands/runAndroid/runOnAllDevices.js:94:39)
    at processTicksAndRejections (internal/process/task_queues.js:94:5)
    at async Command.handleAction (/Users/federico/Documents/Repository/test_app/node_modules/@react-native-community/cli/build/index.js:182:9)
(base) ➜  test_app
```