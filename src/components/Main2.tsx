import { AppContainer, Header, Image, Heading, LOGO, Hero, TextBox, TextB,
    Button, SecondContainer, GuideBox, TextM, Youtube, TeamContainer,VideoGuide,
    MemberDisplay, Upper, PFP, Names, WrapTeam } from "../styles/appContainer"

    import logo from "../assets/logo.png"
    import twitter from "../assets/twitter.svg"
    import { motion } from "framer-motion"
    import { Link } from "react-router-dom"

export function Main2(){
    return(
        <SecondContainer>
            <VideoGuide>
            <GuideBox>
              <Heading className='ads' >Here's How it Works :</Heading>
                  <div>
                    <TextM>• Install GmAwoo Extension from Chrome store</TextM>
                    <TextM>• Go to tweet, Select Gm or Gn button, add hashtag and number of NFTs</TextM>
                    <TextM>• Compose tweet, extension populates with selected NFTs</TextM>
                    <TextM>• Share with DogePoundNFT community and boost your collection! </TextM>
                  </div>
              <a href="" target="_blank"><Heading className='download'>Download now and experience GmAwoo Extension.</Heading></a>
            </GuideBox>
            <Youtube><iframe width="450" height="300" src="https://www.youtube.com/embed/p26MRvJjQdo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Youtube>
            </VideoGuide>
            <TeamContainer>
                <Heading className='team'>Meet the GmAwoo Team</Heading>
                <WrapTeam>
                  <MemberDisplay>
                        <Upper>
                          <PFP src="https://pbs.twimg.com/profile_images/1272865548703895553/9wePlRTH_400x400.jpg"/>
                          <Names>
                              <Heading className='member name'>Rilso</Heading>
                              <TextM className='member'>Developer</TextM>
                              <motion.a whileHover={{y: -2}} className='twitter-link' href="https://twitter.com/YeiteRilsosing" target="_blank"><Image className = "twitter2" src={twitter}/><TextM className='member member3'>YeiteRilsosing</TextM></motion.a>
                          </Names>
                        </Upper>
                    </MemberDisplay>

                    <MemberDisplay>
                        <Upper>
                          <PFP src="https://pbs.twimg.com/profile_images/1592636750249295873/XH7Nm_uV_400x400.jpg"/>
                          <Names>
                              <Heading className='member name'>DogePoundNFT</Heading>
                              <TextM className='member'>OG DOGE</TextM>
                              <motion.a whileHover={{y: -2}} className='twitter-link' href="https://twitter.com/TheDogePoundNFT" target="_blank"><Image className = "twitter2" src={twitter}/><TextM className='member member3'>TheDogePoundNFT</TextM></motion.a>
                          </Names>
                        </Upper>
                    </MemberDisplay>

                    <MemberDisplay>
                        <Upper>
                          <PFP src="https://pbs.twimg.com/profile_images/1638137270921494528/6-_N__l5_400x400.jpg"/>
                          <Names>
                              <Heading className='member name'>Sem</Heading>
                              <TextM className='member'>Front-end Developer</TextM>
                              <motion.a whileHover={{y: -2}} className='twitter-link' href="https://twitter.com/Thotsem22" target="_blank"><Image className = "twitter2" src={twitter}/><TextM className='member member3'>Thotsem22</TextM></motion.a>
                          </Names>
                        </Upper>
                    </MemberDisplay>
                </WrapTeam>
            </TeamContainer>
            <Link to="/privacy-policy"><TextM className='member member4'>Privacy Policy</TextM></Link>
        </SecondContainer>
    )
}