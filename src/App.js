import './App.css';
import Header from './components/Header';
import Student_details from './components/Student_details';
import Student_Form from './components/Student_Form';
import { Switch,Route } from 'react-router-dom';
import Edit_Details from './components/Edit_Details';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <div className="web-page">
    <ToastContainer />
    <Switch>
      <Route exact path='/' component={Student_details} />
      <Route exact path="/add" component={Student_Form} />
      <Route exact path="/detail/:id" component={Edit_Details} />
    </Switch>
    </div>
    <div className="footer">
    <Footer />
    </div>
    </>
  );
}

export default App;
