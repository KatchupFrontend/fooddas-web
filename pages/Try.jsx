import React from 'react'
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import("../component/Try"), {
  ssr: false,
});


const Try = () => {
  return (
    <div>
     <DynamicComponentWithNoSSR/>
    </div>
  )
}

export default Try