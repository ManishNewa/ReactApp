import { useContext } from 'react';
import { ChildLesson } from './ChildLesson';
import { RandomContext } from './randomProvider';

export function ParentSection({ lesson }) {
    const { color } = useContext(RandomContext)
    return (
        <article className={`${color} rounded-lg border border-stone-200 p-5`}>
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <div className="mt-4 grid gap-2">
                {lesson.children.map((child) => (
                    <ChildLesson key={child} name={child} />
                ))}
            </div>
        </article>
    );
}