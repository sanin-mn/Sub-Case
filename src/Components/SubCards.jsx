import React from 'react'
import Card from 'react-bootstrap/Card';

function SubCards() {
  return (
    <div>
      <Card style={{ width: '16rem',border: '3px solid white',borderRadius:'0px' }}>
        <Card.Img variant="top-bottom" src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/NNxYkU70HPurnNCSiCjYAmacwm.jpg'} />
      </Card>
    </div>
  )
}

export default SubCards


