import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {karakter: '', robot:''}
  render() {
    let cari = () => {
      var url = `https://robohash.org/${this.state.karakter}`
      axios.get(url)
      .then((z)=>{
        console.log(z.data)
        this.setState({robot: z.data})
      })
      .catch((z)=>{console.log(z)})
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>Profil Anda</p>
        </header>
        <input ref='karakter' type='text' 
        placeholder='Ketik Nama Anda...'
        onInput={()=>{
          this.setState({karakter: this.refs.karakter.value})}
        }/>
        <button onClick={cari}>Cari</button>
        <p>{this.state.robot ? this.state.robot.name : ''}</p>
        <div>
          {this.state.robot ?
          <iframe title='robot' src={`https://robohash.org/`} width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen>
          </iframe>  : ''}
        </div>
      </div>
    );
  }
}

export default App;
