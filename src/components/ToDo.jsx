import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ toDo, markDone, editTask, deleteTask }) => {
  return (
    <div>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span
                      onClick={() => markDone(task.id)}
                      title="Completed / Not Completed"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span
                      hidden={task.status}
                      title="Edit"
                      onClick={() => editTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
};

export default ToDo;
