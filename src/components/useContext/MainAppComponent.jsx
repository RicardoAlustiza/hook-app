import {  Routes, Route } from "react-router-dom";
import { NavBarComponent } from "./NavBarComponent";
import { HomePageComponent } from "./HomePageComponent";
import { AboutPageComponent } from "./AboutPageComponent";
import { LogInPageComponent } from "./LogInPageComponent";
import { UserProvider } from "./context/UserProvider";

export const MainAppComponent = () => {

  return (
    <UserProvider>
      <NavBarComponent />
      <hr/>

      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="about" element={<AboutPageComponent />} />
        <Route path="login" element={<LogInPageComponent />} />
      </Routes>
    </UserProvider>
  )
}
