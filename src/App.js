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
    const { selectedCardID, visitedCards } = this.state;
    const currentCard = questions[selectedCardID];
    return (
      <AppWrapper>
        <GlobalStyle />
        <Grid>
          <Categories categories={categories} />
          <Cards
            questions={questions}
            visitedCards={visitedCards}
            selectedCardID={selectedCardID}
            onSetSelectedCardID={this.onSetSelectedCardID}
          />
          {selectedCardID && (
            <FullScreen
              onClick={() => this.onSetSelectedCardID(selectedCardID)}
              isDailyDouble={currentCard.dailyDouble}
            >
              {currentCard && [
                currentCard.q,
                currentCard.img && <img src={currentCard.img} />
              ]}
            </FullScreen>
          )}
        </Grid>
      </AppWrapper>
    );
  }
}

export default App;
