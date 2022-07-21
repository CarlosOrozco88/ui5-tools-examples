import Button from 'sap/m/Button';
import MessageBox from 'sap/m/MessageBox';
import Event from 'sap/ui/base/Event';
import Controller from 'sap/ui/core/mvc/Controller';

/**
 * @namespace example.Z_TYPESCRIPT2.controller
 */
export default class App extends Controller {
  pressButton(oEvent: Event) {
    const oButton = oEvent.getSource() as Button;
    const sButtonText = oButton.getText();

    MessageBox.information(sButtonText);
  }
}
