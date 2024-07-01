import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const QuestionPage = lazy(() => import("./pages/QuestionPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const ResultsPage = lazy(() => import("./pages/ResultsPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="home" index element={<Homepage />} />
          <Route path="question/:id" element={<QuestionPage />} />
          <Route path="/results" element={<ResultsPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
