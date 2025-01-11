import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "@/pages/home";
import Layout from "@/components/layout/index.";
import Spinner from "@/components/spinner";

const Character = lazy(() => import("@/pages/character"));
const Favorites = lazy(() => import("@/pages/favorites"));
const NotFound = lazy(() => import("@/pages/notFound"));

const MyRouter = () => {
  return (
    <Suspense fallback={<Spinner size={250} />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MyRouter;
