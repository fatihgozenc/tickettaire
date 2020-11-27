import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { handleUser, handlePeople } from '../../store/actions'

export default function() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  React.useEffect(() => {
    dispatch(handlePeople())
  }, [user.peopleCount])

  return (
    <div className="card card--peopleCount card__conditional">
      <div className="card__conditional--controller">
        <h3>Are you travelling alone or as a couple or with a group?</h3>
        <div className="radio__wrapper">
        <div className="radio">
        <input 
          type="radio" 
          checked={user.peopleCount === null ? false : user.peopleCount === 1 ? true : false}
          onChange={(e) => {
            dispatch(handleUser(e.target.name, 1))
          }}
          name="peopleCount"
        />
        <label htmlFor="alone">Alone</label>
        </div>
        <div className="radio">
        <input 
          type="radio" 
          checked={user.peopleCount === null ? false : user.peopleCount === 2 ? true : false}
          onChange={(e) => {
            dispatch(handleUser(e.target.name, 2))
          }}
          name="peopleCount"
        />
        <label htmlFor="couple">Couple</label>
        </div>
        <div className="radio">

        <input 
          type="radio" 
          checked={user.peopleCount === null ? false : user.peopleCount > 2 ? true : false}
          onChange={(e) => {
            dispatch(handleUser(e.target.name, 3))
          }}
          name="peopleCount"
        />
        <label htmlFor="group">Group</label>
        </div>
        </div>
      </div>
      {
        user.peopleCount > 2
        ? (
          <div className="card__conditional--controller">
            <h4>How many people are in the group?</h4>
            <input 
              type="number" 
              min="3"
              onChange={(e) => dispatch(handleUser(e.target.name, parseInt(e.target.value)))}
              defaultValue="3" 
              name="peopleCount"
            />
            <label className="radio-label">People</label>
          </div>
        ) : null
      }
      
    </div>
  )
}