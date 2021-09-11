// import SignUp from "./components/SignUp/SignUp";
import SignIn from './components/SignIn/SignIn';
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
function App() {
  return (
   <BrowserRouter>
     <Route exact path="/">
       <SignUp />
     </Route>
     <Route path="/signIn">
       <SignIn />
     </Route>
   </BrowserRouter>
  );
}

export default App;
