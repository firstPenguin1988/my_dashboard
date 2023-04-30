import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style/Header.css';
import Avatar from "./img/avatar.jpg";

class Header extends Component {

    render() {

        return (
            <div className="header">
			    <div className="left">
				    <input type="text" placeholder="Search.." />
			    </div>
	
			    <div className="right">
				    <select data-placeholder="Language...">
					    <option value="EN">EN</option>
					    <option value="FR">FR</option>
					    <option value="DE">DE</option>
					    <option value="ES">ES</option>
					    <option value="PT">PT</option>
					    <option value="HI">HI</option>
				    </select>
				    <a href="#notify"><i className="fa fa-bell-o" aria-hidden="true"></i></a>
				    <img src={Avatar} alt="admin" id="avatar"/>
			    </div>
            </div>
        );
    }
}

export default Header;