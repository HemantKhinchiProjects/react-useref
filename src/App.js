import React from 'react';
import './style.css';
import UnControlled from './Form/unControlled';
export default function App() {
  return (
    <div className="container">
      <div class="row justify-content-around">
        <div class="col-4 mx-auto">
          <UnControlled />
        </div>
      </div>
    </div>
  );
}
