import React from 'react';

function Header(props) {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent:'space-evenly',
      width: '100%'
    }}>
        <div>
          Menu
        </div>
        <div>
          Search
        </div>
        <div>
          Logo
        </div>
        <div>
          my account
        </div>
        <div>
          Subcribe
        </div>
    </header>
  );
}

export default Header;