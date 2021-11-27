export default function Summary({ image, title, content, style, id }) {
  return (
    <div className="summary">
      <div className="summary-image">
        <img id={id} src={image} alt="summary" />
      </div>
      <div className="summary-text">
        <h1 style={style}>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
