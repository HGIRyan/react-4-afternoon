import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: [],
    }
  }
  componentDidMount(){
    let promise = axios.get('http://localhost:3005/students?class='+this.props.match.params.class)
    promise.then(resp => {
      this.setState({
        students: resp.data
      })
    })
  }

  render() {
    let studentList = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={ i }>
      <h3 > {student.first_name} {student.last_name}  </h3>
      </Link>
    ))
    return (
      <div className="box">
      <Link to='/'><button>Back</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentList}
      </div>
    )
  }
}