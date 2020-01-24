import React, { Component } from 'react';


export default class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 1,  
            method: 'add',           
            base : 0,
        }

        this.Counting = this.Counting.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.handleSelector = this.handleSelector.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleBase = this.handleBase.bind(this); 
    }

    handleBase(event)
    {
        this.setState({
            base: event.target.value
        })
    }

    handleSubmit(event)
    {
        event.prevent.Default();  
    }

    handleSelector(event){
        this.setState({
            method: event.target.value
        })
        
    }

    handleChange(event){
        if(event.target.value < 1001){
            this.setState({
                number: event.target.value
            })
        } else {
            this.setState({
                number: 1000
            })
        }
        
    }


    

    Counting() {
        var start = Number(this.state.base);
        var counter = Number(this.state.number)

        if(this.state.method === "add"){
            this.setState({  base: start + counter})
        } else {
            this.setState({ base: start - counter})
        }
        // console.log("this is the result: ", this.state.base); 
        console.log("this should be what you wrote in the text", this.state.number)
    }

    

    


    
    render() {
    return (
        <div className='button'>
            <div className="settings">
                <form onSubmit={this.handleSubmit}>
                    <div className = "settingsBar">
                        <div className = "counterText">
                            <input 
                                type="float"
                                // name = "counter"
                                placeholder="count"
                                value={this.state.number}
                                onChange={this.handleChange}                        
                            />
                        </div>
                        <div className = "decideMeans">
                            
                            <select value={this.state.value} onChange={this.handleSelector}>
                                    <option value="add">Add</option>
                                    <option value="subtract">Substract</option>
                            </select> 
                            
                        </div>
                    </div>
                </form>
            </div>
            <div className='circle'>
                <button
                    onClick={this.Counting}
                >
                    <div className="button-words">
                        <div className="button-words-text">
                            {this.state.method}
                        </div>
                    </div>
                </button>
            </div>

            
         
            <div className='total-of-button'>
                <div className = "baseText">
                    
                    <input 
                        type="float"
                        // name = "counter"
                        placeholder="total"
                        value={this.state.base}
                        onChange={this.handleBase}                        
                    />
                    
                </div>
                
            </div>
        </div>
    );
    }
}
