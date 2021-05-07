
import React from 'react';
import data from './dataSet';
import Todo from './Todo';

class App extends React.Component{

    constructor(){
        super()
        this.state={
            newData: data

        }
    }
    handleCheck(id){
        this.setState((oldData) => {
          const upDateData= oldData.newData.map((item)=>{
                if(item.id===id){
                    item.completed= !item.completed
                }
                return item

            })
            return ({
                newData: upDateData})

        })

    }

    render(){
        const work=data.map((item) =>{return(<Todo key={item.id} chore={item.text} id = {item.id} isCompleted={item.completed} handleCheck={this.handleCheck}/>)})
        return(
            <div>
            <h3>TO-DO LIST</h3>
            {work}
            </div>
        )
    }
}


export default App;