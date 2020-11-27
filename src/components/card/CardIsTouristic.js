import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { handleUser } from '../../store/actions'

export default function() {
  const dispatch = useDispatch();
	const user = useSelector(state => state.user);

  return (
    <div className="card card--isTouristic">
      <h3>Are you interested in touristic discounts?</h3>
      <div className="radio__wrapper">
      <div className="radio">
        <input 
          type="radio" 
          checked={user.isTouristic === null ? false : user.isTouristic ? true : false}
          onChange={(e) => dispatch(handleUser(e.target.name, true))}
          name="isTouristic"
        />
        <label htmlFor="yes">Yes</label>
      </div>
      <div className="radio">
        <input 
          type="radio" 
          checked={user.isTouristic === null ? false : user.isTouristic ? false : true}
          onChange={(e) => dispatch(handleUser(e.target.name, false))}
          name="isTouristic"
        />
        <label htmlFor="no">No</label>
      </div>
      </div>
    </div>
  )
}