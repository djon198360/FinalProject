/* import { Routes, Route, } from "react-router-dom"; */
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pages } from "../Pages/index";
import { ProtectedRoute } from "./ProtectedRoute";
/* import Context from "../AuthForm/AuthForm"; */

function AppRoutes() {
  const user = useSelector((state) => state.SliceAuth.isAuth);
  return (
    <Routes>
      <Route path="/" element={<Pages.Main />} />
      <Route path="*" element={<Pages.NotFound />} />
      <Route path="/profile/:id" element={<Pages.SellerProfile />} />
      <Route path="/article/:id" element={<Pages.MyArticle />} />
      <Route path="/my-article/" element={<Pages.MyArticle />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/profile/" element={<Pages.Profile />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
