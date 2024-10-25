import React from 'react'
export async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/todos')
    const output = await res.json()
    return{
        prope:{
            apiDatas: output
        }
    }
}

function StaticPost(apiDatas) {
  return (
    <div>
        Static page with SSG
        {apiDatas.map((apiData)=>(
            <div key={apiData.id}>
                <h2>completed: {apiData.completed}</h2> 
                <p>body: {apiDatas.body}</p>   
            </div>
        ))}
    </div>
  )
}

export default StaticPost