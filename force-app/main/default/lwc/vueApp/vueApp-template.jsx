export default (props) => (
    <>
      <div>
        {props.items.map(({ id, title }) => {
          return (
            <button class="slds-button slds-button_brand" key={id}
                onClick={(event) => props.triggerEvent(event, 'whatever')}
            >
              Hello from <strong>{props.name}</strong> {title}
            </button>
          )
        })}
      </div>
      <div>Title: {props.title}</div>
    </>
);