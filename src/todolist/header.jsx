import React from 'react';

const Header = () => {
    const styles = {
        background: '#333',
        textAlign: 'center',
        padding: '10px'
    }
    return (
        <div style={styles}>
            <h1 style={{color: 'white'}} >To-Do-List</h1>
        </div>
    );}

export default Header;