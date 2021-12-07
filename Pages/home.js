import React from "react";
import {Carousel} from './components/Carousel'
import './Styles/home.css'


function Home () {

    return (

        <div>
            <header>
                
                <input type="search" name="search" id="search" placeholder="  Search a movie" />
                <nav className="menu_container">
                    <div className="menu_section">
                        <h2 className="section_title">Menu</h2>
                        <ul className="menu_list">
                            <li className="menu_item"><a className="menu_link" href=""><h3 className="item_icon">1</h3>Home</a></li>
                            <li className="menu_item"><a className="menu_link" href=""><h3 className="item_icon">2</h3>Discover</a></li>
                            <li className="menu_item"><a className="menu_link" href=""><h3 className="item_icon">3</h3>News</a></li>
                            <li className="menu_item"><a className="menu_link" href=""><h3 className="item_icon">4</h3>Most Popular</a></li>
                            <li className="menu_item"><a className="menu_link" href=""><h3 className="item_icon">5</h3>Discover</a></li>
                        </ul>
                    </div>
                </nav>


            </header>


            <main>
                <Carousel section="Continue Watching"/>
                <Carousel section="My List"/>
                <Carousel section="Most Popular"/>
                <Carousel section="Comedy"/>
                <Carousel section="Family"/>
            </main>  

        </div>

    );
}

export { Home };