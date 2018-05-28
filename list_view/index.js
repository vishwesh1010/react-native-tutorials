import react,{Component}from 'react';
import { AppRegistry,View} from 'react-native';
import App from './App';
class demo_listview extends Component {
    render() {
        return (
                <View>
                <App/>
                </View>
                );
    }
}
export default demo_listview
AppRegistry.registerComponent('demo_listview', () => App);
