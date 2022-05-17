import { useState } from "react";

import styles from "../styles/WeatherForm.module.css";

export default function WeatherForm({onChangeCity}) {
  const [city, setCity] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input onChange={handleChange} type="text" className={styles.input} />
    </form>
  );
}