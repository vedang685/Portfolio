import {React,useState} from 'react'
import {images} from '../../constants'
import {Appwrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name:'',email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const {name, email, message} = formData

  const handleChangeInput = (e) => {
    const {name,value} = e.target
    setFormData({...formData, [name]:value,})
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type:'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(()=>{
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }

  return (
    <>
        <h2 className='head-text'>Take a coffee and <span>chat </span>with me</h2>
          <div className='app__footer-cards'>
            <div className='app__footer-card'>
              <img src={images.email} alt='email'/>
              <a href="mailto:vedang685@gmail.com" className='p-text'>vedang685@gmail.com</a>
            </div>
      {!isFormSubmitted ? 
        <>
            <div className='app__footer-card'>
              <img src={images.mobile} alt='email'/>
              <a href="tel:+91 9315372836" className='p-text'>+91 9315372836</a>
            </div>
            <div className='app__footer-form app__flex'>
              <div className='app__flex'>
                <input name="name" className='p-text' type="text" placeholder="Your Name" value={name} onChange={handleChangeInput}/>
              </div>
              <div className='app__flex'>
                <input name="email" className='p-text' type="email" placeholder="Your Email" value={email} onChange={handleChangeInput}/>
              </div>
              <div>
                <textarea className="p-text" placeholder="Your Message" value={message} name= "message" onChange={handleChangeInput}></textarea>
              </div>
              <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Loading':'Send Message'}</button>
            </div>
            </> 
            : 
            <div>
              <h3 className='head-text'>Thankyou for getting in <span>touch</span></h3>
            </div>
          }
         </div>
    </>
  )
}

export default Appwrap(MotionWrap(Footer,'app__footer'),'contact','app__whitebg')