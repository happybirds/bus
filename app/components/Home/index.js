import * as React from 'react';
import {View,Text,Image } from 'react-native';

export default class Home extends React.Component {
  render(){
    return(
      <View>
      <Image style={{width:250,height: 300}} source={{uri: 'https://thumbs.dreamstime.com/z/fox%E4%BC%A0%E6%9F%93%E5%AA%92-%E4%BE%8B%E8%AF%81-fox%E4%BC%A0%E6%9F%93%E5%AA%92-%E5%9B%BE%E7%8B%90%E7%8B%B8-%E5%9C%A8%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%E7%9A%84fox-71996587.jpg'}}></Image>

        <Text>Bus22222</Text>
      </View>
    )
  }

}
