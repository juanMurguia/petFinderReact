import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Routes } from "./routes";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app"));
root.render(
  <Suspense fallback={null}>
    <RecoilRoot>
      <RouterProvider router={Routes}></RouterProvider>
    </RecoilRoot>
  </Suspense>
);
