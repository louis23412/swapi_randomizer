import React, {Component} from 'react';
import RandoBtn from '../components&scripts/RandoBtn'

class App extends Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.state =  {view: ''}
  }

  handler(i) {
    this.setState({
      view: i
    })
  }

  render() {
    return (
      <div className="main-page">
        <div className="main-layout">
          <div className="main-text">
            <h1>STARWARS DATA</h1>
            <p>Click a button below to generate random info on a starwars topic! </p>
          </div>
          <div className="random-buttons">
            <RandoBtn name="Films" handler={this.handler}></RandoBtn>
            <RandoBtn name="People" handler={this.handler}></RandoBtn>
            <RandoBtn name="Planets" handler={this.handler}></RandoBtn>
            <RandoBtn name="Species" handler={this.handler}></RandoBtn>
            <RandoBtn name="Starships" handler={this.handler}></RandoBtn>
            <RandoBtn name="Vehicles" handler={this.handler}></RandoBtn>
          </div>
        </div>
        <div className="info-view">
          {this.state.view ? this.state.view : 'Click on a button to generate random data on any topic!'}
        </div>
      </div>
    );
  }
}

export default App;
