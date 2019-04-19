import React from "react"

class ResultField extends React.Component{
    render(){
        return(
            <div className="list">
                <h2>{this.props.symbol} {this.props.name}</h2>
            </div>
        )
    }
}

export default ResultField