import React, { Component } from 'react';
import Node from './Node/Node';

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
        const grid = getInitialGrid(this.state.money);
        this.setState({ grid });
    }
    clear() {
        if (this.state.isWorking !== true) {
            const { grid } = this.state
            const money = this.state.money
            for (let row = 0; row < 5; row++) {

                for (let col = 0; col < money + 2; col++) {
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
        for (let row = 0; row < 5; row++) {

            for (let col = 0; col < money + 2; col++) {
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
            console.log(money)
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
            for (let y = 1; y < money + 2; y++) {
                grid[0][y].number = y - 1;
                document.getElementById(`node-${grid[0][y].row}-${grid[0][y].col}`).className = 'out-node';
            }
            this.setState({ grid })

            for (let x = 1; x < 5; x++) {
                for (let y = 1; y < money + 2; y++) {
                    if (x > 1) {
                        if (y - coins[x - 2] < 1) {
                            setTimeout(() => {
                                grid[x][y].number = grid[x - 1][y].number
                                document.getElementById(`node-${grid[x][y].row}-${grid[x][y].col}`).className = 'node node-visited';
                                this.setState({ grid })
                            }, 100 * y + x * money * 100)

                        } else {
                            setTimeout(() => {
                                grid[x][y].number = grid[x - 1][y].number + grid[x][y - coins[x - 2]].number
                                document.getElementById(`node-${grid[x][y].row}-${grid[x][y].col}`).className = 'node node-visited';
                                this.setState({ grid })
                            }, 100 * y + x * money * 100)

                        }
                    }
                }

                if (x === 3) {
                    setTimeout(() => {
                        this.setState({ isWorking: false })
                    }, x * money * 150)
                }
            }

            this.setState({ grid })

        }

    }
    myChangeHandler = (event) => {
        this.setState({ money: event.target.value })
        console.log(event.target.value)

    }


    render() {
        const { grid } = this.state;
        return (
            <>
                <button onClick={() => this.clear()}>
                    Clear All
                </button>
                <button onClick={() => this.getNumberOfWays([1, 2, 5])}>
                    Find
                </button>
                <div className="grid">
                    {grid.map((row, rowIdx) => {
                        return (
                            <div key={rowIdx}>
                                {
                                    row.map((node, nodeIdx) => {
                                        const { row, col, number } = node;
                                        return (
                                            <Node key={nodeIdx} col={col} row={row} number={number}></Node>
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
        for (let col = 0; col < money + 2; col++) {
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