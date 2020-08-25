import React, { Component } from "react";
import ListSteps from "../../../components/form/steps";
import "./style.scss";
import FormCreate from "./create";
import Settings from "./settings";
import { connect } from "react-redux";

const mapStateToProps = (store) => ({
  config: store.appSettings,
});
const mapDispatchToProps = (dispatch) => ({});

class OwnerPage extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.config !== this.props.config) {
      frames.APP.postMessage({ config: this.props.config });
    }
  }

  render() {
    return (
      <div id="owner">
        <ListSteps
          steps={[
            { text: "Основное" },
            { text: "Время работы" },
            { text: "Персонал" },
            { text: "Описание" },
            { text: "Доп. Опции" },
            { text: "Внешний вид" },
            { text: "Оплата" },
          ]}
        />
        <h1>Owner</h1>
        {/* <FormCreate /> */}
        <Settings />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerPage);
/* <div id="select_leng">
<p>Выберете язык который будет использоватся в програме:</p>
<Select
  defaultValue={{ value: "en-US", label: "English" }}
  options={[{ value: "en", label: "English" }]}
  onChange={(e) => i18n.changeLanguage(e.value)}
/>
</div> */
// }
