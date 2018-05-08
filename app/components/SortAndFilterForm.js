import React, { Component } from 'react';
/* named imports if what we are importing is coming in as an object */
import { Card, Select, Segment, Container, Divider, Grid, Header, Image } from 'semantic-ui-react';
import '../css/app.css';

class FilterOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      priority: '',
      age: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var val = e.target.value;
    this.setState({ priority: val });
    this.props.changeOption(val);
  }

  render() {
    return (
      <div>
        <h5>By priority</h5>
        <ul>
          <li>
            <label>
              <input type="radio" value="1" checked={this.state.priority === '1'} onChange={this.handleChange} />
              1
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="2" checked={this.state.priority === '2'} onChange={this.handleChange} />
              2
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="3" checked={this.state.priority === '3'} onChange={this.handleChange} />
              3
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="4" checked={this.state.priority === '4'} onChange={this.handleChange} />
              4
            </label>
          </li>
        </ul>
        <h5>By age</h5>
        <ul>
          <li>
            <label>
              <input type="radio" checked={this.state.age <= '24'} onChange={this.handleChange} />
              &lt; 24
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                checked={this.state.age > '32' && this.state.age < '36'}
                onChange={this.handleChange}
              />
              32 &minus; 36
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                checked={this.state.age > '54' && this.state.age < '74'}
                onChange={this.handleChange}
              />
              54 &minus; 74
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

function FilterUsers(props) {
  return (
    <Container>
      <br />
      <br />
      <Grid columns={3} doubling stackable>
        {props.data.map((user /* leveraging arrow functions implicit return */) => (
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

export default class SortAndFilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      priority: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ priority: val });
    var filteredByPriority = this.props.data.filter(function(item) {
      return parseInt(item.priority) === parseInt(val);
    });
    console.log('filteredByPriority', filteredByPriority);
    this.setState({ data: filteredByPriority });
  }
  render() {
    return (
      <Container>
        <h1>Sorts</h1>
        <FilterOptions data={this.state.data} changeOption={this.handleChange} />
        <FilterUsers data={this.state.data} />
      </Container>
    );
  }
}
