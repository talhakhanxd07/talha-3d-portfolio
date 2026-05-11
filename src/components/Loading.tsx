<div className="loading-header">
  <a href="/#" className="loader-title" data-cursor="disable">
    MT
  </a>

  <div className={`loaderGame ${clicked && "loader-out"}`}>
    <div className="loaderGame-container">
      <div className="loaderGame-in">
        {[...Array(27)].map((_, index) => (
          <div className="loaderGame-line" key={index}></div>
        ))}
      </div>
      <div className="loaderGame-ball"></div>
    </div>
  </div>
</div>

<div className="loading-screen">
  <div className="loading-marquee">
    <Marquee>
      <span> Graphic Designer</span>
      <span> UI/UX Designer</span>
      <span> Visual Communicator</span>
      <span> Brand Designer</span>
    </Marquee>
  </div>

  <div
    className={`loading-wrap ${clicked && "loading-clicked"}`}
    onMouseMove={(e) => handleMouseMove(e)}
  >
    <div className="loading-hover"></div>

    <div className={`loading-button ${loaded && "loading-complete"}`}>
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-content-in">
            Loading <span>{percent}%</span>
          </div>
        </div>

        <div className="loading-box"></div>
      </div>

      <div className="loading-content2">
        <span>Welcome</span>
      </div>
    </div>
  </div>
</div>
