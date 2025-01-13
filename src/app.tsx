import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from './router'
function App() {
  return (
    <div className="app">
      <RouterView />
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
