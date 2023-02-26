import { Component } from "react";
import Result from "../result/Result";
import s from "./Calculator.module.css";

export default class Calculator extends Component {
  state = {
    errorCalculation: 0,
    transformationCoefficient: 1,
    tP: 0,
  };

  reset(evt) {
    evt.currentTarget.closest("form").reset();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const becameCounter = evt.currentTarget.A.value;
    const connectedPower = evt.currentTarget.P.value;
    const numberOfMeasuredPulses = evt.currentTarget.N.value;
    const measureTime = evt.currentTarget.TF.value;
    const transformationCoefficient =
      evt.currentTarget.transformationCoefficient.value;
    const tP = (
      ((3600 * numberOfMeasuredPulses) / (becameCounter * connectedPower)) *
      transformationCoefficient
    ).toFixed(2);

    const errorCalculation = (((measureTime - tP) / tP) * 100).toFixed(2);

    this.setState((state) => ({
      errorCalculation: errorCalculation,
      tP,
    }));
    console.log(tP, errorCalculation);
  };

  render() {
    return (
      <>
        {" "}
        <form onSubmit={this.handleSubmit} className={s.form}>
          <label>
            Стала лічильника{" "}
            <input
              placeholder="A імп/кВт*год"
              type="number"
              name="A"
              required
            />
          </label>

          <label>
            Приєднана потужність
            <input
              placeholder="P кВт"
              type="number"
              name="P"
              required
              step="0.01"
            />
          </label>

          <label>
            {" "}
            Кількість виміряних імпульсів
            <input placeholder="n" type="number" name="N" required />
          </label>

          <label>
            Виміряний час
            <input
              placeholder="t(ф) сек"
              type="number"
              name="TF"
              required
              step="0.01"
            />
          </label>
          <label>
            Коефіцієнт трансформації
            <input
              type="number"
              name="transformationCoefficient"
              required
              defaultValue={this.state.transformationCoefficient}
            />
          </label>

          <div className={s.control}>
            <button className={s.calculate} type="submit">
              Обчислити
            </button>
            <button className={s.reset} type="button" onClick={this.reset}>
              Скинути
            </button>
          </div>
        </form>
        <Result result={this.state.errorCalculation} tP={this.state.tP} />
      </>
    );
  }
}
