import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { handleUser, handleDays, handlePeople } from '../../store/actions'

export default function() {
  const dispatch = useDispatch();
	const user = useSelector(state => state.user);

  const handleMainSteps = (e) => {
    dispatch(handleUser(e.target.name, e.target.value))
  }
  return (
    <div onChange={handleMainSteps} className="card card--userName">
      <h3>Please enter your name</h3>
      <input 
        type="text" 
        name="userName"
        defaultValue={user.userName}
      />
    </div>
  )
}