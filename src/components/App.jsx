import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteContainer from "./NoteContainer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NoteContainer />
      <Footer />
    </React.Fragment>
  );
}

export default App;