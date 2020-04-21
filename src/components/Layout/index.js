import React from "react"
import "../../global.css"
import { Container } from "./style"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "../Navigation"
import Footer from "../Footer"

import Helmet from "react-helmet"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        href={
          "https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        }
        rel={"stylesheet"}
      />
    </Helmet>
    <Container>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </Container>
  </>
)

export default Layout
