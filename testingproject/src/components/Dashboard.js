import React, { useState, useEffect } from 'react'
import Display from './Display'
import useDisplayHook from './DisplayHook'

const Dashboard = () => {
  const [strike, clickStrike, setStrike] = useDisplayHook(0)
  const [ball, clickBall, setBall] = useDisplayHook(0)
  const [foul, clickFoul, setFoul] = useDisplayHook(0)
  const [hit, clickHit, setHit] = useDisplayHook(0)





  if (strike === 3 || ball === 4 || hit > 0) {
    { setStrike(0) }
    { setBall(0) }
    { setHit(0) }
    { setFoul(0) }

  } else if (foul ) {
    { setStrike( }
  }
















  return (
    <div>
      <Display strike={strike} ball={ball} foul={foul} hit={hit} />
      <button onClick={clickStrike}>strike</button>
      <button onClick={clickBall}>ball</button>
      <button onClick={clickFoul}>foul</button>
      <button onClick={clickHit}>hit</button>
      <button>out</button>
      <button>runs</button>
      <button>errors</button>
    </div>
  )
}

export default Dashboard
