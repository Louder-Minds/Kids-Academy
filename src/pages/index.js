import React from "react"

import Layout from "../components/Layout"

import ReasonsContainer from "../components/ReasonsContainer"
import CursusContainer from "../components/CursusContainer"
import VideoContainer from "../components/VideoContainer"
import ExplanationContainer from "../components/ExplanationContainer"
import OpeningBanner from "../components/OpeningBanner"
import FlexContainer from "../components/FlexContainer"

const about = () => (
  <Layout>
    <FlexContainer>
      <OpeningBanner />
      <ReasonsContainer />
    </FlexContainer>
    <CursusContainer />
    <hr
      style={{
        height: "2px",
        backgroundColor: "#37375c",
        width: "80%",
        margin: "0 auto",
      }}
    />
    <ExplanationContainer />
    <VideoContainer />
  </Layout>
)

export default about
