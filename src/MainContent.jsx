function MainContent() {
    return (
        <>
        <img className="headshot" src='/Seans Headshot.JPG' alt="" />
        <main>
        
          <div className="name-title">
            <h1 className='name'>Sean Coleman</h1>
            <h4 className='title'>Frontend Developer</h4>
            <a className='website' href='/'>sean-coleman.com</a>
          </div>
  
          <div className="contact-btns">
            <a href="mailto:scoleman2296@gmail.com" className="email-btn"><img src='/Mail.png' alt="Mail icon" /><span>Email</span></a>
            <a href="https://www.linkedin.com/in/seantcoleman/" className="linkedin-btn"><img src='/linkedin.png' alt="" />LinkedIn</a>
          </div>
          
          <div className="about-interests">
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </main>
        </>
    )
}

export default MainContent