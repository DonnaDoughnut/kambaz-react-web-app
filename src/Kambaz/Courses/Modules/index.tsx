import { useState, useEffect } from "react";
import { BsGripVertical } from "react-icons/bs";
import ModuleControls from "./ModulesControls";
import { FormControl, ListGroup } from "react-bootstrap";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
// import * as db from "../../Database";
// import { v4 as uuidv4 } from "uuid";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [ moduleName, setModuleName ] = useState("");
  // const [ modules, setModules ] = useState<any[]>(db.modules);
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  // const addModule = () => {
  //   setModules([ ...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] }]);
  //   setModuleName("");};
  // const deleteModule = (moduleId: string) => {
  //   setModules(modules.filter((m) => m._id !== moduleId));};
  // const editModule = (moduleId: string) => {
  //   setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));};
  // const updateModule = (module: any) => {
  //   setModules(modules.map((m) => (m._id === module._id ? module : m)));};
 

  // *********************
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  }
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const createModuleForCourse = async () => {
    if (!cid) return;
    console.log(!cid);
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  // *********************

  return ( 
    <div>
      <ModuleControls setModuleName={setModuleName} moduleName={moduleName} 
                      addModule={createModuleForCourse} />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: any) => (
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} 
              {/* { !module.editing && module.name } */}
              {  module.editing && (
                  <FormControl className="w-50 d-incline-block"
                                onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  saveModule({ ...module, editing: false });
                                }
                                }}
                                defaultValue={module.name}/>
              )}
                <ModuleControlButtons moduleId={module._id} 
                                      deleteModule={(moduleId) => removeModule(moduleId)}
                                      editModule={(moduleId) => dispatch(editModule(moduleId))} />
            </div>
              {module.lessons && (
                <div className="wd-lessons">
                  {module.lessons.map((lesson: any) => (
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </ListGroup.Item>
                  ))}
                </div>
              )}
            </ListGroup.Item>
          ))}
          
        
      </ListGroup>
    </div>

      
  );}

//   SECOND UPDATES:
// <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//   <div className="wd-title p-3 ps-2 bg-secondary">
//     <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
//   </div>
//   <ListGroup className="wd-lessons rounded-0">
//     <ListGroup.Item className="wd-lesson p-3 ps-1">
//       <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
//     </ListGroup.Item>
//     <ListGroup.Item className="wd-lesson p-3 ps-1">
//       <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
//     </ListGroup.Item>
//     <ListGroup.Item className="wd-lesson p-3 ps-1">
//       <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
//     </ListGroup.Item>
//   </ListGroup>
// </ListGroup.Item>
// <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//   <div className="wd-title p-3 ps-2 bg-secondary">
//   <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
//   </div>
//   <ListGroup className="wd-lessons rounded-0">
//     <ListGroup.Item className="wd-lesson p-3 ps-1">
//       <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
//     </ListGroup.Item>
//     <ListGroup.Item className="wd-lesson p-3 ps-1">
//       <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
//     </ListGroup.Item>
//   </ListGroup>



  // INITIAL UPDATES:  
  // <div>
  //       {/* Implement Collapse All button, View Progress button, etc. */}
  //       <ul id="wd-modules">
  //         <li className="wd-module">
  //           <div className="wd-title">Week 1</div>
  //           <ul className="wd-lessons">
  //             <li className="wd-lesson">
  //               <span className="wd-title">LEARNING OBJECTIVES</span>
  //               <ul className="wd-content">
  //                 <li className="wd-content-item">Introduction to the course</li>
  //                 <li className="wd-content-item">Learn what is Web Development</li>
  //               </ul>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="wd-module">
  //           <div className="wd-title">Week 2</div>
  //           <ul className="wd-lessons">
  //             <li className="wd-lesson">
  //               <span className="wd-title">LEARNING OBJECTIVES</span>
  //               <ul className="wd-content">
  //                 <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
  //                 <li className="wd-content-item">Deploy the assignment to Netlify</li>
  //               </ul>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="wd-module">
  //           <div className="wd-title">Week 3</div>
  //         </li>
  //       </ul>
  //     </div>
  