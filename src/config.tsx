import { Options as NavOptions } from 'react-native-navigation';


export const COLORS = {
    background: '#111',
    accent: '#F00',
    primary: '#DDD',
    bgGradient1: '#0A0',
    bgGradient2: '#050'
}

export default function getNavigationOptions(): NavOptions {
    return {
        layout: {
            componentBackgroundColor: COLORS.background,
            orientation: ['portrait'],
            direction: 'ltr'
        },
        bottomTabs: {
            titleDisplayMode: 'alwaysShow'
        },
        bottomTab: {
            selectedIconColor: COLORS.accent,
            selectedTextColor: COLORS.accent
        }
    };
};