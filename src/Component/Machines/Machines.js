import React from 'react'
import './Machines.css';
import items from "../Json/Machines.json";

export default function Machine() {
  return (
  
    <div>
        <h1 className='machine-heading'>Machinaries</h1>

       
       <div>
        {items.map((e) =>{
            return(
                <>

                       <div className='machine-contain'>
                        
            <div className='machine-img'>
              
              <img src={e.imageUrl}/>
            </div>
            <div className='machine-info'>
                <h1>{e.name}</h1>
                <ul>
                    <li><span>{e.subheading}:</span>{e.function}</li>
                    <li className='li-hindi'><span>{e.subheading_hindi}: </span>{e.function_hindi}.</li>
                    
                    <li><span>Uses: </span>{e.uses}
                    </li>
                    <li className='li-hindi'><span>उपयोग: </span>
                  {e. uses_hindi}</li>
                </ul>
            </div>
        </div>
                </>
            )
        })}
       </div>

    </div>
  
  )
}