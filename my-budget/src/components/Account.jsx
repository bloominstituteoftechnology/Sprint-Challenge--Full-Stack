import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function CustomTextInput(props) {
  return (
    <input
      ref={props.inputRef}
      name={props.name}
      className={props.className}
      size={props.size}
      placeholder={props.placeholder}
      type={props.type}
      style={props.style}
      pattern={props.pattern}
      title={props.title}
    />
  );
}
export default class Account extends Component {
  constructor(props) {
    super(props);

    super(props);
    this.name = '';
    this.description = '';
    this.budgetedAmount = 0;
    this.isActive = false;
  }

  componentDidMount() {}
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          /*
          console.log(
            `name:${this.name.value}  age:${this.age.value} email:${this.email
              .value}`
          );
          */
          this.props.addAccount({
            name: this.name.value,
            description: this.description.value,
            budgetedAmount: this.budgetedAmount.value,
            isActive: this.isActive.value
          });
          this.name = '';
          this.description = '';
          this.budgetedAmount = 0;
          this.isActive = false;
        }}
      >
        <div style={{ height: '30px', display: 'inline' }}>
          <CustomTextInput
            name="name"
            inputRef={el => (this.name = el)}
            className="inputText"
            type="text"
            placeholder="name"
            size="30"
          />
          <CustomTextInput
            inputRef={el => (this.description = el)}
            className="inputText"
            type="text"
            placeholder="description"
            size="20"
          />
          <CustomTextInput
            inputRef={el => (this.budgetedAmount = el)}
            className="inputText"
            type="float"
            pattern="\d*(\.\d\d)?"
            title="if decimal must be followed by 2 digits"
            placeholder="budgeted amount"
            size="15"
          />
          <CustomTextInput
            inputRef={el => (this.isActive = el)}
            className="inputText"
            type="boolean"
            placeholder="is active"
            size="5"
          />
        </div>
        <button type="submit">Add Account</button>
        <button>
          <Link to="/">Back to List</Link>
        </button>
      </form>
    );
  }
}
