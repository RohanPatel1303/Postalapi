import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, FlatList,StyleSheet } from "react-native";

function App({navigation}) {
  const [data, setdata] = useState([]);
  const [showview, setshowview] = useState(false);
  // const loadapi = () => {
  //   fetch("https://api.postalpincode.in/postoffice/City").then((response) => response.json()).then((json) => setdata[json.PostOffice]);
  //   console.log(data);
  // };
  const navigateto=(item)=>{
    navigation.navigate("Details",{item})
  }
  const loadapi = () => {
    fetch("https://api.postalpincode.in/postoffice/City").then((response) => response.json()).then((json) => {
      setdata(json)
      // console.log(typeof(data));
      var x = data[0];
      console.log(x.PostOffice);
      setdata(x.PostOffice);

      // console.log(data[0]);
      // console.log()

    }).catch((err) => console.log(err))

  }


  const render = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={()=>{navigateto(item);}}>
        <View style={[styles.city_pincode_view]}>

          <Text style={{flex:.8,flexWrap:"wrap",maxHeight:100}} >{item.Name}</Text>
          <Text>{item.Pincode}</Text>
          <Text>Tap For More Details</Text>
       
        </View>
        </TouchableOpacity>


      </View>
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={() => { loadapi(); }}>
        <Text>Press Me!</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={render}
      >

      </FlatList>

    </View>
  );
}
const styles=StyleSheet.create({
  city_pincode_view:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    borderWidth:2,
    borderRadius:10,
    marginBottom:10
    // alignItems:"flex-start"
  }
})
// export default App;
