import s from "./Result.module.css";

export default function Result(props) {
  return props.result ? (
    <>
      {" "}
      <p className={s.result}>
        Розрахунковий час <span className={s.tPSpan}>{props.tP} сек.</span>
        <br />
        Похибка ЗКО -<span className={s.resultSpan}> {props.result}%</span>
      </p>
      <p className={s.tP}>
        {props.result < 0 ? `ЗКО перераховує` : `ЗКО недораховує`}.
      </p>
    </>
  ) : (
    <p className={s.noResult}>Введіть дані для обчислення</p>
  );
}
