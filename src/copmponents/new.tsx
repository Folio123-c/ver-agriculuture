// Header.js
import React from 'react';
import Navbar from './nav'; 
import { useWindowWidthAndHeight } from './customHooks';
import SmallScreensNavbar from './smallScreenNavBar';
import { Link } from 'react-router-dom';

const Head = () =>{
    // use our custom hook to get the the window size
    const [width, height] = useWindowWidthAndHeight();
    console.log(height)
    return(
        <header>
            <div className="header-inner">
                { width > 1000 ?
                <Navbar navClass="nav-big"
                        linkClassName="nav-big-link"/>
                :
                <SmallScreensNavbar navClass="nav-small"
                                    linkClassName = "nav-small-link"
                />
                } 
            </div>
        </header>
    )
}

export default Head;