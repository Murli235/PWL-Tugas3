import "./App.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./pages/Layout";
import Beranda from "./pages/Beranda";
import Kontak from "./pages/Kontak";
import Tentang from "./pages/Tentang";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />,
          <Route path="/kontak" element={<Kontak />} />,
          <Route path="/tentang" element={<Tentang />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router}/>
  
}

export default App;
