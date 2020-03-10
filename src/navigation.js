import { Navigation } from 'react-native-navigation';

import LaunchScreen, {LaunchScreenId} from './views/LaunchScreen';

export default function registerScreens(store, Provider) {
	Navigation.registerComponentWithRedux(LaunchScreenId, () => LaunchScreen, Provider, store);
	// Navigation.registerComponent('movieapp.Movie', () => Movie, store, Provider);
	// Navigation.registerComponent('movieapp.Movies', () => Movies, store, Provider);
	// Navigation.registerComponent('movieapp.MoviesList', () => MoviesList, store, Provider);
	// Navigation.registerComponent('movieapp.Search', () => Search, store, Provider);
	// Navigation.registerComponent('movieapp.Drawer', () => Drawer);
}