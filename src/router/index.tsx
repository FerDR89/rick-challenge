import { Route, Routes } from "react-router";
import Character from "@/pages/character";
import Favorites from "@/pages/favorites";
import Home from "@/pages/home";
import NotFound from "@/pages/notFound";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRouter;
