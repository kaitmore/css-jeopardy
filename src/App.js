import React, { Component } from "react";

import Grid from "./components/Grid";
import AppWrapper from "./components/AppWrapper";
import GlobalStyle from "./components/GlobalStyle";
import Cards from "./Cards";
import Categories from "./Categories";

import { questions, categories } from "./data";
import FullScreen from "./components/FullScreen";

class App extends Component {
  state = { selectedCardID: null, visitedCards: [] };

  onSetSelectedCardID = selectedCardID => {
    if (selectedCardID === this.state.selectedCardID) {
      this.setState({ selectedCardID: null });
    } else {
      this.setState(prevState => ({
        selectedCardID,
        visitedCards: [...prevState.visitedCards, selectedCardID]
      }));
    }
  };

  render() {
    console.log(this.state.visitedCards);
    return (
      <AppWrapper>
        <GlobalStyle />
        <Grid>
          <Categories categories={categories} />
          <Cards
            questions={questions}
            visitedCards={this.state.visitedCards}
            selectedCardID={this.state.selectedCardID}
            onSetSelectedCardID={this.onSetSelectedCardID}
          />
          {this.state.selectedCardID && (
            <FullScreen
              onClick={() =>
                this.onSetSelectedCardID(this.state.selectedCardID)
              }
              isDailyDouble={questions[this.state.selectedCardID].dailyDouble}
            >
              {questions[this.state.selectedCardID] && [
                questions[this.state.selectedCardID].q,
                questions[this.state.selectedCardID].img && (
                  <img src={questions[this.state.selectedCardID].img} />
                )
              ]}
            </FullScreen>
          )}
        </Grid>
      </AppWrapper>
    );
  }
}

export default App;
