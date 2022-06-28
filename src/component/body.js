import React, { Component } from 'react';
import { details } from '../mock';

class Body extends Component {
    state = { 
        data: []
     } 
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums').
        then(res => res.json()).
        then(data => this.setState({data}))
    }
    render() {
        const body = details.map((data) => { return data.body })
        return (
            <>
            {
                body[1].map((data)=>{
                    return (
                        <div className={data.class}>
                            <h1>Some content to show sticky Header</h1>
                            <ul>
                            {
                                this.state.data.map((x)=>{
                                   return(
                                    <li>{x.title}</li>
                                   ) 
                                })
                            }
                            </ul>
                        </div>
                    )
                })
            }
            </>
        );
    }
}
 
export default Body;