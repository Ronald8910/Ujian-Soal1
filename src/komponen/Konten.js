import React, {Component} from 'react'

class Konten extends Component{
    render(){
        return(
            <div className='card' style={{width: '30rem'}}>
                <div className='card-body'>
                    <h4 className='card-title'>
                        {this.props.data ? this.props.data.name : ''}
                    </h4>
                    <div className='row'>
                        <i className='col-4'></i>
                        {/* <i className='col-4'>{this.props.data ? this.props.data.coord.lon : <div></div>}</i>
                        <i className='col-4'>{this.props.data ? this.props.data.coord.lat : ''}</i> */}
                        {this.props.data ? 
                        <iframe className='mt-2' src={`https://robohash.org/GPR.png?set=set1`} width="600" height="450" frameborder="0" style={{border:0}} title='peta' allowfullscreen></iframe> :
                        <div></div>
                        }
                        
                    </div>
                </div>                
            </div>
        )
    }
}

export default Konten