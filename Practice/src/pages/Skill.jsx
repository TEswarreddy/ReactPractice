import React from 'react'
import technology from '../constants/data'

export const Skill = () => {
  return (
    <div>
        {technology.map((tech)=>{
            <div className="flex items-center justify-center">
                <div>
                    <img src={tech.image} alt={tech.name} className="w-24 h-24" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{tech.name}</h1>
                    <p className="text-gray-500">{tech.description}</p>
                </div>
                
            </ div>
            
        })}

    </div>
  );
};

export default Skill;