import React from "react";

interface MapProps {
  address?: string;
  width?: string;
  height?: string;
}

const Map: React.FC<MapProps> = ({ 
  width = "600px", 
  height = "450px" 
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386795.10174637096!2d72.25008569347868!3d23.01990207203543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1742990342515!5m2!1sen!2sin"
        width={width}
        height={height}
        style={{ border: 0, width: "100%", height: height }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
