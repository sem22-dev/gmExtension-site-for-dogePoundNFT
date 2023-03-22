import styled from "styled-components";
import { motion } from "framer-motion"

const AppContainer = styled.div`
    background-color: #402E32;
`
const Header = styled.div`
    height: 80px;
    padding: 10px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 8px 12px rgba(255, 255, 255, 0.2);
    @media (min-width: 360px) and (max-width: 820px)  {
            padding: 5px 20px;
            height: 60px;
        }
        @media (max-width: 359px) {
            padding: 5px 20px;;
}
`
const Image = styled.img`
    width: 70px;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    &.twitter{
    width: 40px;
}
    &.twitter2{
        width: 20px;
    }
    @media (min-width: 360px) and (max-width: 820px)  {
            width: 50px;
        }
`
const Heading = styled(motion.h1)`
    letter-spacing: 3px;
    color: #CEA192;

    &.logo{
        transform: rotate(-1.7deg);
        @media (min-width: 360px) and (max-width: 820px)  {
            font-size: 20px;
        }
        @media (max-width: 359px) {
            font-size: 20px;
        }
}
    &.bigger{
        font-size: 40px;
        color: #402E32;
        /* -webkit-text-stroke: 1px #202C40; */
        font-weight: 700;
        letter-spacing: 0px;
        @media (min-width: 360px) and (max-width: 820px)  {
            font-size: 30px;
        }
    }
    &.ads{
        color: #fff;
        font-size: 25px;
        letter-spacing: 1px;
        @media (min-width: 360px) and (max-width: 820px)  {
            font-size: 20px;
        }
    }
    &.download{
        color: #fff;
        font-size: 23px;
        letter-spacing: 1px;
        &:hover{
            text-decoration: underline;
        }
        @media (min-width: 360px) and (max-width: 820px)  {
            font-size: 20px;
        }
    }
    &.team{
        display: flex;
        justify-content: center;
        padding: 0px;
        color: #fff;
        letter-spacing: 1px;
        font-size: 20px;
    }
    &.member{
            line-height: 24px;
            font-size: 20px;
        }
    &.name{
            letter-spacing:1px;
        }
    &.policy{
        color: #402E32;
        letter-spacing: 1px;
        font-size: 25px;
    }
    &.border{
        border-left: 5px solid;
        padding-left: 10px;
    }
`
const LOGO = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    @media (min-width: 360px) and (max-width: 820px)  {
        gap: 7px;
    }

`

const Hero = styled.div`
    height: 100vh;
    background-color: #FFBE5C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 150px;
    gap: 10px;
    /* Small screens */
@media (max-width: 359px) {
  padding: 40px 20px 0px 20px;
  flex-direction: column;
  height: fit-content;
}

/* Medium screens */
@media (min-width: 360px) and (max-width: 767px) {
  padding: 40px 20px 10px 20px;
  flex-direction: column;
  height: fit-content;
}

/* Large screens */
@media (min-width: 768px) and (max-width: 1024px) {
  padding: 10px 30px;
  height: fit-content;
}
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const TextB = styled.h2`
    font-weight: 500;
    color: #402E32;
    line-height: 32px;
    @media (min-width: 360px) and (max-width: 812px)  {
            font-size: 20px;
        }
`
const Button = styled(motion.button)`
    width: 350px;
    height: 50px;
    border: none;
    padding: 10px 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #402E32;
    background-color: #FFC1B6;
    cursor: pointer;
    font-size: 20px;
    border-radius: 8px;
    &:hover {
    background-color: #FFD1C6;
  }
  /* @media (min-width: 280px) and (max-width : 653px) {
            width: 200px;
            height: 80px;
        } */
`
const SecondContainer = styled.div`
    height: fit-content;
    border: none;
    background-color: inherit;
    padding: 56px 100px 0px 150px;

    @media (min-width: 280px) and (max-width: 653px)  {
        padding: 50px 20px 0px 20px;
        }

    @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {
    padding: 56px 0px 0px 30px;
    height: unset;
}
@media (min-width: 360px) and (max-width: 812px)  {
            padding: 50px 20px 0px 20px;
        }
`
const GuideBox = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    @media (min-width: 360px) and (max-width: 812px)  {
            gap:8px
        }
`
const TextM = styled.p`
        color: #CEA192;
        font-size: 20px;
        line-height: 35px;
        &.member{
            line-height: 24px;
            font-size: 16px;
        }
        &.member2{
            line-height: 20px;
            /* border: 1px solid black; */
            padding: 0px 0px 5px 5px;
        }
        &.member3{
            color: #fff;
        }
        &.member4{
            display: flex;
            justify-content: center;
            text-decoration: underline;
            padding: 30px 0px;
            &:hover{
                color: #fff;
            }
        }
        &.policy{
            color: #402E32;
            line-height: 25px;
            letter-spacing: 0px;
            font-size: 17px;
        }
        @media (min-width: 360px) and (max-width: 812px) {
            font-size: 15px;
            line-height: 28px;
        }
`
const Youtube = styled.div`
        iframe
{ @media (min-width: 360px) and (max-width: 812px) {
           width: 300px;
           height: 200px;
        }
    /* @media (min-width: 280px) and (max-width : 653px) {
            width: 200px;
           height: 100px;
        } */

        @media (min-width: 811px) and (max-width: 1078px) {
            width: 300px;
           height: 200px;
      }
    }

`
const TeamContainer = styled.div`
    margin-top: 150px;
    margin-bottom: 30px;
    @media (min-width: 360px) and (max-width: 812px)  {
            margin-top: 80px;
            margin-bottom: 0px;
        }
`
const VideoGuide = styled.div`
    display: flex;
    gap: 90px;
    margin-bottom: 56px;

    @media (min-width: 280px) and (max-width: 653px)  {
            flex-direction: column;
        }

    @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px) {
    flex-direction: column;
    gap: 50px;
    align-items: center;
}
@media (min-width: 360px) and (max-width: 812px)  {
            flex-direction: column;
            gap: 30px;
        }
`
const MemberDisplay = styled.div`
  width: 280px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0px;
  @media (min-width: 360px) and (max-width: 812px)  {
            gap: 0px;

        }
`
const Upper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px 5px 20px;
`
const PFP = styled.img`
  width: 60px;
  border-radius: 50%;
`
const Names = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`
const WrapTeam = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 60px;
    margin-top: 30px;

    @media (min-width: 280px) and (max-width : 653px) {
            flex-direction: column;
            gap: 0px;
        }

    @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {
    flex-direction: column;
    gap: 0px;
    align-items: center;
}
@media (min-width: 360px) and (max-width: 812px)  {
            flex-direction: column;
            gap: 0px;
        }
`
const PolicySection = styled.div`
    background-color: #D2925A;
    padding: 50px 70px 50px 70px;
    @media (min-width: 360px) and (max-width: 812px)  {
        padding: 50px 30px;
        }
`
const PolicyText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`
const PolicyHeading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export { AppContainer, Header, Image, Heading, LOGO, Hero, TextBox, TextB,
    Button, SecondContainer, GuideBox, TextM, Youtube,
    TeamContainer, VideoGuide, MemberDisplay, Upper, PFP, Names, WrapTeam, PolicySection, PolicyText, PolicyHeading }