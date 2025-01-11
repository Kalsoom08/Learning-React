import React from 'react';
import { Link } from 'react-router-dom';
import FeatureProducts from '../FeatureProducts';

const LatestNavBar = () => {
  return (
    <div >
      <FeatureProducts/>
    <nav>
      <ul>
        <li>
          <Link to="/latest">New Arrivals</Link>
        </li>
        <li>
          <Link to="/latest/bestseller">Best Seller</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default LatestNavBar;
