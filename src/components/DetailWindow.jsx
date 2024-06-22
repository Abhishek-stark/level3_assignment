import React from "react";

const DetailWindow = () => {
  let FormData = Object.values(JSON.parse(localStorage.getItem("Userdata")));
  let formkey = Object.keys(JSON.parse(localStorage.getItem("Userdata")));
  let newdata = JSON.parse(localStorage.getItem("data"));
  let questionData = newdata?.data;

  return (
    <div className="container ct">
      <section>
        <div className="card">
          <div className="card-header">Form Details </div>
          <ul className="list-group list-group-flush">
            {FormData.map(
              (datas, index) =>
                datas && (
                  <li className="list-group-item" key={index}>
                    Your &nbsp;{formkey[index].toLowerCase()} : &nbsp; &nbsp;
                    &nbsp;
                    {datas}
                  </li>
                )
            )}
          </ul>
        </div>
      </section>
      <div className="card" style={{ width: "90%vw" }}>
        <div className="card-header">Survey Question for {FormData[2]}</div>
        <ul className="list-group list-group-flush">
          {questionData.map(
            (datas, index) =>
              datas && (
                <li className="list-group-item" key={index}>
                  {index + 1} &nbsp; : &nbsp; {datas}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default DetailWindow;
