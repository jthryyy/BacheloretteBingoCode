

import React from 'react';
import './App.css';
import bingoItems from './bingoItems.json';
import { Box, Typography, Card, Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import BingoHeader from './components/bingoHeader.js';
import Shuffle from './Shuffle.js'

const BingoItem = styled(Card)({
//  display: "flex-direction",
//  alignItems: 'center',
//  justifyContent: 'center',
  textAlign: 'center',
  width: "150px",
  height: "100px",
  background: 'linear-gradient(45deg, #aa647b 10%, #aa647b 100%)',
  color: 'white'
}
  )

const CompletedItem = styled(Card)({
  background: 'linear-gradient(45deg, #a73a38 30%, #a73a38 90%)',
  width: "150px",
  height: "100px",
  textAlign: 'center'})

const BingoWon = styled(Card)({
  width: "300px",
  height: "300px",
  background: "primary"
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
      20: false,
      21: false,
      22: false,
      23: false,
      24: false,
      25: false,
      26: false,
      27: false,
      28: false,

      "name0": null,
      "name1": null,
      "name2": null,
      "name3": null,
      "name4": null,
      "name5": null,
      "name6": null,
      "name7": null,
      "name8": null,
      "name9": null,
      "name10": null,
      "name11": null,
      "name12": null,
      "name13": null,
      "name14": null,
      "name15": null,
      "name16": null,
      "name17": null,
      "name18": null,
      "name19": null,
      "name20": null,
      "name21": null,
      "name22": null,
      "name23": null,
      "name24": null,
      "name25": null,
      "name26": null,
      "name27": null,
      "name28": null
    };

  }

  markComplete = e => {
    const id = e.target.id;
    this.setState({[id]: true})
  }

  bingoRow(row) {
    let rowOne = bingoItems.slice(0, 5);
    let rowTwo = bingoItems.slice(5, 10);
    let rowThree = bingoItems.slice(10, 15);
    let rowFour = bingoItems.slice(15, 20);
    let rowFive = bingoItems.slice(20, 25);
    let renderRow;
    switch (row) {
      case 1:
        renderRow = rowOne;
        break;
      case 2:
        renderRow = rowTwo;
        break;
      case 3:
        renderRow = rowThree;
        break;
      case 4:
        renderRow = rowFour;
        break;
      case 5:
        renderRow = rowFive;
        break;
      default:
        renderRow = rowOne;
      }
    return (
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" margin={0} padding={0}>
        <Grid container display="flex" justifyContent="center" alignContent="center" xs={8} spacing={2} padding={0} margin={0}>
          {renderRow.map(item => {
              const id = item.id;
              let results;
              results = <Typography variant="body1" margin={0} padding={0}></Typography>
              if (this.state[id] === true) {
                return (
                  <Grid item key={item.id}>
                    <CompletedItem>
                      {results}
                      <Typography variant='button' id={item.id} onClick={this.markComplete} gutterBottom> {item.item}</Typography>
                    </CompletedItem>
                  </Grid>
                )
              } 
              else {
                return (
                <Grid item key={item.id}>
                  <BingoItem id={item.id} onClick={this.markComplete}> 
                    <Typography variant='button' id={item.id} onClick={this.markComplete} gutterBottom>
                    {item.item}</Typography>
                  </BingoItem>
                </Grid> 
                )
              }
            }
            )
          }
        </Grid>
      </Box>
    )
  }
  
  render() {
  return (
    <>
      <BingoHeader />
      <Shuffle/>
      {this.bingoRow(1)}
      {this.bingoRow(2)}
      {this.bingoRow(3)}
      {this.bingoRow(4)}
      {this.bingoRow(5)}
    </>
  )};
}

export default App;

  //  var currentIndex = bingoItems.length,  randomIndex;
  //  while (0 !== currentIndex) {
  //    randomIndex = Math.floor(Math.random() * currentIndex);
  //    currentIndex--;
  //    [bingoItems[currentIndex], bingoItems[randomIndex]] = [
  //      bingoItems[randomIndex], bingoItems[currentIndex]];}