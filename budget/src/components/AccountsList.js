import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from '../actions';
import { Link } from 'react-router-dom';


class AccountsList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.props.getList().then((prom)=>{
            this.setState({ list: prom.payload.data });
        });
    }
    render() {        
        if (this.state.list.length === 0) {
            return <h1>...Loading List</h1>
        } else {
            return (
            <ul className="list">
            { this.state.list.map((item, i) =>{
                let sw; 
                if(item.isActive){
                    sw = <p>Active</p>
                } else {
                    sw = <p>Not Active</p>
                }             
                return (<li key={i}>
                            <h3>Name: {item.name}</h3>
                            <p>Description: {item.description}</p>
                            <p>Budgeted amount: {item.budgetedAmount}</p>
                            { sw }
                            <Link to={`/edit/${i}`}>edit</Link>
                        </li>);
            }) }
            </ul>
            );
        }
    }
};

const mapStateToProps = (state) => {
    return {
      list: state.list
    }
  }
  
export default connect(mapStateToProps, { getList })(AccountsList);
