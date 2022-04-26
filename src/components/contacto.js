import React, {useState, useEffect} from 'react';

const Contacto = ({contacto, setContacto}) => {
  
    function handleClose(){
        setContacto(false)
    }
    var classCont = contacto? "modal is-active modal_contacto" : "modal modal_contacto"
    return (
        <div className={classCont}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <section className="modal-card-body has-background-black-ter">
                    <h1 className="title">Really delighted to meet you!</h1>

                    <form action="" method="POST" id="contact-form" >
                <div className="field">
                    <label className="label contact-yellow-text">Name</label>
                    <div className="control">
                      <input className="input keyUp" id="name" type="text" placeholder="I'm Florencia, and You?"/>
                    </div>
                  </div>
                      
                  <div className="field">
                    <label className="label  contact-yellow-text">Email</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input keyUp" type="email" id="email" placeholder="Your Email" value="hello@"/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                      </span>
                    </div>
                    <p className="help email-help"></p>
                  </div>
                  
                  
                  <div className="field">
                    <label className="label  contact-yellow-text">Message</label>
                    <div className="control">
                      <textarea class="textarea keyUp" placeholder="Textarea"id="message"></textarea>
                    </div>
                  </div>
                  
                  <div className="field">
                    <div className="control">
                      <label className="checkbox  contact-yellow-text">
                     
                        <input type="checkbox" id="notif"/>
                        I want to recive <a href="#">News and notifications</a>
                      </label>
                    </div>
                  </div>
                  
                  
                  <div class="field is-grouped">
                    <div class="control">
                      <button type="submit" form="contact-form"  class="button is-link contact-yellow-text">Submit</button>
                    </div>
                    <div class="control">
                      <button  class="button is-link is-light contact-yellow-text ">Cancel</button>
                    </div>
                  </div>
            </form>

            
                </section>
                <button 
                onClick={handleClose}
                className="button modal-close" aria-lebel="close"></button>
            </div>
            
        </div>
    );
}

export default Contacto;
