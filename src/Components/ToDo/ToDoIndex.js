import React, {Component} from 'react';
import { Form, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';

class ToDoIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            taskList: ['Make a ToDo List', 'Code ToDo List Out'],
            task: '',
        }
    };


    addTask = (e) => {
        e.preventDefault();
        this.setState({
            taskList: [...this.state.taskList, this.state.task],
        });
        console.log('addTask called');
        console.log(this.state.taskList);
    };

    changeHandler = (e) => {
        this.setState({
            task: e.target.value,
        })
        console.log('changeHandler called');
    };

    handleChange = (e) => {
        this.setState({
            taskList: e.target.checked,
        })
        console.log('handleChange called');
    };

    render() {
        return(
            <div>
                <h3><u>ToDo List:</u></h3>
                <br />
                <Form onSubmit={this.addTask}>
                    <Input type='text' onChange={this.changeHandler} placeholder='New Task' value={this.state.task} />
                    <br />
                    <Button type='submit'>Add Task!</Button>
                </Form>

                <TaskResult taskList={this.state.taskList} />
    
            </div>
        )
    };
};

const TaskResult = (props) => {
    console.log(props);
  
    return (
        <div>
            {props.taskList.map(
                (task, index) => (
                    <ListGroup key={index}>
                        <Input type='checkbox' onClick={(e) => this.handleChange(index)} />
                        {task}
                    </ListGroup>   
                )
            )}
        </div>
    )
};

export default ToDoIndex;