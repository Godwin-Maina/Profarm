import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Tour = () => {

    return(

      <div>

     
        <CardGroup>
        <Card>
          <Card.Img variant="top" className='img-thumbnail' src="./imgs/cowhead.jpg" />
          <Card.Body>
            <Card.Title>Dairy Farming</Card.Title>
            <Card.Text>
          Fresh Milk.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" className='rounded-circle img-thumbnail' src="./imgs/farmchiks.jpg" />
          <Card.Body>
            <Card.Title>Poultry Farming</Card.Title>
            <Card.Text>
           kenbro, broilers, layers and kenchicks.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" className='rounded-circle img-thumbnail' src="./imgs/maize.jpg" />
          <Card.Body>
            <Card.Title>Maize Farming</Card.Title>
            <Card.Text>
                maize from 50 kg available.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" className='rounded-circle img-thumbnail' src="./imgs/pexel.jpg" />
          <Card.Body>
            <Card.Title>ProEXp</Card.Title>
            <Card.Text>
              we provide cloud services like hosting and technology solutions.visit our platform www.ProEXP.com for more..{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
     <p><b>TESTIMONIALS</b></p>
     <p><b> videos</b></p>
      </div>
    )
}
export default Tour

