import React from "react"

class Search extends React.Component{
    render(){
        return(
            <input type="text" name="SearchField" value ={this.props.value} onChange={this.props.func} />
        )
    }
}

export default Search