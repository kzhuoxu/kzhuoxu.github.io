import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import React from "react";

function App({ children }) {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="pt-12">
        {children}
      </div>

      {/* Footer */}
      <Footer id="footer" />
    </div>
  );
}

export default App;
