export default function Summary({ image, title, content, id }) {
  return (
    <div className="summary">
      <div className="summary-image">
        <img id={id} src={image} alt="summary" />
      </div>
      <div className="summary-text">
        <h1 style={{ borderBottom: "1px solid black", paddingBottom: "15px" }}>
          {title}
        </h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
