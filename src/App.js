import React, { Component } from "react";
import ParkCard from "./components/ParkCard";
import Body from "./components/Body";
import Header from "./components/Header";
import parks from "./parks.json";

class App extends Component {
    state = {
        parks,
        score: 0,
        highscore: 0
    };

    //scoring
    clickCount = id => {
        this.state.parks.find((h, i) => {
            if (h.id === id) {
                if (parks[i].count === 0) {
                    parks[i].count = parks[i].count + 1;
                    this.setState({ score: this.state.score + 1 }, function () {
                        console.log(this.state.score);
                    });
                    this.state.parks.sort(() => Math.random() - 0.5)
                    return true;
                } else {
                    this.endGame();
                }
            }
        });
    }


    //endgame
    endGame = () => {
        if (this.state.score > this.state.highscore) {
            this.setState({ highscore: this.state.score }, function () {
                console.log(this.state.highscore);
            });
        }
        this.state.parks.forEach(ParkCard => {
            ParkCard.count = 0;
        });
        alert(`Game Over! The Final Score:\n ${this.state.score}`);
        this.setState({ score: 0 });
        return true;
    }

    //render parks
    render() {
        return (
            <Body>
                <Header score={this.state.score} highscore={this.state.highscore}>National Parks Clicky Game</Header>
                {this.state.parks.map(PCard => (
                    <ParkCard
                        clickCount={this.clickCount}
                        id={PCard.id}
                        key={PCard.id}
                        image={require(`${PCard.image}`)}
                    />
                ))}
            </Body>
        );
    }
}

export default App;