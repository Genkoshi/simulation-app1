import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import '../App.css';
import axios from 'axios';

export default class Bin extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            edit: 'false',
        }
    }

    componentDidMount(){
        axios.get('/api/bin/3')
        .then(res => {
            var {bin_name, bin_price} = res.data[0];
            this.setState({
                name: bin_name,
                price: bin_price
        })
        })
    }
    updateData(){
        let {name, price} = this.state;
        this.setState({price: Math.round(this.state.price * 100) / 100})
        axios.put('/api/bin/3', {name, price}).then(res => console.log(res))
    }

    render(){
        let {name, price, edit} = this.state
        let editButton = !edit ? 'Save' : 'Edit'
        return(
            <div>
                <Navbar />
                <div className='wrapper'>
                    <p>Name</p>
                    <input disabled={edit} value={name} onChange={(e) => this.setState({name: e.target.value})} ></input>
                    <p>Price</p>
                    <input disabled={edit} value={price} onChange={e => this.setState({price: e.target.value})} ></input>
                    <button onClick={() => {
                        this.setState({edit: !this.state.edit});
                        this.updateData()
                            }
                        } >{editButton}</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}