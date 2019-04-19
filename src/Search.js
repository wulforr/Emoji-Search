import React from "react"

class Search extends React.Component{
    render(){
        return(
            <input type="text" name="SearchField" value ={this.props.value} onChange={this.props.func} placeholder="Enter emoji name" />
        )
    }
}

export default Search