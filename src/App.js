import React, {Component} from 'react';
import CharacterPanel from './components/CharacterPanels'; 
import './App.css';

const styles ={
  Wrapper:{
    backgroundColor:'aqua',
    width:'100%',
    height:'100%'
  }
}

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      Animation:'',
      position: -10
      
    };
  }

  move = () => {
    // let {PositionLeft} = this.state;
    // PositionLeft+= window.innerWidth / 2;
    // this.setState({
    //   PositionLeft
    // })
    if(this.state.position < 0){
      this.setState({position: 750})
    }else {
      this.setState({position: -10})
    }
  }


  render(){
    return(
      <div className="App" style={{...styles.Wrapper}}>
        <button onClick ={()=>this.move()}>CLICK ME</button>
        <CharacterPanel  
        left={true}
        position = {this.state.position}
        move = {()=>this.move()} 
        character = {{ name : "JIL", MAXHP:100 , HP:100, AP:30}}/>
        <CharacterPanel
        left={false}
        position = {this.state.position}
        move = {()=>this.move()}
        character= {{name :"Drake", MAXHP:100, HP:50 , AP:25}} />
      </div>
    );
  }
}



