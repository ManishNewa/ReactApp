export default function BrandName({ name }) {
    const brandName = name || "StudyNest";
    return (
        <div className="brand">
            {brandName}
        </div>
    );
}
