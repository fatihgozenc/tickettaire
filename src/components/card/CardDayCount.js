import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { handleUser, handleDays, handlePeople } from '../../store/actions'

export default function() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  
  React.useEffect(() => {
    dispatch(handleDays())
  }, [user.dayCount])

  return (
    <div className="card card--dayCount">
      <div className="card__conditional--controller">
        <h3>How much time are you planning on staying in the city?</h3>
        <div className="radio__wrapper">
        <div className="radio">
          <input 
            type="radio" 
            checked={user.dayCount === null ? false : user.dayCount === 0.5 ? true : false}
            onChange={(e) => {
              dispatch(handleUser(e.target.name, 0.5))
            }}
            id="a_few_hours"
            name="dayCount"
          />
          <label className="radio-label">A few hours</label>
        </div>

        <div className="radio">
       
        <input 
          type="radio" 
          checked={user.dayCount === null ? false : user.dayCount === 1 ? true : false}
          value="1"
          onChange={(e) => {
            dispatch(handleUser(e.target.name, 1))
          }}
          id="a_day" 
          name="dayCount"
        />
        <label className="radio-label">A day</label>
        </div>

        <div className="radio">
        <input 
          type="radio" 
          checked={user.dayCount === null ? false : user.dayCount > 1 ? true : false}
          onChange={(e) => {
            dispatch(handleUser(e.target.name, 2))
          }}
          id="multiple_days"
          name="dayCount"
        />
        <label className="radio-label">Multiple days</label>
        </div>
        </div>
      </div>
      {
        user.dayCount > 1
        ? (
          <div className="card__conditional--controller">
            <h4>How many days?</h4>
            <input 
              type="number" 
              min="2" max="30"
              onChange={(e) => dispatch(handleUser(e.target.name, parseInt(e.target.value)))}
              defaultValue="2"
              id="dayCount"
              name="dayCount"
            />
            <label className="radio-label">Days</label>
          </div>
        ) : null
      }
      
    </div>
  )
}