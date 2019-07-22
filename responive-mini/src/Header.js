import React, { Component } from 'react';

export default class Header extends Component {
    constructor (props){
        super(props);
        this.state = {
            toggleSideBar: false
        };
        this.toggleSideBarFunc = this.toggleSideBarFunc.bind(this);
    }

    toggleSideBarFunc(){
        this.setState((prevState) => {
            return {
                toggleSideBar: !prevState.toggleSideBar
            }
        })
    }

    render() {
        return <header>
            <div>
                <div className="logo">
                    <a href="#/services">Start Bootstrap</a>
                </div>
                <button onClick={this.toggleSideBarFunc}>click</button>
                <nav className={this.state.toggleSideBar ? "show" : ""}>
                    <ul>
                        <li> 
                            <a href='#/services'>Services</a>
                        </li>
                        <li> 
                            <a href='#/portfolio'>Portfolio</a>
                        </li>
                        <li> 
                            <a href='#/aboot'>About</a>
                        </li>
                        <li> 
                            <a href='#/mytizzle'>Team</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    }
}