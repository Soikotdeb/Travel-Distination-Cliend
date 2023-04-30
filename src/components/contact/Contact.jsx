import React from 'react';
import './Contact.css'
import person from '../../../public/images/icons/sd.jpg'
import { Image } from 'react-bootstrap';

const Contact = () => {

    return (
        <div className="contact-card">
        <div className="contact-info">
          <p className="contact-title">Contact Info</p>
          <p><span className='fw-bold'>Phone:</span>  01795474430</p>
          <p><span className='fw-bold'>Email:</span>  sdsoikot424@gmail.com</p>
          <p><span className='fw-bold'>Location:</span>  Sylhet, Moulvibazar, Sreemangal, Mirzapur</p>
        </div>
        <section id="contact">
      <div className="container mt-3 contactContent">
        <h1 className="text-center">Contact Me</h1>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div style={{maxWidth:'100%', overflow:'hidden', color:'red', width:'500px', height:'500px'}}>
              <div id="display-google-map" style={{height:'100%', width:'100%', maxWidth:'100%'}}>
   <Image src="https://www.google.com/maps/vt/data=1fCRHzJ1UN2f68a6YkgwuE-gf64UkokbJVhIiXwTXsvH3eo_wjMTymVVFMyaaARECHte2zz9jxKVbRzLOkcagPN5ohH-BTba8sBp3sdkKLIfO_EESEBq8MWovc0i3MMlSp49Ado_4FdeHk7wzAR-hlHEJhpcRZfyFybuDA_5DW3Ujy1ZjcLgHmbkU7hMPd1-oyGaVBIIX8OufsazfA4lAE_JkVz7oxzFnSM1jPA64JgFoD91Ad6lS1jFt0xq28k-Pg" fluid alt="" /> 
   </div> 
            </div>
          </div>

          <div className="col-lg-6">
            {/* form fields */}
            <form>
              <input type="text" className="form-control form-control-lg" placeholder="Name" />
              <input type="email" className="form-control mt-3" placeholder="Email" />
              <input type="text" className="form-control mt-3" placeholder="Subject" />
              <div className="mb-3 mt-3">
                <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
              </div>
            </form>
            <button type="button" className="btn btn-success mt-3">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
      </div>
      
    
    );
};

export default Contact;