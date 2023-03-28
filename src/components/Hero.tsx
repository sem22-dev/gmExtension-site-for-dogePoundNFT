import { Hero, TextBox, TextB, Heading, Button } from "../styles/appContainer"
import { motion } from "framer-motion"
import dogeNFT from "../assets/dogeNFT.png"
import { Main2 } from './Main2'
import React from "react"


export function Main(){
    return(
        <React.Fragment>
            <Hero>
                <TextBox>
                <Heading className='bigger'>Introducing the DogePoundNFT GmAwoo Extension for Twitter!</Heading>
                <TextB>Upgrade your Twitter presence with GmAwoo Extension for DogePoundNFT community. Effortlessly showcase your prized collection and join the conversation with other passionate fans.</TextB>
                <a href="https://chrome.google.com/webstore/detail/gm-awoo/pndmpldablgonafmbhokmgbebckjekkn" target="_blank"><Button whileHover={{y: -6}}>Install it on your Google Chrome</Button></a>
                </TextBox>
                <motion.img whileHover={{scale: 0.98}} className="image" src={dogeNFT}/>
            </Hero>
        <Main2 />
        </React.Fragment>
    )
}