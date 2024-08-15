import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedValue: event.target.value });
  }

  render() {
    return (
      <div>
        <select value={this.state.selectedValue} onChange={this.handleChange}>
          <option value={0}>Select an option</option>
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
        </select>
        <p>Selected Value: {this.state.selectedValue}</p>
      </div>
    );
  }
}

export default Dropdown;