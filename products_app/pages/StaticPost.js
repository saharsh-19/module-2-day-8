import React from 'react'
export async function getStaticProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/todos')
    const output = await res.json()
    return{
        props:{
            apiDatas: output
        }
    }
}

function StaticPost({apiDatas}) {
  return (
    <div>
       <h1>SSG</h1>
        {apiDatas.map( (apiData)=>(
            <div key={apiData.id}>
                <h3>Title: {apiData.title}</h3>
                <p>completed: {apiData.completed.toString()}</p> 
                   
            </div>
        ))}
    </div>
  )
}

export default StaticPost