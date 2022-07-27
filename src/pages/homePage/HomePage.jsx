import React from "react";

//Others

//Components
import Header from "../../components/header/Header";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";

// Style
import { PageWrapper } from "./HomePage.styled";

const HomePage = (props) => {
  return (
    <PageWrapper>
      <Header />
      <Content />
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;
