import React from 'react';

const TrandingApp = async () => {
  const res = await fetch('/public/data.json')
  const data = await res.json()
  return (
    <div>
      
    </div>
  );
};

export default TrandingApp;