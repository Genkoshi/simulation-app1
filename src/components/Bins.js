import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import '../App.css';

export default function Bins(props){
    return(
        <div>
            <Navbar id={props.match.params.id}/>
            <div>
            <div className='bins-wrapper'>
            <Link className='bins' to={`/bin/A1`}  >
                <div  >
                    Bin 1
                </div>
            </Link>
            </div>
            </div>
        </div>
    )
}