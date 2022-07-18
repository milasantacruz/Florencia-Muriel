import React, {useState, useRef, useCallback, useEffect} from 'react';
import { send } from 'emailjs-com';
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle,faEnvelope,faPaperPlane, faCheck, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';


const Contacto = ({contacto, setContacto}) => {

  const iform = useRef()
 
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',

  })

  const schema = Yup.object({
    from_name: Yup.string().required("Required"),
    reply_to: Yup.string().required("Required").email(),
    message: Yup.string().required("Required")
})
  
  const[output, setOutput] = useState("Welcome");
  
  const {
    handleChange,
    handleSubmit,
    touched,
    values,
    errors
} = useFormik({
    initialValues: {
        to_name: 'Florencia',
        from_name:"",
        reply_to:"",
        message:""
    },
    validationSchema: schema,
    onSubmit:(values) =>{
        console.log(JSON.stringify(values))
        send(
          'service_893wijb',
          'template_gjv3j3t',
          values,
          'c4_OLeTG-ei8-Qw3b'
        ).then((response)=>{
          setOutput("Thank you! your message has been sent")
          iform.current.reset();
      
        }).catch((err)=>{
          setOutput("Something went wrong! try again in a few minutes")
          iform.current.reset();
          console.log('FAILED...', err);
        })
    },

})



  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      console.log("esc")
      setContacto(false)
    }
  }, [contacto]);

  useEffect(()=>{
      
      document.addEventListener("keydown", escFunction, false);

      return()=>{
       
        document.removeEventListener("keydown", escFunction, false);
      }
  },[])

  /*const handleChange = (e) =>{
    setToSend({ ...toSend, [e.target.name] : e.target.value })
  }*/

    function handleClose(){
        setContacto(false)
    }

    function handleCancel(){
      setContacto(false)
    }

    var classCont = contacto? "modal is-active modal_contacto" : "modal modal_contacto"
    return (
        <div className={classCont}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <section className="modal-card-body has-background-black-ter">
                    <h1 className="title" style={{ color:"#485fc7" }}>{output}</h1>

                <form 
                ref={elem =>{iform.current = elem}}
                onSubmit={handleSubmit}
                id="contact-form" >

                      <div className="field">
                          <label className="label contact-yellow-text">Name</label>
                          <div className="control has-icons-left">
                            <input 
                            className="input keyUp" 
                            type="text" 
                            name="from_name"
                            id="from_name"
                            value={values.name}
                            placeholder="I'm Florencia, and You?"
                            onChange={handleChange}
                            style={{
                              borderColor: touched&&errors.name? "red":"#485fc7"
                          }}
                            />
                            <span className="icon is-small is-left">
                            <FontAwesomeIcon  icon={faUserCircle}/>
                            </span>
                          </div>
                        </div>
                            
                        <div className="field">
                          <label className="label  contact-yellow-text">Email</label>
                          <div className="control has-icons-left has-icons-right">

                            <input 
                            onChange={handleChange}
                            name='reply_to'
                            id='reply_to'
                            className="input keyUp" 
                            type="email" 
                            placeholder="Your Email"
                            value={values.email}
                            style={{
                              borderColor: touched&&errors.email? "red":"#485fc7"
                          }}
                            />
                            <span className="icon is-small is-left">
                            <FontAwesomeIcon  icon={faEnvelope}/>
                            </span>
                          </div>
                          
                        </div>
                        
                        
                        <div className="field">
                          <label className="label  contact-yellow-text">Message</label>
                          <div className="control">

                            <textarea
                            className="textarea keyUp" 
                            name='message'
                            placeholder="Textarea"
                            id="message"
                            value={values.message}
                            onChange={handleChange}
                            style={{
                              height:"100%",
                              borderColor: touched&&errors.message? "red":"#485fc7"
                          }}
                            >
                            </textarea>

                          </div>
                          {touched.name && errors.message?
                          <h3 className="err">{errors.message}</h3>:
                          <div></div>
                          }
                        </div>
                        
                        
                        <div className="field is-grouped">
                          <div className="control ">
                            <button 
                            type="submit" 
                            form="contact-form"  
                            className="button is-link contact-yellow-text">
                              <span>
                              Submit
                              </span>
                             <span className="icon is-small is-right">
                               <FontAwesomeIcon  icon={faPaperPlane}/>
                            </span>
                            </button>
                          </div>
                          <div class="control">
                            <button onClick={handleCancel} className="button is-link is-light contact-yellow-text ">Cancel</button>
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
