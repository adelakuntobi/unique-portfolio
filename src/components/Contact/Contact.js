import React from 'react'
import Header from '../ProjectComponent/Header'
import '../../css/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <Header title="Contact Me"
        role={`Say Hello`}
        list1="Do you want me to handle your project or you just want to have a chat about Design, a Project, Career, or life in general?" />

        <form className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-12">
          <div className="py-4">
            <label>Full Name<span className="text-red-600">*</span></label>
            <input className="block border w-full p-2 mt-3 opacity-75"/>
          </div>
          <div className="py-4">
            <label>Email<span className="text-red-600">*</span></label>
            <input className="block border w-full p-2 mt-3 opacity-75" />
          </div>
          <div className="py-4">
            <label>Message<span className="text-red-600">*</span></label>
            <textarea className="block border w-full p-2 mt-3 h-40 opacity-75" />
          </div>
          <button 
          className="text-center block mx-auto mt-24 py-2 px-8 background-blue text-white hover:shadow-2xl">
            Send Message</button>
        </form>
      {/* <div className="container mx-auto py-6">
        <p>Shoot me an email at <a href=" https://github.com" >Uniqueideas85@gmail.com</a></p>
        <h1 className="py-5">OR</h1>
        <p>Connect with me on all socials <a href=" https://github.com" >@uniquee_ideas</a></p>

      </div> */}
    </div>
  )
}

export default Contact
