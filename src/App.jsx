import { SearchForm } from "@/SearchForm";
import { HeaderComponent } from "@/Header";
import { ImageGrid } from "@/ImageGrid";
import { fetchPhotos } from "api/api";
import { Component } from "react";

class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    query: "",
  };

  async componentDidUpdate(_, prevState) {
    if (this.state.isLoading) {
      const photos = await fetchPhotos(this.state.query);

      if (this.state.query !== prevState.query) {
        this.setState({
          photos: photos,
          isLoading: false,
        });
      } else {
        this.setState({
          ...prevState,
          photos: prevState.photos.concat(photos),
          isLoading: false,
        });
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true,
      query: event.target.elements.searchfield.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <HeaderComponent>
            <SearchForm onSubmit={this.handleSubmit} />
          </HeaderComponent>
          <ImageGrid
            images={this.state.photos}
            isLoading={this.state.isLoading}
          />
        </div>
      </>
    );
  }
}

export default App;
