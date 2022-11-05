import React, { useState, useMemo } from 'react'

const slowFunc = (n) => {
  for (let i = 0; i < 1000000000; i++) {}
  return n*2
}

const UseMemoComp = () => {

  const [number, setNumber] = useState(1)
  const [count, setCount] = useState(0)

  const twiceOfNum = useMemo(()=>{
    console.log('Use Memo called');
    return slowFunc(number)
  }, [number, count])

  return (
    <div>
        <h4>{count}</h4>
        <button onClick={()=> setCount(count + 1)}>Increase Count</button> <br />

        <input type="number" onChange={(e) => setNumber(e.target.value)} value={number} />
        <div>
          {number} * 2 = {twiceOfNum}
        </div>
    </div>
  )
}

export default UseMemoComp