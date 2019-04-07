import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import character from "./character.json";
import Title_Area from "./components/Title_Area";
import Navbar from "./components/Navbar";


function shuffleArray(array) {

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    character,
    score: 0,
    topScore: 0,
    selected: []
  };

  handleTileClick = id => {
    if (this.state.selected.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ selected: this.state.selected.concat(id) });
    }
    else {
      this.handleGameRestart();
    }
  }
  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    const scoreCount = this.state.score + 1
    // We always use the setState method to update a component's state
    this.setState({ score: scoreCount });

    if (scoreCount >= this.state.topScore) {
      this.setState({ topScore: scoreCount })
    }
    this.handleTileShuffle()
  };

  handleTileShuffle = () => {
    let tileShuffle = shuffleArray(character);
    this.setState({ character: tileShuffle })
  }

  handleGameRestart = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      selected: []
    });
    this.handleTileShuffle();
  }
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const characters = this.state.characters.filter(character => character.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ characters });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          restart={this.handleGameRestart}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
          <Title_Area>
            <Title>Will You Claim the Iron Throne?</Title>
            <Subtitle>Click on images to earn points, but don't click on an image more than once</Subtitle>
          </Title_Area>
          {this.state.character.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
              handleTileClick={this.handleTileClick}
              handleIncrement={this.handleIncrement}
              handleTileShuffle={this.handleTileShuffle}
              handleGameRestart={this.handleGameRestart}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
