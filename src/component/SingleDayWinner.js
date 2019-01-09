import React from 'react'
import moment from 'moment'
import '../Animate.css'

export default(props) => {
    const {latestWinningNumbers_style, megaNumber_style, otherWinningNumbers_style} = style;
    console.log(props.drawDate);
    if (props.index === 0) {
        return (
            <div
                key={props.drawDate}
                style={{
                display: 'flex'
            }}>
                <div className="block">
                    <div>
                        <p>Winning Numbers</p>
                    </div>
                    <div
                        className="z-depth-4"
                        style={{
                        display: 'flex',
                        justifyContent:'space-around',
                        background: 'darkorange',
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderTop: '2px solid black',
                        borderBottom: '2px solid black',
                        borderLeft: '2px solid black'
                    }}>
                        <div
                            style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0 20px',
                            color: 'white',
                            textShadow: '1px 1px 1px black',
                            fontWeight: 'bolder'
                        }}>{moment(props.drawDate).format('ll')}</div>
                        <div style={{display:'flex', alignSelf:'flex-end'}}>
                        {props
                            .winningNumbers
                            .map((single) => {
                                return <div className="heart animated css" style={latestWinningNumbers_style}>{single}</div>
                            })}
                        </div>
                        
                    </div>

                </div>
                <div>
                    <div>
                        <p>Mega Ball</p>
                    </div>
                    <div
                        style={{
                        display: 'flex',
                        background: 'darkorange',
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderRight: '2px solid black',
                        borderTop: '2px solid black',
                        borderBottom: '2px solid black'
                    }}>
                        <div style={megaNumber_style} className="heart animated css">{props.megaBall}</div>
                    </div>

                </div>

            </div>
        )
    } else {
        return (
            <div style={{
                display: 'flex',
                justifyContent:'space-around'

            }}>
                <div
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 20px',
                    color: 'black',
                    fontWeight: 'bolder'
                }}>{moment(props.drawDate).format('ll')}</div>
                <div style={{display:'flex'}}>
                {props
                    .winningNumbers
                    .map((single) => {
                        return <div style={otherWinningNumbers_style}>{single}</div>
                    })}
                </div>
                
                <div style={megaNumber_style}>{props.megaBall}</div>
            </div>
        )
    }
}

const style = {
    latestWinningNumbers_style: {
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'royalblue',
        margin: 10,
        border: '2px solid darkblue',
        borderRadius: '50%',
        fontSize: 30,
        color: 'white'
    },
    megaNumber_style: {
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'darkgreen',
        margin: 10,
        border: '2px solid black',
        borderRadius: '50%',
        fontSize: 30,
        color: 'white'
    },
    otherWinningNumbers_style: {
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'lightblue',
        margin: 10,
        border: '2px solid black',
        borderRadius: '50%',
        fontSize: 30,
        color: 'black'
    }
}