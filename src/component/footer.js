import React, { Component } from 'react';
import { details } from '../mock';

class Footer extends Component {
    state = {}
    scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    render() {
        const footer = details.map((data) => { return data.footer })
        return (
            <>
                {
                    footer[2].map((data) => {
                        return (
                            <div className={data.class}>
                                <div className='text_section'>
                                <img className='copyright_img' src="images/copyright.png" alt="" />
                                <h2 className='footer_text'>{data.text}</h2>
                                </div>
                                <div className='contact'>
                                    <p className='contact_us'>Contact us</p>
                                    <a className='contact_mail' href="#">xyz@mail.com</a>
                                </div>
                                <button onClick={this.scrollToTop} className='top_btn'>top</button>
                                {/* {BiArrowFromButton} */}
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default Footer;
