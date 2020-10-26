import { select, settings } from '../settings.js';
import utils from '../utils.js';
import BaseWidget from './BaseWidget.js';

class HourPicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, settings.hours.open);

    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.HourPicker.input);
    thisWidget.dom.output = thisWidget.dom.wrapper.querySelector(select.widgets.HourPicker.output);

    thisWidget.initPlugin();

    thisWidget.value = thisWidget.dom.input;
  }

  initPlugin() {
    const thisWidget = this;

    thisWidget.dom.input.addEventListener('input', function () {
      thisWidget.value = thisWidget.dom.input;
    });

    rangeSlider.create(thisWidget.dom.input);
  }

  parseValue(value) {
    return utils.numberToHour(value);
  }

  isValid() {
    return true;
  }

  renderValue() {
    const thisWidget = this;

    thisWidget.dom.output = thisWidget.value;
  }

}

export default HourPicker;
