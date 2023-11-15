import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { NavBar } from "./components/layout/NavBar";
import { HomePage } from "./pages";
import { ChatPage } from "./pages/chat";

function App() {
  return (
    <>
      <Helmet>
        <title>Wardlin</title>
        <meta name="description" content="Wardlin task" />
      </Helmet>
      <NavBar />
      <main className="max-w-6xl mx-auto ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
