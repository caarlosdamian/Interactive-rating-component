import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Container } from "../../components/Container/Container";
import { values } from "../../utils/data";
import Start from "../../images/icon-star.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  const [checked, setChecked] = useState("0");

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  return (
    <Container className="container home">
      <>
        <Container className="img-container">
          <img src={Start} alt="" />
        </Container>
        <h1 className="card-header">How did we do?</h1>
        <span className="card-subtitle">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </span>
        <Container className="checkbox-container">
          {values.map((item) => (
            <Checkbox
              key={item.id}
              label={item.id}
              defaultValue={item.value}
              placeholder={item.id}
              onChange={onChangeEvent}
              checked={checked}
            />
          ))}
        </Container>
        <Link className="router-link" to="/Interactive-rating-component/thanks" state={checked}>
          <Button className="button">SUBMIT</Button>
        </Link>
      </>
    </Container>
  );
};
