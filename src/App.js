import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/index.css';
import './assets/themes.css';
import Header from './Layout/Header';
import Aside from './Layout/Aside';
import Footer from './Layout/Footer';

import ScrollToTop from './ScrollToTop';

import Documentation from './Pages/DocumentationPage';
import Installation from './Pages/InstallationPage'

import Container from './Pages/ContainerPage';

import Border from './Pages/Utilities/BorderPage';
import Color from './Pages/Utilities/ColorPage';
import Clearfix from './Pages/Utilities/ClearfixPage';
import Display from './Pages/Utilities/DisplayPage';
import Flex from './Pages/Utilities/FlexPage';
import Float from './Pages/Utilities/FloatPage';
import Sizing from './Pages/Utilities/SizingPage';
import Spacing from './Pages/Utilities/SpacingPage';
import Position from './Pages/Utilities/PositionPage';
import Typography from './Pages/Utilities/TypographyPage';
import VerticalAlign from './Pages/Utilities/VerticalAlignPage';
import Zindex from './Pages/Utilities/ZIndexPage';

import AlertBoxPage from './Pages/Atoms/AlertBoxPage';
import ButtonPage from './Pages/Atoms/ButtonPage';
import BoxPage from './Pages/Atoms/BoxPage';
import CheckBoxPage from './Pages/Atoms/CheckBoxPage';
import DatePickerPage from './Pages/Atoms/DatePickerPage';
import DividerPage from './Pages/Atoms/DividerPage';
import IconPage from './Pages/Atoms/IconPage';
import IconSpecialPage from './Pages/Atoms/IconSpecialPage';
import ModalBoxPage from './Pages/Atoms/ModalBoxPage';
import ModalPage from './Pages/Atoms/ModalPage';
import NextNavButtonPage from './Pages/Atoms/NextNavButtonPage';
import RadioButtonPage from './Pages/Atoms/RadioButtonPage';
import SelectButtonPage from './Pages/Atoms/SelectButtonPage';
import TablePage from './Pages/Atoms/TablePage';
import TextfieldPage from './Pages/Atoms/TextfieldPage';
import TogglePage from './Pages/Atoms/TogglePage';


import AccordionPage from './Pages/Molecules/AccordionPage';
import BreadcrumbsPage from './Pages/Molecules/BreadcrumbsPage';
import ButtonPopoverPage from './Pages/Molecules/ButtonPopoverPage';
import DropZonePage from './Pages/Molecules/DropZonePage';
import OptionBoxPage from './Pages/Molecules/OptionBoxPage';
import PaginationPage from './Pages/Molecules/PaginationPage';
import RangeSliderPage from './Pages/Molecules/RangeSliderPage';
import SearchBarPage from './Pages/Molecules/SearchBarPage';
import StepperPage from './Pages/Molecules/StepperPage';

import MegaMenuPage from './Pages/Organisms/MegaMenuPage';
import ProgressTrackerPage from './Pages/Organisms/TrackerPage';
import TabsPage from './Pages/Organisms/TabsPage';
import FooterPage from './Pages/Organisms/FooterPage';
import HeaderPage from './Pages/Organisms/HeaderPage';

class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <Header />
          <ScrollToTop>
            <div className="grid">
              <Aside />
              <section>
                <Switch>
                  <Route path="/documentation" component={Documentation} />
                  <Route path="/installation" component={Installation} />
                  <Route path="/container" component={Container} />

                  <Route path="/border" component={Border} />
                  <Route path="/clearfix" component={Clearfix} />
                  <Route path="/color" component={Color} />
                  <Route path="/display" component={Display} />
                  <Route path="/flex" exact component={Flex} />
                  <Route path="/float" exact component={Float} />
                  <Route path="/sizing" component={Sizing} />
                  <Route path="/spacing" component={Spacing} />
                  <Route path="/position" component={Position} />
                  <Route path="/typography" component={Typography} />
                  <Route path="/vertical-align" component={VerticalAlign} />
                  <Route path="/zindex" component={Zindex} />

                  <Route path="/alert-box" component={AlertBoxPage} />
                  <Route path="/box" component={BoxPage} />
                  <Route path="/button" component={ButtonPage} />
                  <Route path="/checkbox" component={CheckBoxPage} />
                  <Route path="/date-picker" component={DatePickerPage} />
                  <Route path="/divider" component={DividerPage} />
                  <Route path="/icon-glyph" component={IconPage} />
                  <Route path="/icon-special" component={IconSpecialPage} />
                  <Route path="/modal-box" component={ModalBoxPage} />
                  <Route path="/modal" component={ModalPage} />
                  <Route path="/next-nav-button" component={NextNavButtonPage} />
                  <Route path="/radio-button" component={RadioButtonPage} />
                  <Route path="/select-button" component={SelectButtonPage} />
                  <Route path="/table" component={TablePage} />
                  <Route path="/textfield" component={TextfieldPage} />
                  <Route path="/toggle" component={TogglePage} />
                  
                  <Route path="/accordion" component={AccordionPage} />
                  <Route path="/breadcrumbs" component={BreadcrumbsPage} />
                  <Route path="/button-popover" component={ButtonPopoverPage} />
                  <Route path="/option-box" component={OptionBoxPage} />
                  <Route path="/range-slider" component={RangeSliderPage} />
                  <Route path="/search-bar" component={SearchBarPage} />
                  <Route path="/stepper" component={StepperPage} />
                  <Route path="/pagination" component={PaginationPage} />
                  <Route path="/uploader" component={DropZonePage} />

                  <Route path="/mega-menu" component={MegaMenuPage} />
                  <Route path="/progress-tracker" component={ProgressTrackerPage} />
                  <Route path="/tabs" component={TabsPage} />
                  <Route path="/footer" component={FooterPage} />
                  <Route path="/header" component={HeaderPage} />
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
