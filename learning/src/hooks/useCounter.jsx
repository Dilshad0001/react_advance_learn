import React, { useState } from 'react'

function useCounter() {
    const [count,setCount]=useState(0)

    const incri=()=>setCount((prev)=>prev+1);
    const decri=()=>setCount((prev)=>prev-1);
    const reset=()=>setCount(0)
  return {count,incri,decri,reset}
}

export default useCounter
