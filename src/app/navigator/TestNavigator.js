import ViewA from '../views/ViewA';
import ViewB from '../views/ViewB';
import {createStackNavigator} from '@react-navigation/stack';
// authentication views

const ViewNavigator = createStackNavigator(
  {
    A: {screen: ViewA},
    B: {screen: ViewB},
  },
  {
    headerMode: 'none',
  },
);

export default ViewNavigator;
