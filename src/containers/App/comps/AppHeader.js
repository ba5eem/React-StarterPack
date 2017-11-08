import React from 'react';

const AppHeader = ({data}) => {
  console.log("From AppHeader Component - this was passed in from the App Container: ", data)
  return (

      <div>Welcome to facelibrary</div>

    )//end of return
};

export default AppHeader;