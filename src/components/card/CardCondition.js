import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { handleUser } from '../../store/actions'

export default function({condition}) {

  const dispatch = useDispatch()
  const tree = useSelector(state => state.tree);
  const user = useSelector(state => state.user);

  return (
    <div className="card card--condition">
      <h3>{tree.questions[condition]}</h3>
      <div className="radio__wrapper">
        <div className="radio">
          <input 
            type="radio" 
            name="yes"
            onChange={() => dispatch(handleUser(condition, true))}
            checked={user[condition] === null 
              ? false 
              : user[condition] === true ? true : false}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="radio">
          <input 
            type="radio" 
            name="no" 
            onChange={() => dispatch(handleUser(condition, false))}
            checked={user[condition] === null 
              ? false 
              : user[condition] === false ? true : false}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
    </div>
  )
}