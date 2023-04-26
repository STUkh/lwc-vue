const Test = (props) => (
    <>
      <div on:click={props.triggerEvent}>
        <span>Hello from </span> <strong>{props.name}</strong>
      </div>
      <div>Title: {props.title}</div>
    </>
  );

export default Test;