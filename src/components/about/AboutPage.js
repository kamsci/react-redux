import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, and other tools and libraries.</p>
        <Link to='/' className='btn btn-primary'>Home</Link>
      </div>
    )
  }
}

export default AboutPage;