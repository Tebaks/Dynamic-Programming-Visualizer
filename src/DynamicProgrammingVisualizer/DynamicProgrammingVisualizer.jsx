import React, { Component } from 'react';
import Node from './Node/Node';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'

import './DynamicProgrammingVisualizer.css';

export default class DynamicProgrammingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            isWorking: false,
            money: 12,
        };
    }

    componentDidMount() {
        console.log(this.state.money)
        const grid = getInitialGrid(this.state.money);
        this.setState({ grid });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.money !== prevState.money) {
            const money = this.state.money
            const grid = getInitialGrid(money);
            this.setState({ grid });
        }
    }

    setGridClass(grid) {

    }
    clear() {
        if (this.state.isWorking !== true) {
            const { grid } = this.state
            const money = this.state.money
            for (let row = 1; row < 5; row++) {

                for (let col = 1; col < parseInt(money) + parseInt(2); col++) {
                    setTimeout(() => {
                        const node = document.getElementById(`node-${grid[row][col].row}-${grid[row][col].col}`)
                        grid[row][col].number = 0;
                        node.className = `node`;
                        this.setState({ grid })
                    }, 50 * col + row * 500)

                }
            }
            this.setState({ grid })
        }
    }
    makeZero(money) {
        const { grid } = this.state
        for (let row = 1; row < 5; row++) {

            for (let col = 1; col < parseInt(money) + parseInt(2); col++) {
                const node = document.getElementById(`node-${grid[row][col].row}-${grid[row][col].col}`)
                grid[row][col].number = 0;
                node.className = `node`;
            }
        }
        this.setState({ grid })
    }
    getNumberOfWays(coins) {
        if (this.state.isWorking !== true) {
            const money = this.state.money
            this.setState({ isWorking: true })
            this.makeZero(money)
            const { grid } = this.state
            for (let x = 1; x < 5; x++) {
                setTimeout(() => {
                    grid[x][1].number = 1;
                    document.getElementById(`node-${grid[x][1].row}-${grid[x][1].col}`).className = 'node node-visited';
                    this.setState({ grid })
                }, 100 * x)

            }
            grid[0][0].number = 0
            document.getElementById(`node-${grid[0][0].row}-${grid[0][0].col}`).className = 'out-node';
            grid[1][0].number = 0
            document.getElementById(`node-${grid[1][0].row}-${grid[1][0].col}`).className = 'out-node';
            for (let x = 2; x < 5; x++) {
                grid[x][0].number = coins[x - 2]
                document.getElementById(`node-${grid[x][0].row}-${grid[x][0].col}`).className = 'out-node';
            }
            for (let y = 1; y < parseInt(money) + parseInt(2); y++) {
                grid[0][y].number = y - 1;
                document.getElementById(`node-${grid[0][y].row}-${grid[0][y].col}`).className = 'out-node';
            }
            this.setState({ grid })

            for (let x = 1; x < 5; x++) {
                for (let y = 1; y < parseInt(money) + parseInt(2); y++) {
                    if (x > 1) {
                        if (y - coins[x - 2] < 1) {
                            setTimeout(() => {
                                grid[x][y].number = grid[x - 1][y].number
                                document.getElementById(`node-${grid[x][y].row}-${grid[x][y].col}`).className = 'node node-visited';
                                this.setState({ grid })
                            }, 100 * y + (x - 1) * money * 100)

                        } else {
                            setTimeout(() => {
                                grid[x][y].number = grid[x - 1][y].number + grid[x][y - coins[x - 2]].number
                                document.getElementById(`node-${grid[x][y].row}-${grid[x][y].col}`).className = 'node node-visited';
                                this.setState({ grid })
                            }, 100 * y + (x - 1) * money * 100)

                        }
                    }
                }

                if (x === 3) {
                    setTimeout(() => {
                        this.setState({ isWorking: false })
                    }, x * money * 150)
                }
            }
            var answerCol = 0;
            var answerRow = 0;
            var maxWay = 0;
            setTimeout(() => {
                for (let x = 1; x < parseInt(money) + parseInt(2); x++) {
                    if (grid[4][x].number >= maxWay) {
                        answerCol = grid[4][x].col;
                        answerRow = grid[4][x].row;
                        maxWay = grid[4][x].number;
                    }
                }
                document.getElementById(`node-${answerRow}-${answerCol}`).className = 'answer';
            }, money * 120 * 4)






        }

    }
    myChangeHandler = (event) => {

        var str = event.target.value

        console.log(isNaN(str))
        if (isNaN(str) || str === '' || this.state.isWorking) {

        } else {
            this.setState({ money: event.target.value })
        }

    }


    render() {
        const { grid } = this.state;
        return (
            <>

                <AwesomeButtonSocial target="_blank" href="https://github.com/Tebaks" type="github"  >
                    Other Works
            </AwesomeButtonSocial>


                <AwesomeButtonSocial target="_blank" href="https://www.linkedin.com/in/kenanabbak/" type="linkedin" >
                    Kenan Abbak
            </AwesomeButtonSocial>

                <div className="main-text">Find how many ways to make a change {this.state.money}$ with 1$, 2$ and 5$</div>
                <form>
                    <p style={{ fontSize: "30px" }}>Enter money amount (1-25 optimum):</p>
                    <input
                        style={{ fontSize: "20px", fontWeight: "bolder", border: "5px double black", textAlign: "center" }}
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                </form>
                <AwesomeButton size="large" style={{ right: "30px", top: "30px" }} type="primary" onPress={() => this.getNumberOfWays([1, 2, 5])}>
                    Find
            </AwesomeButton>
                <AwesomeButton size="large" style={{ left: "30px", top: "30px" }} type="secondary" onPress={() => this.clear()}> Clear</AwesomeButton>

                <div className="grid">
                    {grid.map((row, rowIdx) => {
                        return (
                            <div key={rowIdx}>
                                {
                                    row.map((node, nodeIdx) => {
                                        const { row, col, number } = node;
                                        return (
                                            <Node key={nodeIdx} col={col} row={row} number={number}>{number}</Node>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </div>
            </>
        );

    }

}
const getInitialGrid = (money) => {
    const grid = [];

    for (let row = 0; row < 5; row++) {
        const currentRow = [];
        for (let col = 0; col < parseInt(money) + parseInt(2); col++) {
            currentRow.push(createNode(col, row));
        }
        grid.push(currentRow);
    }
    return grid;
};
const createNode = (col, row) => {
    return {
        col,
        row,
        number: 0,
    };
};