import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPageFound from "./pages/NoPageFound";
import AuthContext from "./AuthContext";
import ProtectedWrapper from "./ProtectedWrapper";
import { useEffect, useState } from "react";
import AdminLayout from "./components/AdminLayout";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Subjects from "./pages/Subjects";
import UserAccount from "./pages/UserAccount";
import Logs from "./components/Logs";
import Report from "./pages/Report";
import Admindashboard from "./pages/Admindashboard";
import Settings from "./pages/Settings";

const App = () => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  let myLoginUser = JSON.parse(localStorage.getItem("user"));
  // console.log("USER: ",user)

  useEffect(() => {
    if (myLoginUser) {
      setUser(myLoginUser._id);
      setLoader(false);
      // console.log("inside effect", myLoginUser)
    } else {
      setUser("");
      setLoader(false);
    }
  }, [myLoginUser]);

  const signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  let value = { user, signin, signout };

  if (loader)
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>LOADING...</h1>
      </div>
    );

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedWrapper>
                <AdminLayout />
              </ProtectedWrapper>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admindashboard" element={<Admindashboard />} />
            <Route path="/adminlayout" element={<AdminLayout />} />

            <Route path="/teacher" element={<Teacher />} />
            <Route path="/user-account" element={<UserAccount />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/student" element={<Student />} />

            <Route path="/logs" element={<Logs />} />

            <Route path="/report" element={<Report />} />
            <Route path="/setting" element={<Settings />} />

          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
