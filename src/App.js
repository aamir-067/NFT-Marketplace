import { Nav } from './components/index';
import { Outlet } from 'react-router-dom';
import { SimpleDialogContainer } from "react-simple-dialogs";
function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <SimpleDialogContainer />
    </div>
  );
}

export default App;
