import React, {useState, useRef} from 'react';
import { send } from 'emailjs-com';

const Contacto = ({contacto, setContacto}) => {

  const iform = useRef()
 
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',

  })

  const onSubmit = (e) =>{
    e.preventDefault();
    send(
      'service_893wijb',
      'template_gjv3j3t',
      toSend,
      'c4_OLeTG-ei8-Qw3b'
    ).then((response)=>{
      iform.current.reset();
  
    }).catch((err)=>{
      console.log('FAILED...', err);
    })

    
  }

  const handleChange = (e) =>{
    setToSend({ ...toSend, [e.target.name] : e.target.value })
  }
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

                <form 
                ref={elem =>{iform.current = elem}}
                onSubmit={onSubmit}
                method="POST" 
                id="contact-form" >

                      <div className="field">
                          <label className="label contact-yellow-text">Name</label>
                          <div className="control">
                            <input 
                            className="input keyUp" 
                            type="text" 
                            name="to_name"
                            placeholder="I'm Florencia, and You?"/>
                          </div>
                        </div>
                            
                        <div className="field">
                          <label className="label  contact-yellow-text">Email</label>
                          <div className="control has-icons-left has-icons-right">

                            <input 
                            onChange={handleChange}
                            name='reply_to'
                            className="input keyUp" 
                            type="email" 
                            id="email" 
                            placeholder="Your Email"/>

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

                            <textarea
                            className="textarea keyUp" 
                            name='message'
                            placeholder="Textarea"
                            id="message"
                            onChange={handleChange}
                            >
                            </textarea>

                          </div>
                        </div>
                        
                        
                        <div className="field is-grouped">
                          <div className="control">
                            <button 
                            type="submit" 
                            form="contact-form"  
                            className="button is-link contact-yellow-text">Submit</button>
                          </div>
                          <div class="control">
                            <button  className="button is-link is-light contact-yellow-text ">Cancel</button>
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
