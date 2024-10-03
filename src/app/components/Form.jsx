const Form = () => {
  function handleForm(event) {
    event.target.preventDefault();
    event.target.reset();
  }
  return (
    <Form onSubmit={handleForm}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your nxt task"
        />
      </label>

      <button>
        <span>Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </Form>
  );
};

export default Form;
