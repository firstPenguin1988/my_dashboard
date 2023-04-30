import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style/Sidebar.css';
import axios from 'axios';
import List from './List';


class Sidebar extends Component {

    constructor(props) {
		super(props);
	
		this.state = {
			people: [],
		}
		this.getPeople = this.getPeople.bind(this);
	}
	
	getPeople(){
		return axios.get("https://swapi.dev/api/people")
		.then((response) => {
			console.log(response.data.results);
			try {
				this.setState({people: response.data.results})
			} catch (error) {
				console.log('Unhandled error')
			}
			
		})
	}
	
	componentDidMount(){
		this.getPeople();
	}

    render() {
        const {people} = this.state;
        return (
            <div className="sidebar">
                <a href="#"><i className="fa fa-home" aria-hidden="true" /><span /></a>
                <a href="https://www.gmail.com/"><i className="fa fa-envelope" aria-hidden="true" /><span /></a>
                <a href="comment.html"><i className="fa fa-comment" aria-hidden="true" /><span /></a>
                <a href="#"><i className="fa fa-user" aria-hidden="true" onClick={this.getPeople} /><span /></a>
                <a href="#"><i className="fa fa-upload" aria-hidden="true" /><span /></a>
                <a href="#"><i className="fa fa-cog" aria-hidden="true" /><span /></a>
                <List people={people} /> 
            </div>
        );
    }
}

export default Sidebar;