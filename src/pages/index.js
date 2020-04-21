import React from "react"

import Layout from "../components/Layout"

import ReasonsContainer from "../components/ReasonsContainer"
import CursusContainer from "../components/CursusContainer"
import VideoContainer from "../components/VideoContainer"
import ExplanationContainer from "../components/ExplanationContainer"
import OpeningBanner from "../components/OpeningBanner"
import FlexContainer from "../components/FlexContainer"

const index = () => (
  <Layout>
    <FlexContainer>
      <OpeningBanner />
      <ReasonsContainer />
    </FlexContainer>
    <CursusContainer />
    <ExplanationContainer />
    <VideoContainer />
  </Layout>
)

export default index
