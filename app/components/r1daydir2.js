import * as React from 'react';
import {View,Text,Image,FlatList, DetailsHeadItem,ActivityIndicator,StyleSheet,TouchableOpacity  } from 'react-native';
import {url as appUrl} from '../../app.json';
export default class R1daydir2 extends React.Component {
   _isMounted = false;
  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      path: '0'

    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.timer && clearTimeout(this.timer);
  }

  componentDidMount(){
    this._isMounted = true;
    this.timer = setInterval(() => {
    return fetch(appUrl + "/api/v1/r1daydir2")
      .then((response) => response.json())
      .then((responseJson) => {
        if (this._isMounted) {
          this.setState({
            isLoading: false,
            dataSource: responseJson.result,
            path: responseJson.bus
          }, function(){
          });
        }
      })
      .catch((error) =>{
        console.error(error);
      })},1000)
  }

   Cellheader(data){
     alert(data.reverse_name.split('_')[0]);
   }

   renderItemView({item,index}){
     if(item.reverse_name!== '')
     {
       if (this.state.path.indexOf(item.reverse_name.split('_')[0]) != -1 )
       {
         return(
            <TouchableOpacity style={{flex:1, height:30 }}
              onPress={()=>{this.Cellheader(item)}} >
                <View style={{ height:30,justifyContent: 'center', alignItems: 'flex-start'}}>
                  <Text style={{color: 'red'}}>
                    <Image style={{width:20,height: 20}} source={require('../assets/bus.png')}></Image>
                    {(item.reverse_name.split('_')[0] == 'University & UPEI') ? <Text style={{color: 'green'}}><Image style={{width:20,height: 20}} source={require('../assets/home.png')}></Image> {item.reverse_name.split('_')[0]}</Text> : <Text>{item.reverse_name.split('_')[0]}</Text> }
                  </Text>
                </View>
           </TouchableOpacity>
         );
     }else{
       return(
           <TouchableOpacity style={{flex:1, height:30 }}
              onPress={()=>{this.Cellheader(item)}} >
              <View style={{ height:30,justifyContent: 'center', alignItems: 'flex-start'}}>
                  {(item.reverse_name.split('_')[0] == 'University & UPEI') ? <Text style={{color: 'green'}}><Image style={{width:20,height: 20}} source={require('../assets/home.png')}></Image> {item.reverse_name.split('_')[0]}</Text> : <Text>{item.reverse_name.split('_')[0]}</Text> }
              </View>
          </TouchableOpacity>
        );
      }
    }
  }

   ListHeaderComponent(){
     return(
       <View style={{height:20,justifyContent: 'center'}}>
        <TouchableOpacity style={{color: 'red',  borderBottomWidth: 1,
          borderBottomColor:'#eee'}}>
          <Text>R1 Charlottetown Mall to Downtown</Text>
        </TouchableOpacity>

      </View>
    );
  }

  render(){
   if(this.state.isLoading){
     return(
       <View style={{flex: 1, padding: '50%'}}>
         <ActivityIndicator/>
       </View>
     )
   };

   return(
     <View style={styles.container}>
       <FlatList style={{flex:1,marginTop:64,width:'90%',padding:20}}
        listHeaderComponent={this.ListHeaderComponent.bind(this)}
         data={this.state.dataSource}
         ListHeaderComponent={this.ListHeaderComponent.bind(this)}
         renderItem={this.renderItemView.bind(this)}
         keyExtractor={(item, index) => item.id.toString()}
       />
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
