import React from 'react';
import CardDayCount from './CardDayCount'
import CardIsTouristic from './CardIsTouristic'
import CardPeopleCount from './CardPeopleCount'
import CardUsername from './CardUsername'
import CardCondition from './CardCondition'
import CardStart from './CardStart'
import CardSummary from './CardSummary'

export default function({type, condition, ticketName}) {

  switch(type){
    case "userName":
      return <CardUsername/>
    case "isTouristic":
      return <CardIsTouristic/>
    case "dayCount":
      return <CardDayCount/>
    case "peopleCount":
      return <CardPeopleCount/>
    case "summary":
      return <CardSummary/>
    case "conditional":
      return <CardCondition condition={condition}/>
    default:
      return <CardStart/>
  }
}