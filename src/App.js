import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import AdminDashboard ,{ProductPage1,CreateUser1,Users1} from './AdminDash';
import { UsersProvider } from './context/Users/Users';
import CreateUser from './context/Users/CreateUser';
function App() {
  return (
    <>
    <BrowserRouter>    
           <UsersProvider>
              <Switch>
                <Route path='/dashboard' exact component={AdminDashboard} />
                <Route path='/Formik-users' exact component={Users1} />
                <Route path='/Formik-CreateUser' exact component={CreateUser} />
                <Route path='/Formik-editUser/:uid' exact component={CreateUser} />
                <Route path='/products' exact component ={ProductPage1} />
                <Route path="/" exact>
                  <Redirect to='/dashboard' />
                </Route>
              </Switch>
            </UsersProvider>          
          <footer className="sticky-footer bg-white">            
                <span>Copyright &copy; React 2021</span>             
          </footer>       
    </BrowserRouter> 
    </>
  );
}

export default App;


