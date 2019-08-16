import React from 'react';
import './Navbar.css';

const Navbar = ({ items, onItemClick}) => {

  return (
    <div>
      <div className={'navbar navbar-dimensions text-unselectable'}>
        { items.map( item => <span
            key={ item.name }
            onClick = { e => {
              onItemClick(item.name);
            }}
            className={ 'navbar-item navbar-item-dimensions clickable' }
          >{ item.name }</span>
        )}
      </div>
      <div className="navbar-dimensions"/>
    </div>
  )
}

export default Navbar;