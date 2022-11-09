import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function AddTask(params) {
  return (
    <div className="form">
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
          } catch (err) {
            console.log("Error: " + err);
          }
        }}
      >
        {({ handleChange, handleSumbit }) => (
          <Form onSubmit={handleSumbit}>
            <label htmlFor="">Titulo</label>
            <input
              type="text"
              name="title"
              placeholder="Titulo de la nota"
              onChange={handleChange}
            />
            <label htmlFor="">Contenido</label>
            <input
              type="text"
              name="content"
              placeholder="Contenido de la nota"
              onChange={handleChange}
            />
            <input type="submit" value="enviar" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddTask;
