import React from "react";
import { useState } from "react";
import { Text,View,TouchableOpacity,FlatList } from "react-native";

function App() {
  const [data, setdata] = useState([]);
  // const loadapi = () => {
  //   fetch("https://api.postalpincode.in/postoffice/City").then((response) => response.json()).then((json) => setdata[json.PostOffice]);
  //   console.log(data);
  // };
  const loadapi=()=>{
    fetch("https://api.postalpincode.in/postoffice/City").then((response)=>response.json()).then((json)=>{
      setdata(json)
      // console.log(typeof(data));
      var x=data[0];
      console.log(x.PostOffice);
      setdata(x.PostOffice);

      // console.log(data[0]);
      // console.log()
  
    }).catch((err)=>console.log(err))

  }
  // loadapi();
  const render = ({ item }) => {
    return (
      <View>
        <Text>{item.Pincode}</Text>

      </View>
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={() => { loadapi(); } }>
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
export default App;
