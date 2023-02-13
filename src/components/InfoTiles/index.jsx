import { useEffect, useState } from "react";
import BoxWrapper from "../BoxWrapper";
import styles from "./styles.module.scss";

const InfoTiles = () => {
  const [time, setTime] = useState("");

  const [ampm, setAMPM] = useState("");
  useEffect(() => {
    const today = new Date();
    let hours = today.getHours();

    setAMPM(hours >= 12 ? "PM" : "AM");
    hours = today.getHours() % 12;
    hours = hours ? hours : 12;
    const curTime = hours + ":" + today.getMinutes();
    setTime(curTime);
  }, []);

  return (
    <div className={styles.infoTiles}>
      <BoxWrapper>
        <h1>{time}</h1>
        <span className={styles.clockSub}>{ampm}</span>
      </BoxWrapper>
      <BoxWrapper>
        <h2>Weather</h2>
      </BoxWrapper>
    </div>
  );
};

export default InfoTiles;
