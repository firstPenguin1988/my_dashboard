import React, {Component} from 'react';

class CharInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.open.bind(this);
    }

    open(){
        this.setState({expanded: !this.state.expanded})
    }

    close(){
        this.setState({expanded: !this.state.expanded})
    }

    render() {
        const info = this.props.charInfo;

        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Show Info</p>
        }
        return(
            <div>
                <p onClick={this.close}>Hide Info</p>
                <ul>
                    <li><h2>Name: {info.name}</h2></li>
                    <li><h2>Gender: {info.gender}</h2></li>
                    <li><h2>BirthYear: {info.birth_year}</h2></li>
                </ul>
            </div>
        );
            
    }
}

export default CharInfo;