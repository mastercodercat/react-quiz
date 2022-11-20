import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";

import { RootState } from "store/store";
import { useAppSelector } from "store/hooks";

import Loader from "components/Loader";
import ErrorBoundary from "components/ErrorBoundary";

import Routes from "Routes";

import "Vendor.ts";
const App = () => {
  const loading = useAppSelector((state: RootState) => state.quiz.loading);

  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <HelmetProvider>
            <ErrorBoundary>{loading ? <Loader /> : <Routes />}</ErrorBoundary>
          </HelmetProvider>
        </BrowserRouter>
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default App;
