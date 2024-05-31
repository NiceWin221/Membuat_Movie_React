import React, { useState } from "react";
import './quick.css'
import bg from './images/bg.png'

function Quick() {
  const [isMoving, setIsMoving] = useState(false)
  const handleCLick = () => {
    setIsMoving(!isMoving)
  }

  const bgStyle = {
    transform: isMoving ? "translateY(-50px)" : "translateY(0)",
    opacity: isMoving ? "1" : "0",
    zIndex: isMoving ? "10" : "-1",
  }

  const [arrow, setArrow] = useState(true);
  const [arrows, setArrows] = useState(true)

  const toggleArrows = () => {
    setArrows(!arrows)
  }

  const toggleArrow = () => {
    setArrow(!arrow)
  }

  const [isCubeVisible, setIsCubeVisible] = useState(true);

  const toggleIcon = () => {
    setIsCubeVisible(!isCubeVisible);
  };

  return (
    <>
      <div onClick={() => { handleCLick(); toggleIcon(); }}>
        {isCubeVisible ? (
          <i className="fa-solid fa-cube cube"></i>
        ) : (
          <i className="fa-solid fa-x X"></i>
        )}
      </div>
      <div className="bg" style={bgStyle}>
        <img src={bg} />
        <i className="fa-solid fa-cube cubes"></i>
        <i className="fa-solid fa-play play"></i>
        <p className="pCube">idlix.in gets a boost from Cube</p>
        <p className="pCubes">Cube is a content exchange and delivery network.</p>
        <i className="fa-solid fa-x x" onClick={() => { handleCLick(); toggleIcon(); }}></i>
        <i className="fa-solid fa-rocket rocket"></i>
        <p className="pRocket">idlix.in is faster with cube</p>
        <p className="pRockets">Cube loads content from people's devices near you<br></br>instead of from slower server.</p>
        <i className="fa-brands fa-instagram instagram"></i>
        <p className="pIns">Cube lets website make money without ads</p>
        <p className="pInss">Just by being here, you help share this site's content<br></br>with other to support it and see fewer ads.</p>
        <i className="fa-solid fa-lock lock"></i>
        <p className="pLock">You're safe and in control</p>
        <p className="pLocks">Cube doesn't impact your data or performance, and<br></br>you can opt out any time.</p>
        <i className="fa-solid fa-lock locks"></i>
        <p className="optout">OPT OUT</p>
        <div className="get" onMouseEnter={toggleArrow} onMouseLeave={toggleArrow}>
          <p>Get Cube for your site
            {arrow ? (<i className="fa-solid fa-arrow-right arrow"></i>) : (<i className="fa-solid fa-arrow-right-long arrow-right"></i>)
            }
          </p>
        </div>
        <div className="learnmore" onMouseEnter={toggleArrows} onMouseLeave={toggleArrows}>
          <p>Learn more
            {arrows ? (<i className="fa-solid fa-arrow-right arrow-more"></i>) : (<i className="fa-solid fa-arrow-right-long arrow-right-more"></i>)
            }
          </p>
        </div>
      </div>

      {/*----------------------------------- Award ------------------------------------*/}

      <div className="award">
        <div className="trending">
          <i className="fa-solid fa-fire"></i>
        </div>
        <div className="hover">
          <p>Trending</p>
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <div className="likes">
          <i className="fa-solid fa-thumbs-up"></i>
        </div>
        <div className="hover2">
          <i className="fa-solid fa-caret-left"></i>
          <p>Recommended</p>
        </div>
        <div className="gift">
          <i className="fa-solid fa-gift"></i>
        </div>
        <div className="hover3">
          <i className="fa-solid fa-caret-left"></i>
          <p align="center">Recent<br />Releases</p>
        </div>
        <div className="trophy">
          <i className="fa-solid fa-trophy"></i>
        </div>
        <div className="hover4">
          <i className="fa-solid fa-caret-left"></i>
          <p align="center" className="pTrophy">IMDB Top</p>
        </div>
        <div className="history">
          <i className="fa-solid fa-clock-rotate-left"></i>
        </div>
        <div className="hover5">
          <i className="fa-solid fa-caret-left"></i>
          <p align="center">Watch<br />History</p>
        </div>
      </div>
    </>
  )
}

export default Quick