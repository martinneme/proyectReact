import {ListGroupItem,ListGroup}  from "react-bootstrap";


export default function ItemListContainer({Task1}) {

  const taskList =  Task1.map((task) =>{
       return <ListGroupItem>{task}</ListGroupItem>});

  return (
      <ListGroup className="list-group-flush">
          <label className="taskTitle">Tareas</label>
          {taskList}
  </ListGroup>
  );
}
