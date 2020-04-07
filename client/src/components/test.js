import React,{Component} from 'react';

import './test.css';
class Test extends Component
{
    constructor()
    {
        super();
        this.state={
            text:""
        }
    }
componentDidMount()
{
    fetch('/abc').then(res=>res.json()).then(result=>
        this.setState({text:result},()=>
        {
            console.log("Result",result)
        }));
}
    render()
    {
        return(
            <div>
                <h1>
                    Hello
                </h1>
            </div>
        );
    }
}
export default Test;
