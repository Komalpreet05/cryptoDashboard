import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
import Transaction from './pages/Transaction/Transaction';
import Support from './pages/Support/Support';

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Dashboard />,
  //   },
  //   {
  //     path: "/transactions",
  //     element: <Transaction />,
  //   },
  //   {
  //     path: "/support",
  //     element: <Support />,
  //   },
  // ]);
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <Dashboard></Dashboard> */}

      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/transactions' element={<Transaction />}></Route>
        <Route path='/support' element={<Support />}></Route>
      </Routes>
    </>
  )
}

export default App
