const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/* // import * as enzyme from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Adapter from "enzyme-adapter-react-15";


configure({ adapter: new Adapter() }); */
