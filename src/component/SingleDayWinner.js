import React from 'react'
import moment from 'moment'
// import '../Animate.css'
import '../Responsive.css'

export default(props) => {
    let dd = moment(props.drawDate).format('ll').split(' ');
    dd[1] = dd[1].slice(0,dd[1].length-1)
    if (props.index === 0) {
        return (
            <div
                key={props.drawDate}
                style={{
                display: 'flex'
            }}>
                <div className="block">
                    <div>
                        <p className="titleFontSize">Winning Numbers</p>
                    </div>
                    <div
                        className="z-depth-4 highlightedBlockLeft">
                        <div
                            className="fontOfDate"
                        >{dd[0]} {dd[1]}</div>
                        <div style={{display:'flex', alignSelf:'flex-end'}}>
                        {props
                            .winningNumbers
                            .map((single) => {
                                return <div className="heart animated css latestWinningNumbers">{single}</div>
                            })}
                        </div>
                        
                    </div>

                </div>
                <div>
                    <div>
                        <p className="titleFontSize_mega">Mega</p>
                    </div>
                    <div className="highlightedBlockRight">
                        <div className='megaNumber heart animated css' >{props.megaBall}</div>
                    </div>

                </div>

            </div>
        )
    } else {
        let dd = moment(props.drawDate).format('ll').split(' ');
    dd[1] = dd[1].slice(0,dd[1].length-1)
        return (
            <div style={{
                display: 'flex',
                justifyContent:'space-around'

            }}>
                <div className="fontOfDate black-text">{dd[0]} {dd[1]}</div>
                <div style={{display:'flex'}}>
                {props
                    .winningNumbers
                    .map((single) => {
                        return <div className='otherWinningNumbers'>{single}</div>
                    })}
                </div>
                
                <div className='megaNumber heart css animated'>{props.megaBall}</div>
            </div>
        )
    }
}