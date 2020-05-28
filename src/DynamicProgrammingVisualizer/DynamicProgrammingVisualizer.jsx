import React, { Component } from 'react';
import Node from './Node/Node';

import './DynamicProgrammingVisualizer.css';

export default class DynamicProgrammingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            isWorking: false,
        };
    }

    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({ grid });
    }
    clear() {
        if (this.state.isWorking != true) {
            const { grid } = this.state
            for (let row = 0; row < 4; row++) {

                for (let col = 0; col < 12; col++) {
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
    makeZero() {
        const { grid } = this.state
        for (let row = 0; row < 4; row++) {

            for (let col = 0; col < 12; col++) {
                const node = document.getElementById(`node-${grid[row][col].row}-${grid[row][col].col}`)
                grid[row][col].number = 0;
                node.className = `node`;


            }
        }
        this.setState({ grid })
    }
    getNumberOfWays(coins, money) {
        if (this.state.isWorking != true) {
            this.setState({ isWorking: true })
            this.makeZero()
            const { grid } = this.state
            for (let x = 0; x < 4; x++) {
                setTimeout(() => {
                    grid[x][0].number = 1;
                    document.getElementById(`node-${grid[x][0].row}-${grid[x][0].col}`).className = 'node node-visited';
                    this.setState({ grid })
                }, 100 * x)

            }

            for (let x = 0; x < 4; x++) {
                for (let y = 0; y < 12; y++) {
                    if (x > 0) {
                        if (y - coins[x - 1] < 0) {
                            setTimeout(() => {
                                grid[x][y].number = grid[x - 1][y].number
                                document.getElementById(`node-${grid[x][y].row}-${grid[x][y].col}`).className = 'node node-visited';
                                this.setState({ grid })
                            }, 400 + 100 * y + x * 1000)

                        } else {
                            setTimeout(() => {
                                grid[x][y].number = grid[x - 1][y].number + grid[x][y - coins[x - 1]].number
                                document.getElementById(`node-${grid[x][y].row}-${grid[x][y].col}`).className = 'node node-visited';
                                this.setState({ grid })
                            }, 400 + 100 * y + x * 1000)

                        }
                    }
                }
                if (x == 3) {
                    setTimeout(() => {
                        this.setState({ isWorking: false })
                    }, x * 1500)
                }
            }

            this.setState({ grid })

        }

    }


    render() {
        const { grid } = this.state;
        return (
            <>
                <button onClick={() => this.clear()}>
                    Clear All
                </button>
                <button onClick={() => this.getNumberOfWays([1, 2, 5], 11)}>
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
const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 4; row++) {
        const currentRow = [];
        for (let col = 0; col < 12; col++) {
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
    };
};