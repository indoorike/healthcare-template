export default function Summary({
  image,
  title,
  content,
  style,
  id,
  sectionID,
  classN,
  summaryType,
}) {
  return (
    <div className={`summary ${summaryType}`} id={sectionID}>
      <div className={`summary-image ${classN}`}>
        <img id={id} src={image} alt="summary" />
      </div>
      <div className="summary-text">
        <h1 style={style}>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
