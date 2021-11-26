export default function Summary({ image, title, content, id }) {
  return (
    <div className="summary">
      <div className="summary-image">
        <img id={id} src={image} alt="summary" />
      </div>
      <div className="summary-text">
        <h1
          style={{
            borderBottom: "3px solid rgb(92, 190, 247)",
            paddingBottom: "15px",
          }}
        >
          {title}
        </h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
