import React, {Component} from 'react';
import CharInfo from './CharInfo';

class List extends Component{
    render() {
        const {people} = this.props.people;    
            
        return(
            <div className="">
                {
                    people?.map((p) => {
                        console.log(p);
                            return(
                                <div key={p.url}>
                                    <CharInfo charInfo={p} />
                                </div>
                            )
                        })
                }
            </div>
        );
    }
}

export default List;