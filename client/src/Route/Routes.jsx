import { Routes, Route } from "react-router-dom";
import { Pages } from "../Pages/index";
/* import { ProtectedRoute } from "./ProtectedRoute"; */
/* import Context from "../AuthForm/AuthForm"; */

function AppRoutes() {
  return (
    <Routes>
      {/*       <Route path="/login" element={<SigninRender />} />
      <Route path="/register" element={<SignupRender />} /> */}
      <Route path="/" element={<Pages.Main />} />
      <Route path="/profile" element={<Pages.Profile />} />
      <Route path="*" element={<Pages.NotFound />} />

      {/*       <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
       <Route path="/" element={<Pages.Main />} /> 
      </Route> */}
      {/*       <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/favorites" element={<FavoritesPageRender />} />
      </Route> */}
      {/*       <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/category/:id" element={<CategoryPageRender />} />
      </Route> */}
    </Routes>
  );
}

export default AppRoutes;
