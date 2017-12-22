import React, { Component } from 'react';
import { data } from '../../Utils/Constants';
import Genre from './Genre';



class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
    this.eachGenre=this.eachGenre.bind(this);
  }

  eachGenre(elem,i){
    return(
        <Genre elem={elem} key={i}/>
      )
  }





  render(){
    return (
    
        <div className="container">
          <h1>NETFLIX GENRE TABS</h1>
          {data.map(this.eachGenre)}
        </div>

    );
  }
} 


export default App;