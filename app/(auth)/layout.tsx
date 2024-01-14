import React from "react";

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <p>Ini adalah</p>
      {children}
    </div>
  );
};

export default RootLayout;