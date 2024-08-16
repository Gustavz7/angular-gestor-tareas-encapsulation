import { Task } from "../interfaces/task";

export class TaskManager {
    tasks: Task[] = [];

    agregarTarea(task: Task): void {
        this.tasks.push(task)
    }

    eliminarTarea(idTarea: number): void {
        const index = this.tasks.findIndex(item => item.id === idTarea);
        index != -1 ? this.tasks.splice(index, 1) : this.throwTaskNotFoundError(idTarea);
    }

    marcarTareaCompletada(idTarea: number): void {
        const tarea = this.tasks.find(item => item.id === idTarea);
        if (tarea) {
            tarea.completed = true;
        } else {
            this.throwTaskNotFoundError(idTarea);
        }
    }

    listarTareasPorEstado(): void {
        const completadas = this.tasks.filter((item) => {
           return item.completed = true;
        });
        const noCompletadas = this.tasks.filter((item) => {
            return item.completed = false;
        });
        console.log("tareas completadas:" + completadas.length)
        console.table(completadas);

        console.log("tareas noCompletadas:" + noCompletadas.length)
        console.table(noCompletadas);
    }

    private throwTaskNotFoundError(id: number) {
        console.error("tarea con id: {id} no encontrada", id);
    }
}
