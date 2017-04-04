import React from 'react';

import PrivateHeader from './PrivateHeader';

const Dashboard = () => {
  return (
    <div>
      <PrivateHeader title="Dashboard" />
      <div className="page-content">
        <div className="board">
          <div className="square">1</div>
          <div className="square">2</div>
          <div className="square">3</div>
          <div className="square">4</div>

          <div className="square">5</div>
          <div className="square">6</div>
          <div className="square">7</div>
          <div className="square">8</div>

          <div className="square">9</div>
          <div className="square">10</div>
          <div className="square">11</div>
          <div className="square">12</div>

          <div className="square">13</div>
          <div className="square">14</div>
          <div className="square">15</div>
          <div className="square">16</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
