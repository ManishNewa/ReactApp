export default function BaseButton({ label, className, type }) {
    if (['primary', 'secondary'].includes(type)) {
        className = `${type}-button`;
    } else if (!className) {
        // default class
        className = 'primary-button';
    }
    return <button className={className}>{label}</button>;
}
