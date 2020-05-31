import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/themes.css';
import Header from './Layout/Header';
import Aside from './Layout/Aside';
import Footer from './Layout/Footer';

import ScrollToTop from './ScrollToTop';
// Atom
import AccordionPage from './Pages/AccordionPage'
import AlertBox from './Pages/AlertBoxPage'
import BreadcrumbsPage from './Pages/BreadcrumbsPage'
import ButtonPage from './Pages/ButtonPage'
import ButtonPopoverPage from './Pages/ButtonPopoverPage'
import BoxPage from './Pages/BoxPage'
import CheckBoxPage from './Pages/CheckBoxPage'
import DatePickerPage from './Pages/DatePickerPage'
import DividerPage from './Pages/DividerPage'
import DropZonePage from './Pages/DropZonePage'
import IconPage from './Pages/IconPage'
import IconSpecialPage from './Pages/IconSpecialPage'
import MegaMenuPage from './Pages/MegaMenuPage'
import ModalBoxPage from './Pages/ModalBoxPage'
import ModalPage from './Pages/ModalPage'
import NextNavButton from './Pages/NextNavButtonPage'
import OptionBox from './Pages/OptionBoxPage'
import ProgressTracker from './Pages/TrackerPage'
import RadioButtonPage from './Pages/RadioButtonPage'
import RangeSliderPage from './Pages/RangeSliderPage'
import SearchBar from './Pages/SearchBarPage'
import SelectButtonPage from './Pages/SelectButtonPage'
import Stepper from './Pages/StepperPage'
import TabsPage from './Pages/TabsPage'
import Textfield from './Pages/TextfieldPage'
import TogglePage from './Pages/TogglePage'
import TooltipPage from './Pages/TooltipPage'
import ProgressBarPage from './Pages/ProgressBarPage'
import Pagination from './Pages/Pagination'
import TablePage from './Pages/TablePage'
// Layout
import Container from './Components/Atom/Container'
// Molecules
import RibbonPage from './Pages/RibbonPage'
import TrayPage from './Pages/TrayPage'
// Utilities
import Border from './Components/Utilities/Border'
import BoxShape from './Components/Utilities/BoxShape'
import Color from './Components/Utilities/Color'
import Display from './Components/Utilities/Display'
import Flex from './Components/Utilities/Flex'
import Float from './Components/Utilities/Float'
import Spacing from './Components/Utilities/Spacing'
import Overlay from './Components/Utilities/Overlay'
import Position from './Components/Utilities/Position'
import Structure from './Components/Utilities/Structure'
import Typography from './Components/Utilities/Typography'
import VerticalAlign from './Components/Utilities/Vertical-align'
import Zindex from './Components/Utilities/Z-index'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Router>
            <ScrollToTop>
            <div  className="grid">
              <Aside />
              <section>
                <Switch>
                  {/* Atom */}
                  <Route path="/alert-box" component={AlertBox} />
                  <Route path="/accordion" component={AccordionPage} />
                  <Route path="/breadcrumbs" component={BreadcrumbsPage} />
                  <Route path="/button" component={ButtonPage} />
                  <Route path="/button-popover" component={ButtonPopoverPage} />
                  <Route path="/box" component={BoxPage} />
                  <Route path="/checkbox" component={CheckBoxPage} />
                  <Route path="/date-picker" component={DatePickerPage} />
                  <Route path="/divider" component={DividerPage} />
                  <Route path="/drop-zone" component={DropZonePage} />
                  <Route path="/icon-glyph" component={IconPage} />
                  <Route path="/icon-special" component={IconSpecialPage} />
                  <Route path="/mega-menu" component={MegaMenuPage} />
                  <Route path="/modal-box" component={ModalBoxPage} />
                  <Route path="/modal" component={ModalPage} />
                  <Route path="/next-nav-button" component={NextNavButton} />
                  <Route path="/progress-tracker" component={ProgressTracker} />
                  <Route path="/option-box" component={OptionBox} />
                  <Route path="/radio-button" component={RadioButtonPage} />
                  <Route path="/range-slider" component={RangeSliderPage} />
                  <Route path="/search-bar" component={SearchBar} />
                  <Route path="/select-button" component={SelectButtonPage} />
                  <Route path="/stepper" component={Stepper} />
                  <Route path="/tabs" component={TabsPage} />
                  <Route path="/textfield" component={Textfield} />
                  <Route path="/tooltip" component={TooltipPage} />
                  <Route path="/toggle" component={TogglePage} />
                  <Route path="/typography" component={Typography} />
                  <Route path="/progressbar" component={ProgressBarPage} />
                  <Route path="/pagination" component={Pagination} />
                  <Route path="/table" component={TablePage} />
                  {/* Layout */}
                  <Route path="/container" component={Container} />
                  {/* <Route path="/column" component={ColumnPage} />
                  <Route path="/container" component={ContainerPage} /> */}
                  {/* Molecul */}
                  <Route path="/ribbon" component={RibbonPage} />
                  <Route path="/tray" component={TrayPage} />
                  {/* Utilities */}
                  <Route path="/border" component={Border} />
                  <Route path="/boxshape" component={BoxShape} />
                  <Route path="/color" component={Color} />
                  <Route path="/display" component={Display} />
                  <Route path="/flex" exact component={Flex} />
                  <Route path="/float" exact component={Float} />
                  <Route path="/spacing" component={Spacing} />
                  <Route path="/overlay" component={Overlay} />
                  <Route path="/position" component={Position} />
                  <Route path="/structure" component={Structure} />
                  <Route path="/vertical-align" component={VerticalAlign} />
                  <Route path="/zindex" component={Zindex} />
                </Switch>
              </section>
            </div>
          </ScrollToTop>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
