import React, { useEffect, useState } from 'react';

function About() {
  const [currentImage, setCurrentImage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const totalImages = 7;
  const autoSlideInterval = 2000;

  const nextImage = () => {
    setCurrentImage((prev) => (prev % totalImages) + 1);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 1 ? totalImages : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(nextImage, autoSlideInterval);
      return () => clearInterval(intervalId);
    }
  }, [isPaused, nextImage, autoSlideInterval]);

  return (
      <main>
        <h2>About VayuVani</h2>

        <div
            className="image-showcase"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          <button onClick={() => {
            prevImage();
            setIsPaused(true);
          }} className="showcase-nav prev">&lt;</button>
          <img
              src={`/showcase/vv${currentImage}.png`}
              alt={`VayuVani showcase ${currentImage}`}
              className="showcase-image"
          />
          <button onClick={() => {
            nextImage();
            setIsPaused(true);
          }} className="showcase-nav next">&gt;</button>
          <div className="image-indicators">
            {[...Array(totalImages)].map((_, index) => (
                <span
                    key={index}
                    className={`indicator ${index + 1 === currentImage
                        ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentImage(index + 1);
                      setIsPaused(true);
                    }}
                />
            ))}
          </div>
        </div>

        <div className="join-button-container">
          <a href="https://discord.gg/Gr87RuqsEX" target="_blank"
             rel="noopener noreferrer" className="join-button">
            <svg className="discord-icon" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 640 512">
              <path fill="currentColor"
                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
            </svg>
            Become a Station Operator
          </a>
        </div>

      <div className="card-container">
        <div className="card">
          <h3>What is VayuVani?</h3>
          <p>
            <b>VayuVani</b> (/ˈʋɑːjuː ˈʋɑːɳiː/ spelled as Vaayu-Vaaani)
            combines two Sanskrit words: "<b>Vaayu</b>" (वायु)
            meaning <i>Air</i>, and "<b>Vaani</b>" (वाणी) meaning <i>Voice</i> or <i>Music</i>.
            This name embodies the mission: to give voice to signals traveling
            through the air, much like how LoRa (Long Range) technology
            enables long-distance communication.
          </p>
          <p>
            Currently in its early stages of development, VayuVani aims to
            empowering station operators to manage and receive satellite
            packets completely
            offline, ensuring privacy and independence.
          </p>
        </div>

        <div className="card">
          <h3>The Mission</h3>
          <ul>
            <li>Enable 100% independent and private operation of LoRa ground
              stations
            </li>
            <li>Make LoRa technology accessible to everyone</li>
            <li>Build a thriving, collaborative community</li>
            <li>Ensure complete offline functionality</li>
            <li>Bring connectivity to underserved areas</li>
          </ul>
          <p>
           One of the important goals of the project is providing tools for self-managed, offline satellite communication while nurturing a supportive community of enthusiasts.
          </p>
        </div>

        <div className="card">
          <h3>How is VayuVani different from TinyGS?
          </h3>
          <p>
            <a href="https://tinygs.com/"target="_blank" rel="noopener noreferrer">TinyGS</a> is an excellent project that empowers educators, hobbyists, and enthusiasts to create and operate their own ground stations.
            It provides an accessible platform, especially for those new to LoRa-based satellite communication, lowering the entry barriers and fostering a thriving community of learners and contributors. </p>

          <p> While TinyGS offers a fantastic starting point(and still is) for many, VayuVani presents a unique, complementary approach, designed for those who seek more autonomy and flexibility in their satellite communication experience. With VayuVani, you are more actively involved in the process, offering deeper engagement and control.
            Key differences include: </p>
           <ul>
            <li><b>Autonomy:</b> Full control over your station's operations, allowing you to manage every aspect independently.</li>
            <li><b>Privacy:</b> Operate without relying on external servers, ensuring a higher degree of data privacy and security.</li>
            <li><b>Flexibility:</b> Freedom to manually select specific satellites to tune into, or take advantage of VayuVani's auto-tune feature for ease of use.</li>
            <li><b>Simplicity:</b> Designed for all skill levels with a focus on simple setup and smooth operation, making it accessible to both beginners and experienced operators alike.</li>
            </ul>
            <p> VayuVani isn't meant to replace TinyGS, but rather to provide an alternative for users who prefer a more hands-on approach and greater independence in their satellite reception operations.
              By being actively involved in the tuning and management of your station, you gain a more personalized and customizable experience.
            </p>
        </div>

        <div className="card">
          <h3>A short overview</h3>
          <p>
            VayuVani aims for :
          </p>
          <ul>
            <li>Easy deployment and management of LoRa ground stations</li>
            <li>Internet-independent operation for true autonomy</li>
            <li>Tools to capture, decode, and analyze LoRa signals</li>
            <li>A supportive community to share knowledge and experiences</li>
          </ul>
          <p>
            Read more <a href="/overview">here</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
