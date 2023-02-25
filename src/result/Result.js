import s from "./Result.module.css";

export default function Result(props) {
  return props.result ? (
    <>
      {" "}
      <p className={s.result}>Похибка: {props.result}%</p>
      <p className={s.tP}>t(p)={props.tP} сек.</p>
    </>
  ) : (
    <p className={s.noResult}>Введіть дані для обчислення</p>
  );
}
