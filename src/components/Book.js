

function Book(props) {

    return (
      <div className="Books">
          <h1 className="title">{props.title}</h1>

          <div className="InfoSection">
          <img src={props.image} alt="book cover" />
          <p className="Description">{props.description}</p>
          </div>
    </div>
  );
  
  }
  
  
  export default Book; 