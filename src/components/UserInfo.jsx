import React, { useEffect  } from 'react';
import data from './useFetch.json';
import { useContext } from 'react';



const UserInfo =()=> {
 

  
  
  return (                                                       
    <div>
        {data.map((producto, index) => {
            return(
                <div key={index}>
                    <h3>{producto.Nombre}</h3>            
                    
                </div>
            )
        })}
    </div>
  )
}

export default UserInfo
