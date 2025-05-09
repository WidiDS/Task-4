import React from 'react';
import profileImage from './assets/images/profile.jpg'; // Adjust the path as necessary

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>UI/UX Developer</h1>
        <p>@Ayush Barnwal</p>
      </header>

      <section className="about">
        <h2>About</h2>
        <p>Seorang pelajar </p>
      </section>

      <section className="recent-work">
        <h2>Recent Work</h2>
        <ul>
          <li><a href="https://decodable.co">Decodable.co</a></li>
          <li><a href="https://gofirefly.io">Gofirefly.io</a></li>
          <li><a href="https://blinkops.com">Blinkops.com</a></li>
          <li><a href="https://withkanvas.com">Withkanvas.com</a></li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
          <cite>Ayush Raj</cite>
        </blockquote>
        <blockquote>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
          <cite>Alex Cattoni</cite>
        </blockquote>
      </section>

      <footer>
        <h2>Have something in mind?</h2>
        <p>Let’s build it together.</p>
        <button>Get in touch</button>
      </footer>
    </div>
  );
};

export default App;
