import React from 'react';

export default function Ticket({name, count}) {
  switch(name){
    case "touristic":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x Berlin WelcomeCard</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/tourist-tickets/berlin-welcomecard/">More Info</a>
        </div>
      );
    case "fourtrip":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x 4-trip ticket</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/single-tickets/4-trip-ticket/">More Info</a>
        </div>
      );
    case "shortfourtrip":
      return (
        <div className={`ticket ticket--${name}`}>
        <h4>{count}x 4-trip ticket for short journeys</h4>
        <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/single-tickets/4-trip-ticket-short-distance/">More Info</a>
      </div>
      );
    case "shorttrip":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x Short trip ticket</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/single-tickets/short-trip-ticket/">More Info</a>
        </div>
      );
    case "singletrip":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x Single trip ticket</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/single-tickets/single-trip-ticket/">More Info</a>
        </div>
      );
    case "daily":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x Day Ticket</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/single-tickets/day-ticket/">More Info</a>
        </div> 
      );
    case "dailygroup":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x Day ticket for small groups</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/group-tickets/day-ticket-for-small-groups/">More Info</a>
        </div>
      );
    case "weekly":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x 7-Day-Ticket</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/weekly-monthly-annual-tickets/7-day-ticket/">More Info</a>
        </div> 
      );
    case "monthly":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x VBB-Umweltkarte</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/weekly-monthly-annual-tickets/vbb-umweltkarte/">More Info</a>
        </div>
      );
    case "monthlytenam":
      return (
        <div className={`ticket ticket--${name}`}>
          <h4>{count}x 10am ticket</h4>
          <a target="_blank" rel="noreferrer" href="https://sbahn.berlin/en/tickets/all-tickets/weekly-monthly-annual-tickets/10am-ticket/">More Info</a>
        </div>
      );
    default: 
      return null
  }
}