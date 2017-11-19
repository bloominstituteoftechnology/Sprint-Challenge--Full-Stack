import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class BudgetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: [],
            name: "",
            description: "",
            budgetAmount: "",
            isActive: ""
        };
        this.handleClick = this.handleClick.bind(this);
        // this.handlebudgetChange = this.handlebudgetChange.bind(this);
    }

    // handlebudgetChange(event) {
    //   this.setState({ name: event.target.value })
    //   this.setState({ description: event.target.value })
    //   this.setState({ budgetAmount: event.target.value })
    // }

    handleClick(event) {
      const newUser = {};
      newUser['id'] = this.state.budget.length;
      newUser['name'] = this.state.name;
      newUser['description'] = this.state.description;
      newUser['budgetAmount'] = this.state.budgetAmount;
      newUser['isActive'] = this.state.isActive; 

      const newBudget = this.state.budget;
      newBudget.push(newUser);
      this.setState({ 
        budget: newBudget,
        name: '',
        description: '',
        budgetAmount: '',
        isActive: false
      });
      console.log('this.state.budget', this.state.budget);
    }
    
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Budget Form" />
                        <TextField
                            hintText="Enter your name"
                            floatingLabelText="name"
                            onChange={(event,newValue) => 
                              this.setState({name:newValue})}
                        />
                        <br />

                        <TextField
                            hintText="Enter description"
                            floatingLabelText="description"
                            value = { this.state.description}
                            onChange={(event,newValue) => 
                              this.setState({description:newValue})}
                        />
                        <br />

                        <TextField
                            hintText="Enter the Budget Amount"
                            floatingLabelText="Budget Amount"
                            value = { this.state.budgetAmount}
                            onChange={(event,newValue) => 
                              this.setState({budgetAmount:newValue})}
                        />
                        <br />

                        <RaisedButton
                            label="Submit"
                            primary={true}
                            style={style}
                            onClick={this.handleClick}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15
};

export default BudgetForm;
