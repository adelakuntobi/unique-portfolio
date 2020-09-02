import React from 'react'
import Header from '../ProjectComponent/Header'
import '../../css/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <Header title="Contact Me"
        role={`Say Hello`}
        list1="Do you want me to handle your project or you just want to have a chat about Design, a Project, Career, or life in general?" />

      <div className="container mx-auto py-6">
        <p>Shoot me an email at <a href=" https://github.com" >Uniqueideas85@gmail.com</a></p>
        <h1 className="py-5">OR</h1>
        <p>Connect with me on all socials <a href=" https://github.com" >@uniquee_ideas</a></p>

      </div>
    </div>
  )
}

export default Contact
