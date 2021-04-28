import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Create from './pages/Create'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Blogs />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;