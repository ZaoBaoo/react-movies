import React from "react";

class RadioBtn extends React.Component {
  state = {
    type: "all",
  };

  handleRadio = (e) => {
    this.setState({ type: e.target.value });
    this.props.setFilter(e.target.value);
  };

  render() {
    const { type } = this.state;
    return (
      <form className="margin-bottom" action="!#">
        {/* Btn 1 */}
        <label className="margin-right">
          <input
            name="group1"
            type="radio"
            value="all"
            onChange={this.handleRadio}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        {/* Btn 2 */}
        <label className="margin-right">
          <input
            name="group1"
            type="radio"
            value="movie"
            onChange={this.handleRadio}
            checked={type === "movie"}
          />
          <span>Only films</span>
        </label>
        {/* Btn 3 */}
        <label className="margin-right">
          <input
            name="group1"
            type="radio"
            value="series"
            onChange={this.handleRadio}
            checked={type === "series"}
          />
          <span>Only series</span>
        </label>
      </form>
    );
  }
}

export default RadioBtn;
