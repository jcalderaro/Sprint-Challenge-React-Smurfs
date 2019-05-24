import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name} The Smurf</h3>
      <strong>{props.height} Tall</strong>
      <p>{props.age} Smurf Years Old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

/* Clear */