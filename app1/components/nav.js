import * as React from 'react';

const Nav = () => {
  React.useEffect(() => {
    console.log('Tada!')
  })
  return (
    <nav
      style={{
        background: 'hotpink',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}>
      Navg
    </nav>
  );
};

export default Nav;
