import React from 'react';

function Overview() {

  return (
      <main>
        <h2>VayuVani: A Self-Sufficient LoRa Groundstation</h2>

        <div className="card-container">
          <div className="card">
            <div className="image-container">
              <img
                  src={`/vv-hla-v2-notransparent.png`}
                  alt={`VayuVani High-Level Architecture`}
                  width={1000}
                  className="centered-image"
              />
            </div>

            <p>
              On the <a href={"/"}>About</a> page, I outlined how VayuVani
              diverges from TinyGS in both mission and objectives.
              VayuVani is designed to operate the ground station autonomously,
              free from any 'external' impetus—where 'external' refers to
              anything outside your network. However, due to resource
              limitations, we still require some internal network
              stimuli—external only to the ESP32/LoRa control unit—to facilitate
              radio tuning, which is orchestrated through the Groundstation
              Server (GSS).
            </p>

            <p>
              VayuVani's architecture is structured around three primary
              components: the Groundstation (GS), the Groundstation Server
              (GSS), and the Dashboard (D). For simplicity, I'll call frontend
              components such as the Tracker and Packet Dashboard are
              under the name 'Dashboard.'
            </p>

            <p>
              In essence, the GS receives radio tuning commands—frequency, LoRa
              parameters like <i>Spreading Factor, Sync Word</i>, and
              others—from the
              GSS. Once tuned, the GS transmits the received packets to the GSS,
              which acts purely as a conduit. The Dashboard, registered with the
              GSS, acquires these packets in real time. As soon as the GS
              captures the data, it is transmitted almost instantaneously to the
              Dashboard, where a streamlined processing pipeline decodes the
              packets before they are displayed.
            </p>

            <h3>Modular Design by Choice</h3>
            <p>
              VayuVani was purposefully designed with a modular architecture,
              where each component—Groundstation (GS), Groundstation Server
              (GSS), and Dashboard (D)—operates independently and interacts only
              through well-defined REST-like APIs. This modularity is a
              deliberate design choice aimed at maximizing flexibility and
              scalability, allowing each element of the system to function
              autonomously while remaining interconnected.
            </p>
            <p>
              By decoupling the system’s components, VayuVani ensures that
              updates, scaling, or even the replacement of individual parts can
              occur without impacting the entire system. This modularity becomes
              particularly advantageous as the system evolves. While the
              system’s modular nature might initially seem
              over-engineered, it offers significant benefits. The
              architecture’s flexibility ensures that the system can
              adapt to changes, allowing individual
              modules to be updated or replaced as needed. This approach
              ensures that VayuVani is capable to accommodate future
              innovations and growth.
            </p>

            <p>
              For example, this modular design allows for the following
              constellation:
            </p>
            <div className="image-container">
              <img
                  src={`/vv-const.png`}
                  alt={`VayuVani High-Level Architecture`}
                  width={800}
                  className="centered-image"
              />
            </div>

            {/*<h4>Groundstation (GS)</h4>*/}
            {/*<p>*/}
            {/*  // To be elaborated.*/}
            {/*</p>*/}

            {/*<h4>Groundstation Server (GSS)</h4>*/}
            {/*<p>*/}
            {/*  // To be elaborated.*/}
            {/*</p>*/}

            {/*<h4>Dashboard (D) and the VayuVani App</h4>*/}
            {/*<p>*/}
            {/*  // To be elaborated.*/}
            {/*</p>*/}

            {/*<h4>Remote Tuning and Future Capabilities</h4>*/}
            {/*<p>*/}
            {/*  VayuVani supports the integration and control of remote ground*/}
            {/*  stations. This capability enables multiple stations to*/}
            {/*  collaborate, enhancing coverage and communication abilities:*/}
            {/*</p>*/}

            {/*<ul>*/}
            {/*  <li><b>Remote Groundstation Server:</b> Remote ground stations can*/}
            {/*    be integrated into the VayuVani system, allowing remote tuning*/}
            {/*    and radio control across multiple locations.*/}
            {/*  </li>*/}
            {/*</ul>*/}

            {/*<p>*/}
            {/*  These features are critical to increasing the flexibility and*/}
            {/*  scalability of the system, enabling users to manage multiple*/}
            {/*  ground stations from a centralized interface.*/}
            {/*</p>*/}

          </div>
        </div>
      </main>
  );
}

export default Overview;
