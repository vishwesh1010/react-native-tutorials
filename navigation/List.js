import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,FlatList,Image} from 'react-native'

class List extends Component {
    state = {
    names: [
            {
            name: 'Burger',
            image: '/Users/aidev21/Downloads/burger.jpeg'
            },
            {
            name: 'Pizza',
            image: '/Users/aidev21/Downloads/pizza.jpeg'
            },
            {
            name: 'Noodles',
            image: '/Users/aidev21/Downloads/noodles.jpg'
            },
            {
            name: 'Pasta',
            image: '/Users/aidev21/Downloads/pasta.jpg'
            }
            ]
    }
    navigate = () => {
      this.props.navigator.popToTop()
    }

    render() {
        return (
                <View style ={styles.container}>
                <View style={styles.heading}>
                <Text style={{fontSize: 40 , fontWeight: 'bold', color: 'red'}}>FoodList</Text>
                </View>
                <View>
                <FlatList
                data={this.state.names}
                renderItem={({item}) =>

                <View>
                <TouchableOpacity onPress = {()=>this.navigate()} style={{ flex:2, flexDirection: 'row',margin:10,  backgroundColor: '#d9f9b1'}}>
                <Image source = {{ uri: item.image }} style={styles.image} />
                <Text style={styles.text} >{item.name}</Text>
               </TouchableOpacity>
                </View>

                }

                keyExtractor={(item, index) => index.toString()}
                />
                </View>
                </View>
                );
    }
}
export default List

const styles = StyleSheet.create ({
                                  container: {
                                  flex:1,
                                  flexDirection: 'column',
                                  padding: 10,
                                  marginTop:80,
                                 backgroundColor: 'tomato',
                                  alignItems: 'center',
                                  margin:5
                                  },
                                  heading: {
                                  backgroundColor: 'green',
                                  width:'100%',
                                  alignItems: 'center',

                                  },
                                  text: {
                                  color: '#4f603c',
                                  width:'50%',
                                  padding:10,
                                  fontSize: 20 , fontWeight: 'bold', color: 'red'
                                  },
                                  image: {
                                  width:'50%',
                                  height:100,
                                  borderRadius:7,
                                  margin:7
                                  }
                                  })
