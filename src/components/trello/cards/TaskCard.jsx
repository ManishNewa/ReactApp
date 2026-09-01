import { useState } from 'react';

export function TaskCard({
    task,
    deleteTask,
    DraggedTaskId,
    DragPreviewElement,
    DragOffset,
}) {
    const [isDragging, setIsDragging] = useState(false);
    const handleDrag = (e) => {
        DraggedTaskId.current = task.id;
        const DragPreviewEl = e.currentTarget.cloneNode(true);

        const realEl = e.currentTarget.getBoundingClientRect();

        const offset = {
            x: e.clientX - realEl.left,
            y: e.clientY - realEl.top,
        };

        DragOffset.current = offset;

        DragPreviewEl.classList.add('is-drag-preview');
        DragPreviewEl.style.width = `${realEl.width}px`;
        DragPreviewEl.style.height = `${realEl.height}px`;

        DragPreviewElement.current = DragPreviewEl;
        document.body.appendChild(DragPreviewEl);

        setIsDragging(true);
    };

    const handleDragEnd = () => {
        DraggedTaskId.current = null;
        setIsDragging(false);

        if (!!DragPreviewElement.current) {
            DragPreviewElement.current.remove();
            DragPreviewElement.current = null;
        }
    };

    return (
        <div
            draggable
            className={`task-card ${isDragging ? 'is-placeholder' : ''}`}
            onDragStart={handleDrag}
            onDragEnd={handleDragEnd}
        >
            <p className="task-title mb-1">{task.title}</p>
            <p className="task-description mb-2">{task.description}</p>
            <div className="d-flex align-items-center justify-content-between gap-2">
                <span
                    className={`status-badge status-${task.status}`}
                    aria-label={`Status: ${task.status}`}
                >
                    {task.status}
                </span>
                <button
                    type="button"
                    className="delete-task-btn"
                    onClick={() => deleteTask(task.id)}
                >
                    <i class="fa-solid fa-trash-can"> </i>
                </button>
            </div>
        </div>
    );
}
