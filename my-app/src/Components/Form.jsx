import React from 'react'

function Form() {
  return (
      <form>
            <h2>Send Me A Message <div className="SocialLinks">
                <i className="fa-brands fa-codepen"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
              </div>
            </h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="email" />
            <textarea rows="10" placeholder="Type your Message Here..."></textarea>
            <button className="primary">Send</button>
        </form>
  )
}

export default Form
