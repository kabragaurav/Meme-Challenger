import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      font_size: "25",
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    let randomNumber = Math.ceil(
      Math.random() * this.state.allMemeImgs.length
    );
    this.setState({ randomImg: this.state.allMemeImgs[randomNumber].url });
  };
  increaseFont = () => {};
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(data => data.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }
  render() {
    return (
      <div>
        <div className="card">
        <div class="card-body">
        <div class="md-form">

              <input
                type="text"
                name="topText"
                placeholder="Upper Text"
                id="materialFormCardNameEx" 
                class="form-control"
                onChange={this.handleChange}
                value={this.state.topText}
              />

              <br />


              <input
                type="text"
                name="bottomText"
                placeholder="Lower Text"
                id="materialFormCardNameEx" 
                class="form-control"
                onChange={this.handleChange}
                value={this.state.bottomText}
              />

              <br />

              <input
                type="number"
                min="1"
                name="font_size"
                placeholder="Select Font Size"
                id="materialFormCardNameEx" 
                class="form-control"
                onChange={this.handleChange}
                value={this.state.font_size}
              />
              <br/>
              <button  type="button" class="btn btn-outline-success btn-lg btn-block" onClick={this.handleClick}> GENERATE! </button>
          </div>
        </div>
      </div>
        <div className="meme">
          <h2
            style={{ fontSize: Number(this.state.font_size) }}
            className="top"
          >
            {this.state.topText}
          </h2>
          <img src={this.state.randomImg} lass="text-center" alt="Error in Loading!" />
          <h2
            style={{ fontSize: Number(this.state.font_size) }}
            className="bottom"
          >
            {this.state.bottomText}
          </h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;