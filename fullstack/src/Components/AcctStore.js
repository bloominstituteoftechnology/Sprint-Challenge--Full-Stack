import React, { Component } from 'react';
import axios from 'axios';

class AcctStore extends Component {
    constructor (props) {
        super(props)
        this.state= {
          acctData: []
        }
      }
      componentDidMount() {
        axios.get(`http://localhost:1963/accounts`)
        .then(res => {
          this.setState({
            acctData: res.data
          })
          console.log(this.state)
        })
    }
    render() {
        return(
            this.state
        )
    }
}

export default AcctStore