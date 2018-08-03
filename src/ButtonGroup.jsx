import React from 'react';
import {store} from './store';
import setTechnology from './actions';

const ButtonGroup = ({technologies}) => {

    function dispatchBtnAction(e){
        const tech = e.target.dataset.tech;
        store.dispatch(setTechnology(tech))
    }
    
  return (
    <div>
      {technologies.map((tech, item) => (
          <button 
          data-tech={tech}
          key={item}
          className="button"
          onClick={dispatchBtnAction}
          > 
            {tech} 
        </button>
      )) }
    </div>
  )
}

export default ButtonGroup;

