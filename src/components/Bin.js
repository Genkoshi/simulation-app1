import React from 'react';
import Navbar from './navbar/Navbar';

export default function Bin(props){
    return(
        <div>
            <Navbar id={props.match.params.id}/>
            <div>

            </div>
        </div>
    )
}