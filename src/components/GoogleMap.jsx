import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.1!2d-88.1899324!3d40.1424136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd83d20df793f%3A0x3f7565e7e19936fa!2s1502%20Airport%20Rd%2C%20Urbana%2C%20IL%2061802!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Own Your Own Storage Location - 1502 Airport Road, Urbana IL 61802"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

