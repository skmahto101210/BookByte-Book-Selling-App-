import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.component";
import MyFooter from "./components/MyFooter.component";
import BookDataProvider from "./store/BookData.store";

function App() {
  return (
    <BookDataProvider>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </BookDataProvider>
  );
}

export default App;
