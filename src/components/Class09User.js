import React, { useState } from "react";

const Class09User = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
  });
  const { name, surname } = user;

  const handleChange = (event) => {
    console.log("key o name", event.target.name);
    console.log("valor", event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user", user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" onChange={handleChange} type="text" value={name} />
        </label>
        <br />
        <label>
          Surname
          <input
            name="surname"
            onChange={handleChange}
            type="text"
            value={surname}
          />
        </label>
        <button type="submit">Guardar</button>
      </form>
      <h4>Nombre del usuario</h4>
      <p>
        {name} {surname}
      </p>
    </div>
  );
};

export default Class09User;
