import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Footer from '../components/Footer'

const Home = styled.div`
  h1 { 
    text-align: center;
    margin: 0;
    line-height: 60px;
    color: #393B40;
    font-weight: 500;
    font-size: 55px;
    text-transform: capitalize;
  }
  .content {
    .info-container {
      padding: 84px 0;
      height: 709px;
      display: flex;
      align-items: center;
      .y-art {
        position: absolute;
        width: 40%;
        height: 709px;
        background: #EBA600 0% 0% no-repeat padding-box;
      }
      .yellow-bg {
        width: 100%;
        height: 320px;
        box-sizing: border-box;
        padding-left: 50%;
        padding-top: 30px;
        padding-bottom: 47px;
        background: #F7F2E8 0% 0% no-repeat padding-box;
        h2 {
          font-size: 42px;
          color: #393B40;
          line-height: 60px;
        }
        p {
          font-size: 22px;
          line-height: 28px;
          max-width: 674px;
          color:#707070;
          margin: 24px 0;
        }
      }
    }
  }
`
const Button = styled.button`
  width: 320px;
  height: 73px;
  background: #EBA600 0% 0% no-repeat padding-box;
  box-shadow: 2px 3px 6px #00000029;
  border-radius: 16px;
  border: none;
  color: #FFFFFF;
  text-transform: capitalize;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  .img {
    width: 70px;
    height: 70px
  }
`

const HomePage = () => {
  return (
    <Home>
      <div className="content">
        <h1>Explore and discover new Juices</h1>
        <div className="info-container">
          <div className="y-art"></div>
          <div className="yellow-bg">
            <h2>Find the Juice you’ll love.</h2>
            <p>We combine our beer expertise with your taste preference to suggest the best juice for you.</p>
            <Link to="/questionnaire">
              <Button>
                <span>Get Started</span> <img alt="" src={require("../assets/arrow_right.svg")}/>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </Home>
  );
}

export default HomePage;