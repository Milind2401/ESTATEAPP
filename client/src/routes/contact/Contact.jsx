import React from 'react'
import "./contact.scss";
export default function Contact() {

	const emailURL = import.meta.env.VITE_MAIL_KEY;
  return (
    <div className='contactPage'>
      <div className='imageContainer'>
      <img src="./contactBG.png" alt="" />
      </div>

      <div className='formContainer'>
      <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value={emailURL}/>
		<h1 className="title text-center mb-4">Talk to Us</h1>
			<div className="form-group position-relative">
				<label  className="d-block">
					<i className="icon" data-feather="user"></i>
				</label>
				<input type="text" name="name"  id="formName" className="form-control form-control-lg thick" placeholder="Name"/>
			</div>
			<div className="form-group position-relative">
				<label  className="d-block">
					<i className="icon" data-feather="mail"></i>
				</label>
				<input type="email" name='email' id="formEmail" className="form-control form-control-lg thick" placeholder="E-mail"/>
			</div>
			<div className="form-group message">
				<textarea id="formMessage" name='message' className="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
			</div>
			<div className="text-center">
				<button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
			</div>
	</form>
      </div>
    </div>
  )
}
