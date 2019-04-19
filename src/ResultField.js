import React from "react"

class ResultField extends React.Component{
    render(){
        return(
            <div className="list">
                <span style={{fontSize:60}}>{this.props.symbol} </span>
                <span style={{fontSize:30}}>{this.props.name}</span>
            </div>
        )
    }
}

export default ResultField