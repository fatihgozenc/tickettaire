import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleUser, handleDays, handlePeople } from './store/actions'
import './styles/main.scss';

function App() {

  const dispatch = useDispatch();
	const user = useSelector(state => state.user);

  const handleMainSteps = (e) => {
    dispatch(handleUser(e.target.name, e.target.value))
  }

  React.useEffect(() => {
    console.log(user)
  }, [user])

  React.useEffect(() => {
    dispatch(handleDays())
  }, [user.dayCount])

  React.useEffect(() => {
    dispatch(handlePeople())
  }, [user.peopleCount])

  return (
		<div>
      <div onChange={handleMainSteps} className="card">
        <h3>Please enter your name</h3>
        <input 
          type="text" 
          name="userName"
        />
        <button>Next</button>
      </div>

      <div onChange={handleMainSteps} className="card">
        <div className="card__conditional--controller">
          <h3>How much time are you planning on staying in the city?</h3>
          <input 
            type="radio" 
            value="1"
            id="a_few_hours"
            name="dayCount"
          />
          <label>A few hours</label>
          <input 
            type="radio" 
            value="1"
            id="a_day" 
            name="dayCount"
          />
          <label>A day</label>
          <input 
            type="radio" 
            value="2"
            id="multiple_days"
            name="dayCount"
          />
          <label>Multiple days</label>
        </div>
        <div className="card__conditional--controller">
          <h4>How many days?</h4>
          <input 
            type="number" 
            min="2" max="30"
            placeholder="2-30"
            id="dayCount"
            name="dayCount"
          />
          <label>Days</label>
        </div>
        <button>Next</button>
      </div>

      <div onChange={handleMainSteps} className="card card__conditional">
        <div className="card__conditional--controller">
          <h3>Are you travelling alone or as a couple or with a group?</h3>
          <input 
            type="radio" 
            value="1" 
            name="peopleCount"
          />
          <label htmlFor="alone">Alone</label>
          <input 
            type="radio" 
            value="2" 
            name="peopleCount"
          />
          <label htmlFor="couple">Couple</label>
          <input 
            type="radio" 
            value="3" 
            name="peopleCount"
          />
          <label htmlFor="group">Group</label>
        </div>
        <div className="card__conditional--controller">
          <h4>How many people are in the group?</h4>
          <input 
            type="number" 
            min="3"
            placeholder="3" 
            name="peopleCount"
          />
        </div>
        <button>Next</button>
      </div>

      <div onChange={handleMainSteps} className="card">
        <h3>Are you interested in touristic discounts?</h3>
        <input 
          type="radio" 
          value="1"
          name="isTouristic"
        />
        <label htmlFor="yes">Yes</label>
        <input 
          type="radio" 
          value="0"
          name="isTouristic"
        />
        <label htmlFor="no">No</label>
        <button>Next</button>
      </div>
      
    </div>
  );
}

export default App;
