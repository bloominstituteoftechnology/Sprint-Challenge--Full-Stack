import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import BudgetForm from './components/BudgetForm';
import BudgetFormEdit from './components/BudgetFormEdit';
import BudgetFormDelete from './components/BudgetFormDelete';
import BudgetsContainer from './components/BudgetsContainer';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to Your Budget App!</h1>
//         </header>
//         <BudgetForm />
//         <BudgetsContainer />
//       </div>
//     );
//   }
// }

const Home = () => (
  <div>
    <h1 className="App-Title">Welcome to MYF</h1>
    <p className="App-intro">Manage Your Finance</p>
  </div>
)

const MyBudgets = ({ match }) => (
  <div>
  <BudgetsContainer /> 
  </div>
)

const CreateAccounts = ({ match }) => (
  <div>
  <BudgetForm />
  </div>
)

const EditAccounts = ({ match }) => (
  <div>
  <BudgetFormEdit />
  </div>
)

const DeleteAccounts = ({ match }) => (
  <div>
  <BudgetFormDelete />
  </div>
)




const Budget = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Budgets = ({ match }) => (
  <div>
    <h2>Budgets</h2>
    <ul>
      <li>
        <Link to={`${match.url}/MyBudgets`}>
          My Budgets
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/CreateAccounts`}>
          Create New Account
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/EditAccounts`}>
          Edit An Account
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/DeleteAccounts`}>
          Delete An Account
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Budget}/>
  </div>
)



const TheBudget = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/budgets">Budgets</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/budgets" component={Budgets}/>
        <Route path="/budgets/mybudgets" component={MyBudgets}/>
        <Route path="/budgets/createaccounts" component={CreateAccounts}/>
        <Route path="/budgets/editaccounts" component={EditAccounts}/>
        <Route path="/budgets/deleteaccounts" component={DeleteAccounts}/>
    </div>
  </Router>
)


export default TheBudget;

// export default App;
