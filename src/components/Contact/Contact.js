import React, { useState, useEffect } from 'react'
import Header from '../ProjectComponent/Header'
import '../../css/Contact.css';
import Loader from '../Loader/Loader';

// import Successful from '../Loader/Successful';
// import emailjs from 'emailjs-com';

function Contact() {
  // var initialState = true
  function sendEmail(e) {
    e.preventDefault();
 
    setLoading(
      newloader => newloader = true
    )

    e.target.reset()
  }
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setLoading(
        newloader => newloader = false
      )
      
    }, 10000);


  }, [])


  return (
    <div className="contact">
      {
        loading ? <Loader /> : ""
      }
      

      <Header title="Contact Me"
        role={`Say Hello`}
        list1="Do you want me to handle your project or you just want to have a chat about Design, a Project, Career, or life in general?" />

      <form className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-12" onSubmit={sendEmail}>
        <div className="py-4">
          <label>Full Name<span className="text-red-600">*</span></label> <i className="fa">&#xf164;</i>

          <input required type="text" className="block border w-full p-2 mt-3 opacity-75" name="from_name" />
        </div>
        <div className="py-4">
          <label>Email<span className="text-red-600">*</span></label>
          <input required type="email" className="block border w-full p-2 mt-3 opacity-75" name="from_email" />
        </div>
        <div className="py-4">
          <label>Subject<span className="text-red-600">*</span></label>
          <input required type="text" className="block border w-full p-2 mt-3 opacity-75" name="subject" />
        </div>
        <div className="py-4">
          <label>Message<span className="text-red-600">*</span></label>
          <textarea required className="block border w-full p-2 mt-3 h-40 opacity-75" name="message" />
        </div>

        <button value="submit" type="submit"
          className="text-center block mx-auto mt-24 py-2 px-8 background-blue text-white hover:shadow-2xl">
          Send Message</button>
      </form>

    </div>
  )
}

export default Contact
