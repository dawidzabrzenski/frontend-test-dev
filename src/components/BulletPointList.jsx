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
      <h2>BLOK PIERWSZY</h2>
      <div>
        {options.map((option) => (
          <div>
            <input
              name="options"
              type="radio"
              value={option.value}
              key={option.value}
              // checked={value === opt}
            ></input>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BulletPointList;
