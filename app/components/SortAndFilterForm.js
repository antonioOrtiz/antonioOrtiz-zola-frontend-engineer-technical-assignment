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
      category: '',
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    this.setState({
      data: this.props.data,
      priority: '',
      category: '',
      checked: !this.state.checked,
    });
  }

  handleChange(e) {
    var val = e.target.value;
    if (!isNaN(val)) {
      this.setState({ priority: val });
    } else if (isNaN(val)) {
      this.setState({ category: val });
    }
    this.props.changeOption(val);
  }

  render() {
    return (
      <div>
        <label>
          <input type="checkbox" defaultChecked={this.state.checked} disabled={true} onChange={this.handleReset} />
          <b>reset</b>
        </label>
        <h5>By category</h5>
        <ul>
          <li>
            <label>
              <input type="radio" value="cat1" checked={this.state.category === 'cat1'} onChange={this.handleChange} />
              cat1
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="cat2" checked={this.state.category === 'cat2'} onChange={this.handleChange} />
              cat2
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="cat3" checked={this.state.category === 'cat3'} onChange={this.handleChange} />
              cat3
            </label>
          </li>
        </ul>
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
        {/*<h5>By Color</h5>
        <ul>
          <li>
            <label>
              <input type="radio" value="Orange" checked={this.state.color === 'Orange'} onChange={this.handleChange} />
              <div className="circle orange-filter-bg" />
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="Green" checked={this.state.color === 'Green'} onChange={this.handleChange} />
              <div className="circle green-filter-bg" />
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="Blue" checked={this.state.color === 'Blue'} onChange={this.handleChange} />
              <div className="circle blue-filter-bg" />
            </label>
          </li>
          <li>
            <label>
              <input type="radio" value="Purple" checked={this.state.color === 'Purple'} onChange={this.handleChange} />
              <div className="circle purple-filter-bg" />
            </label>
          </li>
        </ul>*/}
      </div>
    );
  }
}

function FilterUsers(data) {
  return (
    <Container>
      <br />
      <br />
      <Grid columns={3} doubling stackable>
        {data.map((user /* leveraging arrow functions implicit return */) => (
          <Grid.Column key={user.name}>
            <Segment className={`priority${user.priority}`}>
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
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    if (!isNaN(val)) {
      this.setState({ priority: val });
      var filteredByPriority = this.props.data.filter(function(item) {
        return parseInt(item.priority) === parseInt(val);
      });
    } else {
      this.setState({ category: val });
      var filteredByPriority = this.props.data.filter(function(item) {
        return item.category === val;
      });
      this.setState({ category: val });
    }

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
