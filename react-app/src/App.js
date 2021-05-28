import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ProjectForm from "./components/forms/ProjectForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LandingPage from "./components/LandingPage";
import ProjectPage from "./components/ProjectPage";
import { authenticate } from "./store/session";
import SearchPage from "./components/SearchPage";
import UpdateProjectForm from "./components/forms/UpdateProjectForm";
import Footer from "./components/Footer";

function App() {
  const user = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <LandingPage type="home" />
        </Route>
        <Route path="/categories/:id">
          <LandingPage type="category" />
        </Route>
        <Route path="/regions/:id">
          <LandingPage type="region" />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm user={user} />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/create-project" exact={true}>
          <ProjectForm />
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route path="/projects/:projectId/update">
          <UpdateProjectForm />
        </Route>
        <Route path="/projects/:projectId">
          <ProjectPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
