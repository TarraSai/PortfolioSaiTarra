import './skill.css';

function Skill() {
  
  return (
    <div className="min-vh-100 "  style={{ borderBottom: "1px solid #ddd " }}>
      <div className="container mt-5">
        <h1 className="text-center toppadding">Skills</h1>
        <div className="row justify-content-center pt-5">
          <div className="col-12 col-md-4 mb-4">
            <div className="card text-dark  h-100 w-100 w-sm-50 w-md-50 " style={{background:'#D7C3F1',borderRadius:'30px'}}>
              <div className="card-body d-flex flex-column align-items-center" >
                <h5 className="card-title text-center">Frontend</h5>
                <p className="card-text text-center p-3">
                  <span className="badge bg-info skill-badge">React JS</span>
                  <span className="badge bg-warning skill-badge">Tailwind CSS</span>
                  <span className="badge bg-dark skill-badge">Bootstrap</span>
                  <span className="badge bg-danger skill-badge">HTML</span>
                  <span className="badge bg-primary skill-badge">CSS</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card text-dark  h-100 w-100 w-sm-50 w-md-50 " style={{background:'#D7C3F1',borderRadius:'30px'}}>
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-center">Backend</h5>
                <p className="card-text text-center p-3">
                  <span className="badge bg-success skill-badge">NodeJs</span>
                  <span className="badge bg-dark skill-badge">ExpressJs</span>
                  <span className="badge bg-primary skill-badge">Mongodb</span>
                  <span className="badge bg-warning skill-badge">SQL</span>
                  <span className="badge bg-info skill-badge">JavaScript</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-12 mb-4 col-sm-4">
  <div className="card text-dark  h-100 w-100 w-sm-50 w-md-50 " style={{background:'#D7C3F1',borderRadius:'30px'}}>
    <div className="card-body d-flex flex-column align-items-center">
      <h5 className="card-title text-center">Others</h5>
      <p className="card-text text-center p-3">
        <span className="badge bg-primary skill-badge">C</span>
        <span className="badge bg-secondary skill-badge">C++</span>
        <span className="badge bg-warning skill-badge">Python</span>
        <span className="badge bg-warning skill-badge">JavaScript</span>
        <span className="badge bg-dark skill-badge">Git</span>
        <span className="badge bg-light text-dark skill-badge">GitHub</span>
        <span className="badge bg-danger skill-badge">Postman</span>
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Skill;

