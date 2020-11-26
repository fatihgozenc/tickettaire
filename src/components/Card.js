import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <h3>Please select the zones you want to travel in Berlin</h3>
      <p>Berlin is divided into three tariff zones: AB, BC und ABC. Tariff zone AB includes the urban area to the city boundary. Zone ABC additionally includes Berlin's surrounding area and Potsdam Hauptbahnhof.</p>
      <label htmlFor="q2_a1">Yes</label>
      <input type="radio" name="q2_a1"/>
      <label htmlFor="q2_a2">No</label>
      <input type="radio" name="q2_a2"/>
    </div>
  )
}