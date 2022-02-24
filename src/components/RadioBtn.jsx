import React from "react";

class RadioBtn extends React.Component {
  handleRadio = (e) => {
    this.props.setFilter(e.target.value);
  };

  render() {
    return (
      <form className="margin-bottom" action="!#">
        {/* Btn 1 */}
        <label className="margin-right">
          <input
            name="group1"
            type="radio"
            value=""
            onClick={this.handleRadio}
          />
          <span>All</span>
        </label>
        {/* Btn 2 */}
        <label className="margin-right">
          <input
            name="group1"
            type="radio"
            value="movie"
            onClick={this.handleRadio}
          />
          <span>Only films</span>
        </label>
        {/* Btn 3 */}
        <label className="margin-right">
          <input
            name="group1"
            type="radio"
            value="series"
            onClick={this.handleRadio}
          />
          <span>Only series</span>
        </label>
      </form>
    );
  }
}

export default RadioBtn;
