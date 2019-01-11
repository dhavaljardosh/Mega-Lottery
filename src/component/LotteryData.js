import React, {Component} from 'react'
import SingleDayWinner from './SingleDayWinner';
import '../Responsive.css'
export default class LotteryData extends Component {
    constructor() {
        super();
        this.state = {
            top_four_data: []
        }
    }

    componentWillMount() {
        fetch('https://data.ny.gov/resource/h6w8-42p9.json')
            .then(res => res.json())
            .then(data => {
                let lastFourResults = [];
                for (let i = 0; i < 4; i++) {
                    lastFourResults.push(data[i]);
                }
                console.log(lastFourResults);
                this.setState({top_four_data: lastFourResults})
            })
    }

    render() {

        return (
            <div style={style.outerBox}>
                <div
                className="card z-index-4 outerBox">
                    {this
                        .state
                        .top_four_data
                        .map((single, index) => {
                            let {winning_numbers, draw_date, mega_ball} = single;
                            winning_numbers = winning_numbers.split(' ');
                            return <SingleDayWinner
                                winningNumbers={winning_numbers}
                                drawDate={draw_date}
                                index={index}
                                megaBall={mega_ball}/>
                        })}
                </div>
            </div>
        )
    }
}

const style = {
    outerBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}