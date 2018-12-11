import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Konten from './komponen/Konten'
import Loading from './komponen/Loading'

class App extends Component {
  
  state = {
    karakter: '', 
    robot: ''
  }

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
        <header className="pt-3 App-header">
          <p>
            Profil Pitcure Generator
          </p>
        </header>

        <center>
          <div className='input-group my-3 w-50'>
            <input ref='karakter' type='text' className='form-control'
            placeholder='Ketik Nama Anda...'
            onInput={()=>{
              this.setState({karakter: this.refs.karakter.value})}
            }/>
            <div className='input-group-append'>
              <button onClick={cari} 
              className='btn btn-info'>Cari</button>
            </div>
          </div>
        
        {this.state.robot ?
        <Konten data={this.state.robot}/> :
        <Loading />
        }

        </center>
      </div>
    );
  }
}

export default App;
