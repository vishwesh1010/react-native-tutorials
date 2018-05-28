import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,FlatList,TextInput} from 'react-native'

class FilterList extends Component {
    state = {
      e:'',noData:'false',
     names: [
            {
            name: 'Burger',
            price: '50'
            },
            {
            name: 'Pizza',
            price: '300'
            },
            {
            name: 'Noodles',
            price: '250'
            },
            {
            name: 'Pasta',
            price: '200'
            },
            {
            name: 'Maggi',
            price: '50'
            },
            {
            name: 'Manchurian',
            price: '150'
            },
            {
            name: 'Mac and Cheese',
            price: '300'
            },
            {
            name: 'SpringRolls',
            price: '200'
           },
           {
           name: 'ChineeseBhel',
           price: '200'
          },
          {
          name: 'SingapooriRice',
          price: '300'
          }

        ],
        temp: [
               {
               name: 'Burger',
               price: '50'
               },
               {
               name: 'Pizza',
               price: '300'
               },
               {
               name: 'Noodles',
               price: '250'
               },
               {
               name: 'Pasta',
               price: '200'
               },
               {
               name: 'Maggi',
               price: '50'
               },
               {
               name: 'Manchurian',
               price: '150'
               },
               {
               name: 'Mac and Cheese',
               price: '300'
               },
               {
               name: 'SpringRolls',
               price: '200'
              },
              {
              name: 'ChineeseBhel',
              price: '200'
             },
             {
             name: 'SingapooriRice',
             price: '300'
             }

           ],
    }
    searchText = (e) => {

        let text = e.toLowerCase()
        let food = this.state.names
        let filteredName = food.filter((item) => {
          var v = item.name.toLowerCase().match(text)
          return v
        })


        if(text===''){
          this.setState({
            temp:food
          })
        }
        else{
          this.setState({temp:filteredName})
        }

      }


    render() {
        return (
                <View style ={styles.container}>
                <View style={styles.heading}>
                <TextInput style={{fontSize:30 ,  color: 'red'}} placeholder = "Search"
                placeholderTextColor = "#9a73ef"
                onChangeText = {this.searchText}
                value={this.state.e}
                />
                </View>
                <View>
                <FlatList
                data={this.state.temp}
                renderItem={({item}) =>

                <View>
                <TouchableOpacity  style={{ flex:2, flexDirection: 'row',marginTop:15, backgroundColor: '#d9f9b1'}}
                  onPress={() =>alert(item.name)}>
                <Text style={styles.text} >{item.name}</Text>
                <Text style={styles.text} >{item.price}</Text>
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
export default FilterList

const styles = StyleSheet.create ({
                                  container: {
                                  flex:1,
                                  flexDirection: 'column',
                                  padding: 10,
                                  marginTop:80,
                                 backgroundColor: '#fedce0',
                                  alignItems: 'center'
                                  },
                                  heading: {
                                  backgroundColor: 'white',
                                  width:'100%',
                                  borderRadius:10,
                                  borderWidth:3,
                                  borderColor: '#9a73ef'


                                  },
                                  text: {
                                  color: '#4f603c',
                                  width:'50%',
                                  padding:10,
                                  fontSize: 20 , fontWeight: 'bold', color: 'red'
                                  }
                                  })
