import { Switch,Route } from "react-router-dom";


import './App.css';
import ContactList  from "./Components/contactList/ContactList";
import AddEditContact  from "./Components//AddEditContact/AddEditContact";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
        <Home />
        <Switch>
        
          <Route exact path="/" component={ContactList} />
          <Route path="/(addcontact|editcontact)" component={AddEditContact} />
        </Switch>
    </div>
  );
}

export default App;
