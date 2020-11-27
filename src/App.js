import React from 'react';
import './styles/main.scss';
import Card from './components/card'
import Icon from './components/Icon'
import Ticket from './components/Ticket'
import { useDispatch, useSelector } from "react-redux";
import { showError } from './store/actions'

function App() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user);
  const tree = useSelector(state => state.tree);
  const cardWrapper = React.useRef()
  const [state, setState] = React.useState({
    step: 0,
    activeCard: null,
    condition: null,
    renderTicket: false,
    tickets: [],
  })

  const handleStep = (e) => {
    if (state.step === 0){
      setState({...state, step: state.step + 1})
    } else {
      if (user[state.activeCard] === null || user.dayCount > 30){
        dispatch(showError(true))
        return
      } else {
        setState({
          ...state, 
          step: state.step + 1,
        })
        dispatch(showError(false))
      }
    }
  }

  const setTree = (num) => {
    if(num === 0) {
      return null;
    } else if (num === 1) {
      setState({...state, activeCard: "userName"})
    } else if (num === 2) {
      setState({...state, activeCard: "dayCount"})
    } else if (num === 3){
      setState({...state, activeCard: "peopleCount"})
    } else if (num === 4){
      setState({...state, activeCard: "isTouristic"})
    } else {
      if(user.dayCount <= 1){
        if(user.isTouristic){
          setState({...state,renderTicket: true, tickets: [
            { name: 'touristic', count: user.coupleCount }
          ]})
        } else {
          if(user.prefersShortTrip){
            setState({...state, renderTicket: true, tickets: [
              { name: 'shorttrip', count: user.peopleCount}
            ]})
          } else if (user.prefersShortTrip === false) {
            if(user.travelsMore){
              if(user.peopleCount < 3){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'daily', count: user.peopleCount }
                ]})
              } else {
                setState({...state, renderTicket: true, tickets: [
                  { name: 'dailygroup', count: user.groupCount },
                  { name: 'daily', count: user.peopleCount % 5 },
                ]})
              }
            } else if (user.travelsMore === false){
              setState({...state, renderTicket: true, tickets: [
                { name: 'singletrip', count: user.peopleCount}
              ]})
            } else {
              setState({...state,
                activeCard: "conditional", 
                condition: "travelsMore"
              })
            }
          } else {
            setState({...state,
              activeCard: "conditional", 
              condition: "prefersShortTrip"
            })
          }
          
        }
      } else {
        if(user.travelsLess){

          if(user.prefersShortTrip){
            setState({...state,renderTicket: true, tickets: [
              { name: 'shortfourtrip', count: user.peopleCount }
            ]})
          } else if (user.prefersShortTrip === false){
            setState({...state,renderTicket: true, tickets: [
              { name: 'fourtrip', count: user.peopleCount }
            ]})
          } else {
            setState({...state,
              activeCard: "conditional", 
              condition: "prefersShortTrip"
            })
          }

        } else if (user.travelsLess === false){

          if(user.dayCount <= 3){
            if(user.peopleCount < 3){
              if(user.isTouristic){
                console.log(user.coupleCount )
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount }
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'daily', count: user.peopleCount }
                ]})
              }
            } else {
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount }
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'dailygroup', count: user.groupCount * user.dayCount }
                ]})
              }
            }
            
          } else if (user.dayCount > 3 && user.dayCount <= 7){
            if(user.peopleCount < 5){
              if(user.travelsOnWeekends){
                if(user.isTouristic){
                  setState({...state, renderTicket: true, tickets: [
                    { name: 'touristic', count: user.coupleCount }
                  ]})
                } else{
                  setState({...state, renderTicket: true, tickets: [
                    { name: 'weekly', count: user.coupleCount }
                  ]})
                }
              } else if (user.travelsOnWeekends === false ){
                if(user.isTouristic){
                  setState({...state, renderTicket: true, tickets: [
                    { name: 'touristic', count: user.coupleCount }
                  ]})
                } else{
                  setState({...state, renderTicket: true, tickets: [
                    { name: 'weekly', count: user.peopleCount }
                  ]})
                }
              } else {
                setState({...state,
                  activeCard: "conditional", 
                  condition: "travelsOnWeekends"
                })
              }
            } else if (user.peopleCount % 5 === 0){
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount }
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'dailygroup', count: user.groupCount * user.dayCount }
                ]})
              }
            } else {
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount }
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'dailygroup', count: user.groupCount * user.dayCount },
                  { name: 'weekly', count: user.peopleCount % 5}
                ]})
              }
            }

          } else if (user.dayCount > 7 && user.dayCount <= 11){
            if(user.peopleCount < 5){
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount },
                  { name: 'daily', count: user.remainderDays * user.peopleCount}
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'daily', count: user.remainderDays * user.peopleCount},
                  { name: 'weekly', count: user.peopleCount }
                ]})
              }
            } else if (user.peopleCount % 5 === 0){
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount},
                  { name: 'dailygroup', count: user.remainderDays * user.groupCount }
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'dailygroup', count: user.dayCount * user.groupCount}
                ]})
              }
            } else {
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount},
                  { name: 'daily', count: user.remainderDays * user.peopleCount }
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'dailygroup', count: user.dayCount * user.groupCount},
                  { name: 'daily', count: user.peopleCount % 5 * user.remainderDays },
                  { name: 'weekly', count: user.peopleCount % 5 }
                ]})
              }
            }
          } else if (user.dayCount > 11 && user.dayCount <= 14){
            if(user.peopleCount < 5){
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount},
                  { name: 'weekly', count: user.peopleCount }
                ]})
              } else{
                setState({...state, renderTicket: true,  tickets: [
                  { name: 'weekly', count: user.peopleCount * 2 }
                ]})
              }
            } else if (user.peopleCount % 5 === 0){
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount},
                  { name: 'dailygroup', count: user.groupCount * 
                    (user.dayCount === 14 ? 7 : user.remainderDays) }
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'dailygroup', count: user.groupCount * user.dayCount }
                ]})
              }
            } else {
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount},
                  { name: 'dailygroup', count: user.groupCount * 
                    (user.dayCount === 14 ? 7 : user.remainderDays) }
                ]})
              } else{
                setState({...state, renderTicket: true, tickets: [
                  { name: 'dailygroup', count: user.dayCount * user.groupCount},
                  { name: 'weekly', count: (user.peopleCount % 5) * 2}
                ]})
              }
            }
          } else if (user.dayCount > 14 && user.dayCount <= 30){
            if(user.prefersAfterTen) {
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount},
                  { name: 'monthlytenam', count: user.peopleCount }
                ]})
              } else { 
                setState({...state, renderTicket: true, tickets: [
                  { name: 'monthlytenam', count: user.peopleCount }
                ]})
              }
            } else if (user.prefersAfterTen === false){
              if(user.isTouristic){
                setState({...state, renderTicket: true, tickets: [
                  { name: 'touristic', count: user.coupleCount},
                  { name: 'monthly', count: user.peopleCount }
                ]})
              } else {
                setState({...state, renderTicket: true, tickets: [
                  { name: 'monthly', count: user.peopleCount }
                ]})
              }
            } else {
              setState({...state,
                activeCard: "conditional", 
                condition: "prefersAfterTen"
              })
            }
          }

        } else {
          setState({...state,
            activeCard: "conditional", 
            condition: "travelsLess"
          })
        }
      }
    }
  }

  React.useEffect(() => {
    if(state.step !== 0){
      cardWrapper.current.classList.add('change')
      setTimeout(() => {
        setTree(state.step)
        cardWrapper.current.classList.remove('change')
      }, 350);
    }
  }, [state.step])

  React.useEffect(() => {
    console.log(user)
  }, [user])

  return (
		<main className="layout">
      <div className="layout__train"/>
      <div className="card__wrapper" ref={cardWrapper}>
        {
          state.renderTicket
          ? <>
            {
              state.tickets.map((t,i) => 
                <Ticket 
                  key={i} 
                  name={t.name} 
                  count={t.count} 
                />
              )
            }
            <Card type="summary" />
          </>
          : <Card 
              type={state.activeCard} 
              condition={state.condition}
            />
        }
        { 
          tree.errorShown 
            ? <p className="card__error">{
              state.activeCard === 'dayCount' 
                ? "Maximum number of days is 30."
                : "You need to fill the inputs to continue."}</p>
            : null
        }
      </div>
      {
        state.renderTicket
        ? <button onClick={() => window.location.reload()}><Icon name="restart"/></button>
        : <button 
            onClick={handleStep}
            className="icon__button" 
            name="next">
              <Icon name="forward"/>
          </button>
      }
      
    </main>
  );
}

export default App;
