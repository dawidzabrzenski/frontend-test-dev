import { useState } from "react";

function BulletPointList() {
  const options = [
    {
      value: "firstOption",
      label: "Opcja pierwsza",
    },
    {
      value: "secondOption",
      label: "Opcja druga",
    },
    {
      value: "randomOption",
      label: "Opcja losowa",
    },
  ];

  const [value, setValue] = useState(null);

  return (
    <section className="list">
      <h3 className="block-title">BLOK PIERWSZY</h3>
      <div className="list__container">
        {options.map((option) => (
          <div className="list__container__radio">
            <input
              className="list__container__radio__element"
              name="options"
              type="radio"
              value={option.value}
              key={option.value}
              checked={value === option.value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <label
              className="list__container__radio__label"
              htmlFor={option.value}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BulletPointList;
