import styled from "styled-components";
import { motion } from "framer-motion"

const AppContainer = styled.div`
    height: 100vh;
    background-color: #402E32;
`
const Header = styled.div`
    height: 80px;
    padding: 10px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 8px 12px rgba(255, 255, 255, 0.2);
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
`
const Heading = styled(motion.h1)`
    letter-spacing: 3px;
    color: #CEA192;
    &.logo{
        transform: rotate(-3deg);
    }
    &.bigger{
        font-size: 40px;
        color: #402E32;
        /* -webkit-text-stroke: 1px #202C40; */
        font-weight: 700;
        letter-spacing: 0px;
    }
    &.ads{
        color: #fff;
        font-size: 25px;
        letter-spacing: 1px;
    }
    &.download{
        color: #fff;
        font-size: 23px;
        letter-spacing: 1px;
        &:hover{
            text-decoration: underline;
        }
    }
    &.team{
        display: flex;
        justify-content: center;
        padding: 0px;
        color: #fff;
        letter-spacing: 1px;
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
`

const Hero = styled.div`
    height: 87vh;
    background-color: #FFBE5C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 150px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const TextB = styled.h2`
    font-weight: 500;
    color: #402E32;
    line-height: 32px;
`
const Button = styled(motion.button)`
    width: 150px;
    height: 40px;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #402E32;
    background-color: #FFC1B6;
    cursor: pointer;
    font-size: 20px;
    border-radius: 8px;
    &:hover {
    background-color: #FFD1C6;
  }
`
const AdvertiseContainer = styled.div`
    height: 120vh;
    border: none;
    background-color: inherit;
    padding: 56px 100px 0px 150px;

`
const GuideBox = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px
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
`
const Youtube = styled.div`
    width: 50px;
    height: auto;
    padding-top: 15px;
`
const TeamContainer = styled.div`
    /* border: 1px solid red; */
    margin-top: 150px;
    margin-bottom: 30px;
`
const VideoGuide = styled.div`
    display: flex;
    gap: 90px;
    margin-bottom: 56px;
`
const MemberDisplay = styled.div`
  /* border: 1px solid red; */
  width: 280px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
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
    margin-top: 40px;
`
const PolicySection = styled.div`
    background-color: #D2925A;
    padding: 50px 70px 50px 70px;
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
    Button, AdvertiseContainer, GuideBox, TextM, Youtube,
    TeamContainer, VideoGuide, MemberDisplay, Upper, PFP, Names, WrapTeam, PolicySection, PolicyText, PolicyHeading }