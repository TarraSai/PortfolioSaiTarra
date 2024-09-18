import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sf140sb', 'template_7xu58ap', form.current, {
        publicKey: 'Wxvp0YqfqhmwKTUgU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("message send successfully")
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Message is not send")
        },
      );
  };
  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center">
      <h1 className="text-center mb-4">Get in touch</h1>
      <p className="text-center mb-5">Contact Me</p>
      <div className="row">
        {/* Talk to Me Section */}
        <div className="col-md-6 mb-4">
          <div className="card p-3 mb-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-envelope fs-3 me-3"></i>
              <div>
                <h5 className="mb-1">Email</h5>
                <p className="mb-0">1919saitarra@gmail.com</p>
                <a href="mailto:1919saitarra@gmail.com" className="stretched-link text-decoration-none">
                  Write me →
                </a>
              </div>
            </div>
          </div>
          <div className="card p-3 mb-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-whatsapp fs-3 me-3"></i>
              <div>
                <h5 className="mb-1">Whatsapp</h5>
                <p className="mb-0">9014933008</p>
                <a href="https://wa.me/9014933008" className="stretched-link text-decoration-none">
                  Write me →
                </a>
              </div>
            </div>
          </div>
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-linkedin fs-3 me-3"></i>
              <div>
                <h5 className="mb-1">LinkedIn</h5>
                <a href="https://www.linkedin.com/in/tarra-sai-93811325b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="stretched-link text-decoration-none">
                  Write me →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Write Me Your Project Section */}
        <div className="col-md-6 mb-4">
          <div className="card p-4 h-100">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name='to_name' className="form-control" id="name" placeholder="Insert your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name='from_name' className="form-control" id="email" placeholder="Insert your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="project" className="form-label">Project</label>
                <textarea className="form-control"  name='message'id="project" rows="3" placeholder="Write your project idea"></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Send Message <i className="bi bi-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
