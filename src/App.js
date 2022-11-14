import './App.css';
import { RouterProvider, Route } from "react-router-dom";
import { router } from './routes/Routes';


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
