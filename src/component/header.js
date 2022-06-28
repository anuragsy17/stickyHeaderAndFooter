import React, { Component } from 'react';
import { details } from '../mock';

class Header extends Component {
    state = { }  
    render() {
        const header = details.map((data) => { return data.header })
        console.log('header', header);
        return (
            <div>
                {
                    header[0].map((data) => {
                        return (
                            <>
                                <h1>something</h1>
                                <div className={data.class}>
                                    <img src={data.image} alt={data.alt} />
                                    <h2>{data.user_name}</h2>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        );
    }
}

export default Header;