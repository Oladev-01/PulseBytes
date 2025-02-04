import { useState } from "react";
import { Nav } from './nav';
import { Footer } from './footer';
import ContactBody from "./contact-body";

const Contact = () => {
    return (
        <div className="contact" >    
            <Nav isContact={true}/>
            < ContactBody/>
            <Footer></Footer>
        </div>
    );
}

export default Contact;
