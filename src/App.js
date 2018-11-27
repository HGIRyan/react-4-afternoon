import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <Link to='/' className='links'>WestSide University</Link>
          <div className='link-wrap'>
            <Link to='/' className='links'>Home</Link>
            <Link to='/about' className='links'>About</Link>
          </div>
        </nav>
        {routes}
      </div>
    )
  }
}