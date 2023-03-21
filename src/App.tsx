import { motion } from 'framer-motion'
import React from 'react'
import { AppContainer, Header, Image, Heading, LOGO } from "./styles/appContainer"
import logo from "./assets/logo.png"
import twitter from "./assets/twitter.svg"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import dogeNFT2 from "./assets/dogeNFT2.png"


//components
import { Main } from "./components/Hero"
import { PrivacyPolicy } from "./components/privacyPolicy"

function App() {

  return(
    <BrowserRouter>
      <AppContainer>
        <Header>
          <motion.a href="/" whileHover={{ scale: 0.97 }}>
            <LOGO>
              <Image src={dogeNFT2} />
              <Heading className="logo">GmAwoo</Heading>
            </LOGO>
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9 }}
            href="#"
            target="_blank"
          >
            <Image className="twitter" src={twitter} />
          </motion.a>
        </Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}
export default App;
