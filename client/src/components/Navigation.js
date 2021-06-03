import React, { Component } from 'react';
import  '../style/navigation.css';
export class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPage : props.selected
        }

    }
    render() {
        return (
            <div className="menu-container" >
        
            <div className="container bg-dark" >
                <nav className="navbar navbar-toggleable-md navbar-light ">
                    <button className="navbar-toggler navbar-toggler-right mt-3" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span ></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                           
                            <li className="nav-item ">
                                <a className="nav-link active" href="/" >Home </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/health">Health </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/sports">Sports </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/entertainment">Entertainment </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/business">Business </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        )
    }
}

export default Navigation


