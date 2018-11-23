import * as React from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import styles from './styles';

export default class Sidebar extends React.Component {
  navigate(routes,user){
    this.props.navigation.navigate(routes,user)
  }
  constructor(props){
    super(props);
    this.state ={
      r1daydir1: '',
      r1daydir2: '',
      r1eveningdir1: '',
      r1eveningdir2: '',
      r2daydir1: '',
      r3daydir1: '',
    }
  }
  // componentWillUnmount() {
  //   this.timer && clearTimeout(this.timer);
  // }

  componentDidMount(){
      this.timer = setInterval(() => {
    return fetch('http://m.riverluo.com/api/v1/count')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          r1daydir1: responseJson.r1daydir1,
          r1daydir2: responseJson.r1daydir2,
          r1eveningdir1: responseJson.r1eveningdir1,
          r1eveningdir2: responseJson.r1eveningdir2,
          r2daydir1: responseJson.r2daydir1,
          r3daydir1: responseJson.r3daydir1,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      })},3000)
  }


  render(){
    const routes = [
      {
        title: "Downtown to Charlottetown Mall",
        route:"r1daydir1",
        count: this.state.r1daydir1,
        index: 1
      },{
        title: "Charlottetown Mall to Downtown",
        route:"r1daydir2",
        count: this.state.r1daydir2,
        index: 2
      },
      {
        title: "Downtown to Charlottetown Mall(Evening)",
        route:"r1eveningdir1",
        count: this.state.r1eveningdir1,
        index: 3
      },{
        title: "Charlottetown Mall to Downtown(Evening)",
        route:"r1eveningdir2",
        count: this.state.r1eveningdir2,
        index: 4
      },
      {
        title: "R2",
        route:"r2daydir1",
        count: this.state.r2daydir1,
        index: 5
      },{
        title: "R3",
        route:"r3daydir1",
        count: this.state.r3daydir1,
        index: 6
      }

    ]
    return(
      <View >
         <Image style={styles.image} source={require('../../assets/bus.png')}></Image>
         {
           routes.map( (e,i)=>(
             <TouchableOpacity key={i} style={styles.link} onPress={_=> this.navigate(e.route,{user: e.index})}>
               <Text key={i}>{e.title}[{e.count}]</Text>
             </TouchableOpacity>
           ))
         }

      </View>
    )
  }
}
