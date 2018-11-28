import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load',this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description,urls } = this.props.image;
    return (
      <div className="img-item">
        <img 
          ref={this.imageRef}
          alt={description}
          src={urls.small}
        />
      </div>
    );
  }
}

export default ImageCard;