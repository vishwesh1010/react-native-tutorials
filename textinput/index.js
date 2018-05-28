import react,{Component}from 'react';
import { AppRegistry,View} from 'react-native';
import App from './App';
class demo_textinput extends Component {
    render() {
        return (
                <View>
                <App/>
                </View>
                );
    }
}
export default demo_textinput
AppRegistry.registerComponent('demo_textinput', () => App);
