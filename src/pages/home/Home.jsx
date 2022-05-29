import React from "react";
import Marquee from "react-fast-marquee";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";

const Home = ({ type }) => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <div className="her">
          <div className="hero">
            <div
              className="hero-image"
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src="https://karafuru.io/_next/static/images/bg-main-cover-efff783742a3512c2a40db074b6971e0.jpg"
                alt="hero"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="hero-2">
          <div className="marque">
            <Marquee className="marque-slide">
              <h1>*bros abeg run help my hustle* {" "}</h1>
              <h1>*if him tuk say he deh he dey now* {" "}</h1>
              <h1>*echoke for this side ooh anything for your boy* {" "}</h1>
            </Marquee>
          </div>
          <img
            className="hero-2-img"
            src="https://karafuru.io/_next/static/images/logo-9a30e7dd69ec05c1b92f720e5bd185c6.png"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10rem",
            }}
          >
            <div className="hero-text">
              <div className="hero-text-wrap">
                <p>
                  Leave the drab reality and enter the world of Karafuru. It’s a
                  magical space where colors reign supreme and everyone just
                  wants to have fun. Give it a spin and see which one of our
                  personas you get
                </p>
                <p>
                  These personas are your ticket into the playground with the
                  coolest crew in town. More NFTs to drop. More mediums to come.
                  It is a brave new digital world. Come over and play.
                </p>
              </div>
              <div className="hero-text-img">
                <img
                  src="https://karafuru.io/_next/static/images/btn-roadmap-5eb8bb9cc0d00f77fe50b51a4959ced4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hero-video">
            <div className="hero-video-wrapper">
              <div className="hero-video-wrap-img">
                <img
                  src="https://res.cloudinary.com/dxjprordi/image/upload/v1653835533/vidoe-arrow_rr6aeo.png"
                  alt=""
                />
              </div>
              <div className="hero-video-wrap-video">
                <video
                  autoPlay={false}
                  progress
                  controls
                  src="https://karafuru.io/_next/static/videos/trailer-785da9ad70b2cd7b24ea2a6407b08618.mp4"
                  height=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
