import React from "react";
import { ImageCard } from "@/ImageCard";
import { Grid, GridItem } from "./ImageGrid.styled";

class ImageGrid extends React.Component {
  render() {
    return (
      <>
        <Grid>
          {this.props.images.map((item, index) => {
            return (
              <GridItem key={index}>
                <ImageCard src={item.src?.tiny} alt={item.alt} />
              </GridItem>
            );
          })}
        </Grid>
        {this.props.isLoading && <h2>Loading...</h2>}
      </>
    );
  }
}

export default ImageGrid;
