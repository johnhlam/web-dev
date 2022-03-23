import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import HelloWorld from "./components/hello-world";
import Labs from './components/labs';
import Tuiter from './components/tuiter';
import HomeScreen from './components/tuiter/HomeScreen';
import ExploreComponent from './components/tuiter/ExploreScreen/ExploreComponent';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/hello" exact={true} element={<HelloWorld />} />
          <Route path="/" exact={true} element={<Labs />} />
          <Route path="/tuiter" exact={true} element={<Tuiter />}>
            <Route index
              element={<HomeScreen />} />
            <Route path="explore"
              element={<ExploreComponent />} />
            {/*<Route path="notifications"
              element={<NotificationScreen />} /> TODO: What am I supposed to do with these routes? */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
