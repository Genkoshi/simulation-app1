import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Navbar from './navbar/Navbar';

export default function Home(props){
    return(
        <div>
            <Navbar />
        <div className='wrapper'>
            <Link className='shelves' to={`/bins/A`}  >
                <div  >
                    Shelf A
                </div>
            </Link>
            <Link className='shelves' to={`/bins/B`}  >
                <div  >
                    Shelf B
                </div>
            </Link>

            <Link className='shelves' to={`/bins/C`}  >
                <div  >
                    Shelf C
                </div>
            </Link>

            <Link className='shelves' to={`/bins/D`}  >
                <div  >
                    Shelf D
                </div>
            </Link>
                
        </div>
        </div>
        
    )
}