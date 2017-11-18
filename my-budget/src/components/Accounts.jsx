import React, { Component } from 'react';

//import Movie from './Movie';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../index.css';
import { Link } from 'react-router-dom';
class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
  }

  componentDidMount() {
    this.props.fetchAccounts().then(props => 
    this.setState(
      {
        accounts: props.payload.data
      },
      () => {console.log('Mounted State:', this.state)}
    )); //  console.log('Mounted State:', this.state))
  }
  setHTML = (cellInfo) => {
    let r = {}
    try {
      if (this.props.accounts === undefined) return  { __html: 'undef data'}
      console.log('setHTML non undef data');
      let index = cellInfo.index
      console.log('index:',index)
      let id = cellInfo.column.id
      console.log('id:',id)
      r = {  __html:this.props.accounts[cellInfo.index][cellInfo.column.id]}
    }
    catch(err) {
      console.log('setHTML err:',err)
      r = { __html: 'empty crap'}
    }
    return r;
  }
  renderEditable = (cellInfo) => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.props.accounts];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ accounts: data });
        }}
        dangerouslySetInnerHTML={this.setHTML(cellInfo)}        
      />
    );
  }

  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: this.renderEditable
      },
      {
        Header: 'Description',
        accessor: 'description',
        Cell: this.renderEditable
      },
      {
        id: 'budgetedAmount',
        Header: 'Budgeted Amount',
        accessor: 'budgetedAmount',
        Cell: this.renderEditable
      },
      {
        id: 'isActive',
        Header: 'Is Active?',
        accessor: 'isActive',
        Cell: this.renderEditable
      },
      {
        id: 'modifyAccount',
        Header: '',
        accessor: d => (
          <button
            onClick={() => {
              this.props.modifyAccount({
                _id: d._id,
                name: d.name,
                description: d.description,
                budgetedAmount: d.budgetedAmount,
                isActive: d.isActive
              });
            }}
          >
            Modify Account
          </button>
        )
      }
    ];
    return (
      <div>
        <ReactTable
          className="-highlight"
          defaultPageSize={5}
          data={this.props.accounts}
          columns={columns}

          /*
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              if (rowInfo) {
                //console.log('rowInfo.row',rowInfo.row)
                this.setState({
                  movie: this.props.getMovie(rowInfo.row.id)
                });
                //console.log('rowInfo id', id)
              }
            }
          };
        }}
        */
        />
        <button>
          <Link to={`/account`}>Add an Account</Link>
        </button>
      </div>
    );
  }
}

export default Accounts;
