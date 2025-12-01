import { ProjectManager } from "../logic/ProjectManager.js";
import { board } from "./board.js";

const editDialog = document.getElementById('editDialog');
const editTitle = document.getElementById('edit-title');
const editDescription = document.getElementById('edit-description');
const editDate = document.getElementById('edit-date');
const editPriority = document.getElementById('edit-priority');
const saveBtn = document.getElementById('edit-subBtn');
const cancelBtn = document.getElementById('edit-cancelBtn');

function initEditModal() {
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        editDialog.close();
    });

    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const uid = editDialog.dataset.editingUid;
        if (!uid) return;

        const newDetail = {
            title: editTitle.value,
            description: editDescription.value,
            dueDate: editDate.value,
            priority: editPriority.value
        };

        ProjectManager.getCurProject().setTodo(uid, newDetail);
        ProjectManager.save();
        board();
        editDialog.close();
    });
}

function openEditModal(todo) {
    editTitle.value = todo.title;
    editDescription.value = todo.description;
    editDate.value = todo.dueDate;
    editPriority.value = todo.priority;
    
    // Store the UID on the dialog element itself to retrieve it later
    editDialog.dataset.editingUid = todo.uid;
    editDialog.showModal();
}

export { initEditModal, openEditModal };
