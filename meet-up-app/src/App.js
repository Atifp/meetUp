import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouriteMeetupsPage from "./pages/Favourite";

function App() {
  // The path used in the Route component is what is after the domain, so what is after http://localhost:3000
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavouriteMeetupsPage />} />
      </Routes>
    </div>
  );
}

export default App;
