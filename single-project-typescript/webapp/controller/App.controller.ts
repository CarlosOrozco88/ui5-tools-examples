import MessageBox from 'sap/m/MessageBox';
import Controller from 'sap/ui/core/mvc/Controller';

/**
 * @namespace example.singleProjectTypescript.controller
 */
export default class App extends Controller {
  onInit() {
    MessageBox.success('It works');
  }
}