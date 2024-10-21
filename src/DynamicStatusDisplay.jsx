import React from 'react';

const DynamicStatusDisplay = ({
  gsIp = '192.168.0.108',
  status = 'RECEIVING',
  port = '5088',
  gssIp = '192.168.0.190',
  line1 = 'Reconfigure success',
  line2 = 'Radio @ 436.28',
  showInputs = false,
  onInputChange = () => {},
  maxWidth = '100%',
  showAnnotations = false
}) => {
  const handleInputChange = (field) => (e) => {
    onInputChange(field, e.target.value);
  };
  const Annotation = ({ number, text, color = "#00ffff" }) => (
      <g className="annotation-group">
        <text x="0" y="0" fill={color}>
          {text}
        </text>
        {showAnnotations && (
            <g transform={`translate(${text ? text.length * 4 + 8 : 0}, -3)`}>
              <circle r="3" fill="rgba(255, 0, 0, 0.8)" />
              <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="3"
                  fontStyle="bold"
                  fontFamily="monospace"
              >
                {number}
              </text>
            </g>
        )}
      </g>
  );

  return (
      <div className={`flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md`} style={{ maxWidth }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 78"
             className="w-full mb-4">
          {/* Background and container */}
          <rect x="0" y="0" width="106" height="78" rx="3" ry="3"
                fill="#012E55"/>
          <rect x="3" y="3" width="100" height="64" rx="2" ry="2"
                fill="#131111"/>

          {/* Display content */}
          <g fontFamily="monospace" fontSize="7">
            <g transform="translate(5, 12)">
              <Annotation number="1" text={`GS: ${gsIp}`}/>
            </g>
            <g transform="translate(5, 22)">
              <Annotation number="2" text="S:"/>
              <g transform="translate(25, 0)">
                <Annotation number="3" text={`${status} C:${port}`}/>
              </g>
            </g>
            <g transform="translate(5, 32)">
              <Annotation number="4" text={`GSS: ${gssIp}`}/>
            </g>
          </g>

          {/* Divider line */}
          <line x1="3" y1="38" x2="103" y2="38" stroke="#00ffff"
                strokeWidth="0.5"/>

          {/* Status lines */}
          <g fontFamily="monospace" fontSize="7">
            <g transform="translate(5, 50)">
              <Annotation number="5" text={line1}/>
            </g>
            <g transform="translate(5, 60)">
              <Annotation number="6" text={line2} color="#ffff00"/>
            </g>
          </g>

          {/* OLED effect overlay */}
          <rect x="3" y="3" width="100" height="64" rx="2" ry="2"
                fill="url(#oledEffect)" opacity="0.1"/>

          {/* Pin connections */}
          <g transform="translate(38, 68)">
            <circle cx="2" cy="2" r="1.5" fill="#333333"/>
            <circle cx="10" cy="2" r="1.5" fill="#333333"/>
            <circle cx="18" cy="2" r="1.5" fill="#333333"/>
            <circle cx="26" cy="2" r="1.5" fill="#333333"/>
            <text x="2" y="8" fontFamily="monospace" fontSize="3" fill="white"
                  textAnchor="middle">GND
            </text>
            <text x="10" y="8" fontFamily="monospace" fontSize="3" fill="white"
                  textAnchor="middle">VCC
            </text>
            <text x="18" y="8" fontFamily="monospace" fontSize="3" fill="white"
                  textAnchor="middle">SDL
            </text>
            <text x="26" y="8" fontFamily="monospace" fontSize="3" fill="white"
                  textAnchor="middle">SCA
            </text>
          </g>

          {/* Patterns and effects */}
          <defs>
            <pattern id="oledEffect" x="0" y="0" width="2" height="2"
                     patternUnits="userSpaceOnUse">
              <rect width="1" height="1" fill="#001155"/>
              <rect x="1" y="1" width="1" height="1" fill="#001155"/>
            </pattern>
          </defs>
        </svg>

        {/* Input fields */}
        {showInputs && (
            <div className="grid grid-cols-2 gap-4 w-full">
              <input
                  className="p-2 border rounded"
                  value={gsIp}
                  onChange={handleInputChange('gsIp')}
                  placeholder="GS IP"
              />
              <input
                  className="p-2 border rounded"
                  value={status}
                  onChange={handleInputChange('status')}
                  placeholder="Status"
              />
              <input
                  className="p-2 border rounded"
                  value={port}
                  onChange={handleInputChange('port')}
                  placeholder="port"
              />
              <input
                  className="p-2 border rounded"
                  value={gssIp}
                  onChange={handleInputChange('gssIp')}
                  placeholder="GSS IP"
              />
              <input
                  className="p-2 border rounded col-span-2"
                  value={line1}
                  onChange={handleInputChange('line1')}
                  placeholder="Line 1"
              />
              <input
                  className="p-2 border rounded col-span-2"
                  value={line2}
                  onChange={handleInputChange('line2')}
                  placeholder="Line 2"
              />
            </div>
        )}
      </div>
  );
};

export default DynamicStatusDisplay;
