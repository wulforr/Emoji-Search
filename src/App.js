import React from "react"
import EmojiList from "./EmojiList"
import ResultField from "./ResultField"
import Search from "./Search"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            filteredEmoji:EmojiList,   
            SearchField:""
        }
        this.HandleOnChange= this.HandleOnChange.bind(this)
}

HandleOnChange(e){
    this.setState({ [e.target.name]:e.target.value})
}
    
    render(){
        let exp = new RegExp(this.state.SearchField,'i');
        let DataArray=EmojiList.map((data)=>{
            console.log(exp.test(data.keywords))
            if(exp.test(data.keywords)){
            return(
                <ResultField key={data.title} name={data.title} symbol ={data.symbol}  />
            )
            }
            else{
                return null
            }
            }
        )
        return(
            <div>
                <div className="center">
                    <div>

                    <h1>Emoji Search</h1> 
                    <Search value={this.state.SearchField} func={this.HandleOnChange} />
                    </div>
                </div>
           {DataArray}
           </div>
        )
    }
}

export default App