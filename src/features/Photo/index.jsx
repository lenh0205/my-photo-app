import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";

Photo.propTypes = {};

function Photo(props) {
  return (
    <div>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="add" element={<AddEditPage />} />
          <Route path=":photoId" element={<AddEditPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Photo;
