import React from 'react';
import { Card, Select, Segment, Container, Divider, Grid, Header, Image } from 'semantic-ui-react';

import '../css/app.css';

export default function Users() {
  /* destructuring props */
  var data = [
    {
      name: 'Joe',
      age: 24,
      priority: 1,
      category: 'cat2',
    },
    {
      name: 'Jane',
      age: 76,
      priority: 4,
      category: 'cat1',
    },
    {
      name: 'Kevin',
      age: 32,
      priority: 2,
      category: 'cat2',
    },
    {
      name: 'Lucy',
      age: 54,
      priority: 1,
      category: 'cat3',
    },
    {
      name: 'Colin',
      age: 34,
      priority: 3,
      category: 'cat1',
    },
    {
      name: 'Franny',
      age: 36,
      priority: 2,
      category: 'cat3',
    },
    {
      name: 'Neil',
      age: 74,
      priority: 4,
      category: 'cat2',
    },
    {
      name: 'Katy',
      age: 55,
      priority: 3,
      category: 'cat2',
    },
  ];
  return (
    <Container>
      <Select placeholder="Select your country" options={data} />
      <br />
      <br />
      <Grid columns={3} doubling stackable>
        {data.map((user /* leveraging arrow functions implicit return */) => (
          <Grid.Column key={user.name}>
            <Segment>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <h2>name: {user.name}</h2>
                  </Card.Header>
                  <Card.Meta>
                    <span className="card__age">age: {user.age}</span>
                  </Card.Meta>
                  <Card.Description>priority: {user.priority}</Card.Description>
                  <Card.Description className="card__catergory">category: {user.category}</Card.Description>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
}
