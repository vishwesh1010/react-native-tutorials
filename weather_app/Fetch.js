import React, { Component } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Text,StyleSheet,TouchableOpacity,TextInput,Image,ImageBackground} from 'react-native'
//AIzaSyCJTYOMYmibgJ_gqaR5wO5Punk3OveMlmg
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};


class Fetch extends Component {
   state = {
      name: '',region: '',country:'',text:'',temp_c:'',icon:''
      ,v:'https:api.apixu.com/v1/current.json?key=ea197ce1ff18412587c124842181805&q=',
      city: 'Vadodara',
      color:'white'
   }
   handleCity = (text) => {
       this.setState({ city: text })

   }
   set = () => {
     this.state.color = 'black'
     this.display();
   }
display =() =>
{
  fetch(this.state.v+this.state.city)
   .then((response) => response.json())
   .then((responseJson) => {
      this.setState({
         name: responseJson.location.name,
         region:responseJson.location.region,
         country:responseJson.location.country,
         text:responseJson.current.condition.text,
         temp_c:responseJson.current.temp_c,
         icon:responseJson.current.condition.icon

      },function(){
        console.log(responseJson);

      });
   })
   .catch((error) => {
      console.error(error);
   });
}

   render() {
      return (
         <View style={styles.container}>
           <ImageBackground source = {{ uri:'/Users/aidev21/Downloads/jv.jpg'}} blurRadius={0.5} style={{width:'100%',height:'100%'}}>


       <View style={{backgroundColor: '#4dbaff80',marginTop: 40,marginBottom:30,width:'100%',alignItems:'center'}}>
            <Text style={[styles.text,{color:this.state.color}]}>
              {this.state.name}
            </Text>
            <Text style={[styles.text,{color:this.state.color,marginLeft:15}]}>
              {this.state.region}
            </Text>
            <Text style={[styles.text,{color:this.state.color,marginLeft:15}]}>
              {this.state.country}
            </Text>

            <Image source = {{ uri:'https:'+this.state.icon}} style={{width:150,height:150}}/>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>
                {this.state.temp_c}
              </Text>
              <Text style={[styles.text,{color:this.state.color,marginLeft:25}]}>
                {this.state.text}
              </Text>
            </View>
          </View>
          <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={1} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              console.log(data, details);
              this.setState({city:details.vicinity})
              this.set()
            }}

            getDefaultValue={() => ''}

            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyDLntw0OWn-gDblYBSuqkO68dYz7iU8J4w',
              language: 'en', // language of the results
              types: '(cities)' // default: 'geocode'
            }}
            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
           currentLocationLabel="Current location"
           nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
           GoogleReverseGeocodingQuery={{
             // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
           }}
           GooglePlacesSearchQuery={{
             // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
             rankby: 'distance',
             types: 'food'
           }}

           filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
           predefinedPlaces={[homePlace, workPlace]}

           debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          />
        </ImageBackground>
       </View>
      )
   }
}
export default Fetch



const styles = StyleSheet.create({
                                 container: {
                                 paddingTop: 23,
                                 backgroundColor:'#edfff6',
                                 alignItems: 'center',
                                 flex: 1
                                 },
                                 input: {
                                 margin: 15,
                                 height: 40,
                                 width:200,
                                 borderColor: '#7a42f4',
                                 borderWidth: 1,
                                 alignItems: 'center'
                               },
                              text:{
                                color:'black',
                                fontSize:25
                              },
                              textInputContainer: {
          width: '100%',height: 80
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
                                 })
