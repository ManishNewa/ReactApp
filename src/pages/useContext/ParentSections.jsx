import { ParentSection } from './ParentSection';

const lessons = [
  {
    title: 'Frontend family',
    children: ['React', 'CSS', 'Accessibility'],
  },
  {
    title: 'Backend family',
    children: ['Node.js', 'APIs', 'Databases'],
  },
  {
    title: 'Creative family',
    children: ['Design', 'Writing', 'Photography'],
  },
];

export function ParentSections() {
  return (
    <section className="grid gap-4 md:grid-cols-3" aria-label="Lesson groups">
      {lessons.map((lesson) => (
        <ParentSection key={lesson.title} lesson={lesson}  />
      ))}
    </section>
  );
}