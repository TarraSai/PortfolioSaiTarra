
import Typewriter from "typewriter-effect";
import './home.css'
import { SiLeetcode,SiCodechef } from "react-icons/si";
import { FaLinkedin,FaGithub  } from "react-icons/fa";
import {Data}from '../Data'
function Homeinfo() {
  return (
    <div>
    <div className="homeinfo container  " >
  <div className="row  ">
    <div className="col-12 col-md-6 order-md-1 order-2 d-flex align-items-center ">
    <div>
    <h1 className='display-4 fw-bold '>Hi, I am <span className='text-primary'>{Data.name}</span></h1>
    <div className="d-flex align-items-center">
  <h1 className="display-5 fw-bold mb-0">I am </h1>
  <span className="text-primary ms-2 fs-1 fw-bold">
    <Typewriter
      options={{
        strings: [Data.role],
        autoStart: true,
        loop: true,
        wrapperClassName: 'typewriter-text',
      }}
    />
  </span>
</div>

    <p className='fs-5 mb-4 pt-4'>{Data.about}</p>
    <div className='row '>
    <div className="col-sm-9 d-flex justify-content-around gap-5 fs-sm-2 fs-1">
        <a href={Data.Linkedin}><FaLinkedin style={{ color: 'blue' }} /></a>
        <a href={Data.Github}><FaGithub style={{ color: 'black' }} /></a>
        <a href={Data.leetcode}><SiLeetcode style={{ color: '#C7253E' }} /></a>
        <a href={Data.codechef}><SiCodechef style={{ color: '#CD5C08' }} /></a>
    </div>
    <div className="col-sm-3 d-flex justify-content-center align-items-center">
        <a href={Data.resume} download={Data.resume} className="btn btn-dark w-100 mt-sm-0 mt-5">Resume<i className="bi bi-arrow-down-circle fs-5 px-1"></i></a>
    </div>
</div>


    </div>
            
    </div>
    <div className="col-12  col-md-6 order-md-2 order-1 align-items-center  ">
    <img src={Data.image} alt="Profile" className='img-fluid  border border-dark images ms-sm-5' />
    </div>
  </div>
</div>

    </div>
  )
}

export default Homeinfo