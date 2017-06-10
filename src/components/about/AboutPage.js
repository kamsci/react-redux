import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, and other tools and libraries.</p>
        See our available <Link to='/courses'>courses</Link> today!
      </div>
    )
  }
}

export default AboutPage;