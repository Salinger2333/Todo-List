import { ProjectManager } from "./logic/ProjectManager";

function initTestData() {
    // 默认项目肯定在 index 0
    const defaultProject = ProjectManager.getCurrentProject();
    defaultProject.addTodo({
        title: "学习 Webpack",
        description: "理解 Entry 和 Output",
        dueDate: "2023-11-11",
        priority: "high"
    });
    defaultProject.addTodo({
        title: "写代码",
        description: "完成 MainContent 模块",
        dueDate: "2023-11-12",
        priority: "normal"
    });

    // 再加一个项目测试切换功能
    ProjectManager.addProject("健身计划");
    const gymProject = projectManager.getAllProjects()[1]; // 获取刚加的这个
    gymProject.addTodo({
        title: "深蹲",
        description: "5组 x 5次",
        dueDate: "2023-11-13",
        priority: "high"
    });
}