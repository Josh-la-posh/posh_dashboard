import "./Updates.css";
import { UpdteData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdteData.map((data, index) => {
        return (
          <div className="update" key={index}>
            <img src={data.img} alt="IMG" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{data.name}</span>
                <span>{data.noti}</span>
              </div>
              <span>{data.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
