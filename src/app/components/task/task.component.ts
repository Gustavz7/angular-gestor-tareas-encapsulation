import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskManager } from '../../managers/task-manager';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  taskManager: TaskManager = new TaskManager();

  tituloTarea: string = '';

  agregarTarea() {
    if (this.tituloTarea.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.tituloTarea,
        completed: false,
      };
      this.taskManager.agregarTarea(newTask);
      this.tituloTarea = '';
    } else {
      console.error('titulo tarea vacio');
    }
  }

  mostrarTareas() {
    this.taskManager.listarTareasPorEstado();
  }

}
