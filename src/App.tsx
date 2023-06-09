import AdminLayout from "component/Layout/AdminLayout";
import NotFound from "component/Routes/NotFound";
import PrivateRoute from "component/Routes/PrivateRoute";
import LoginPage from "features/auth/pages/LoginPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/admin"
        element={<PrivateRoute />}
      >
        <Route
          path="/admin"
          element={<AdminLayout />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;
