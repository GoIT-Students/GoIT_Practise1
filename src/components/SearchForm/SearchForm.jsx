import { Component } from "react";
import { Input } from "@/Input";
import PropTypes from "prop-types";

export class SearchForm extends Component {
  // componentDidUpdate() {
  //   if (this.timeout !== null) {
  //     clearTimeout(this.timeout);
  //   }

  //   this.timeout = setTimeout(() => {
  //     console.log(this.state.value);
  //   }, 200);
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     value: event.target.value,
  //   });
  // };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Input isRequired />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
