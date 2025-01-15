import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Home from "../pages/Home";
import SignUp from "../pages/Signup";
import { LocationPage } from "../pages/LocationPage";
import { DeletedPetPage } from "../pages/DeletedPetPage";
import { EditDataPage } from "../pages/EditDataPage";
import { EditPassPage } from "../pages/EditPassPage";
import { EditPicPage } from "../pages/EditPicPage";
import { EditReportPage } from "../pages/EditReportPage";
import { FoundPetPage } from "../pages/FoundPetPage";
import { MapPage } from "../pages/MapPage";
import { MyDataPage } from "../pages/MyDataPage";
import { NewReportedPetPage } from "../pages/NewReportedPetPage";
import { NewReportPage } from "../pages/NewReportPage";
import { NoReportedPetsPage } from "../pages/NoReportedPetsPage";
import { ReportedPetsPage } from "../pages/ReportedPetsPage";
import { SelectedPetMapPage } from "../pages/SelectedPetMapPage";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/location",
        element: <LocationPage />,
      },
      {
        path: "/my-data",
        element: <MyDataPage />,
      },
      {
        path: "/edit-pic",
        element: <EditPicPage />,
      },
      {
        path: "/edit-data",
        element: <EditDataPage />,
      },
      {
        path: "/edit-pass",
        element: <EditPassPage />,
      },
      {
        path: "/reported-pets",
        element: <ReportedPetsPage />,
      },
      {
        path: "/no-reported-pets",
        element: <NoReportedPetsPage />,
      },
      {
        path: "/new-report",
        element: <NewReportPage />,
      },
      {
        path: "/edit-report",
        element: <EditReportPage />,
      },
      {
        path: "/new-reported-pet",
        element: <NewReportedPetPage />,
      },
      {
        path: "/found-pet",
        element: <FoundPetPage />,
      },
      {
        path: "/deleted-pet",
        element: <DeletedPetPage />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/selected-pet-map",
        element: <SelectedPetMapPage />,
      },
    ],
  },
]);
