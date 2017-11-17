import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { name, description, budgetedAmount, isActive } from ('./server.js')

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to Your Budget App!</h1>
//         </header>
//         <p className="App-intro">
//           To get started, Use <code>src/App.js</code> to help manage your budget!.
//         </p>
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


const MyBudget = ({ match }) => (
  <div>
    <h3>{match.params.budgetId}</h3>
  </div>
)

const MyBudgets = ({ match }) => (
  <div>
    each budget in budgets
    <li> {budget.name}: {budget.budgetedAmount}: {budget.isActive}</li>
  </div>
)

const CreateAccount = ({ match }) => (
  <div>
    <h3>{match.params.budgetId}</h3>
  </div>
)

const CreateAccounts = ({ match }) => (
  <div>
  {/* <ul>
    <li>
      <Link to={`${match.url}/ravens`}>
        Baltimore Ravens
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/bengals`}>
        Cincinnati Bengals
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/browns`}>
        Cleveland Browns
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/steelers`}>
        Pittsburgh Steelers
      </Link>
    </li>
  </ul> */}
  </div>
)

const EditAccount = ({ match }) => (
  <div>
    <h3>{match.params.budgetId}</h3>
  </div>
)

const EditAccounts = ({ match }) => (
  <div>
  {/* <ul>
    <li>
      <Link to={`${match.url}/texans`}>
        Houston Texans
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/colts`}>
        Indianapolis Colts
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/jaguars`}>
        Jacksonville Jaguars
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/titans`}>
        Tennessee Titans
      </Link>
    </li>
  </ul> */}
  </div>
)

const DeleteAccount = ({ match }) => (
  <div>
    <h3>{match.params.budgetId}</h3>
  </div>
)

const DeleteAccounts = ({ match }) => (
  <div>
  {/* <ul>
    <li>
      <Link to={`${match.url}/broncos`}>
        Denver Broncos
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/chiefs`}>
        Kansas City Chiefs
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/chargers`}>
        Los Angeles Chargers
      </Link>
    </li>
    <li>
      <Link to={`${match.url}/raiders`}>
        Oakland Raiders
      </Link>
    </li>
  </ul> */}
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
    <Route exact path={match.url} render={() => (
      <h3>Please select a budget.</h3>
    )}/>
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
