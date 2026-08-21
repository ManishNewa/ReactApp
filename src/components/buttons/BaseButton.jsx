export default function BaseButton({label, customClass}) {
    return(
        <button className={customClass}>{label}</button>
    );
}
