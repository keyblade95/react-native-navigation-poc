import { Navigation } from 'react-native-navigation';

Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Launchscreen'
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'Launchscreen',
                  testID: 'LAYOUTS_TAB'
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Launchscreen'
                  }
                }
              ],
              options: {
                topBar: {
                  title: {
                    text: 'Default Title'
                  }
                },
                bottomTab: {
                  text: 'Options',
                  testID: 'OPTIONS_TAB'
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Launchscreen'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });