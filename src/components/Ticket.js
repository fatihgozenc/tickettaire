import React from 'react';

export default function({type}) {
  switch(type){
    case "tourist":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div>
      );
    case "fourtrip":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div>
      );
    case "shortfourtrip":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div>
      );
    case "shorttrip":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div>
      );
    case "singletrip":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div>
      );
    case "daily":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div> 
      );
    case "dailygroup":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div>
      );
    case "monthly":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div>
      );
    case "monthlytenam":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{name}</h4>
        </div>
      );
  }
}