import { createStackNavigator } from 'react-navigation-stack';
import { defaultStackNavOptions } from './constants';
import FeelingScreen from '../../screens/FeelingScreen';
import FeelingDetailScreen from '../../screens/FeelingDetailScreen';

const FeelingStackNavigator = createStackNavigator({
  Feeling: FeelingScreen,
  FeelingDetail: FeelingDetailScreen
  },{
    defaultNavigationOptions: defaultStackNavOptions
  });


export default FeelingStackNavigator;