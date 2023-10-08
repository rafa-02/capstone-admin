import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedWrapper from '../ProtectedWrapper';
import SideMenu from './SideMenu';
import Adminsidemenu from './Adminsidemenu';
import Layout from './Layout';
import AdminLayout from './AdminLayout';

function MainOutlet() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedWrapper>
            <Layout /> {/* Render Layout1 for this route */}
          </ProtectedWrapper>
        }
      />
      <Route
        path="/admindashboard"
        element={
          <ProtectedWrapper>
            <AdminLayout /> {/* Render Layout2 for this nested route */}
          </ProtectedWrapper>
        }
      />
    </Routes>
  );
}

export default MainOutlet;