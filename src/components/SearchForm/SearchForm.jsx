import { Component } from 'react';
import { Input } from '@/Input';
import { fetchPhotos } from 'api/api';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
  }
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
        <Input />
      </form>
    );
  }
}
