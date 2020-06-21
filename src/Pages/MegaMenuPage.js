import React, { Component } from 'react';
import { Tabs, TabsItem, Accordion,IconSpecial } from '../Components/Atom';

class MegaMenuPage extends Component {
    state = {
      activeTab: 'Fashion Wanita'
    }

    changeTab = activeTab => {
      this.setState({ activeTab })
    }

    render() {
        return (
            <div>
            <Tabs activeTab={this.state.activeTab} styles="box u-bg-white" type="vertical">
                <TabsItem onClick={() => this.changeTab('Fashion Wanita')} label="Fashion Wanita" styles="box" icon={<IconSpecial styles="i i--medium i__fashion_wanita"/>}>
                    <ul>
                      <h2 className="u-pt-20 u-pb-16">Lihat Semua Fashion Wanita</h2>
                      <li>
                        <Accordion label="Gaun & Terusan">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion label="Atasan">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion label="Batik">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion label="Pakaian tidur & pakaian dalam">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion label="Pakaian wanita plus size">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion label="Rok">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion label="Jeans">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion label="Celana">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion label="Sweater & cardigan">
                          <ul>
                            {/* <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li>
                            <li><a href="" className="u-tx-info">Test1</a></li> */}
                          </ul>
                        </Accordion>
                      </li>
                    </ul>
                </TabsItem>
                <TabsItem onClick={() => this.changeTab('Fashion Pria')} label="Fashion Pria" styles="box" icon={<IconSpecial styles="i i--medium i__fashion_pria"/>}>
                    <h2 className="u-pt-20 u-pb-16">Lihat Semua Fashion Pria</h2>
                </TabsItem>
                <TabsItem onClick={() => this.changeTab('Fashion Muslim')} label="Fashion Muslim" styles="box" icon={<IconSpecial styles="i i--medium i__fashion_muslim"/>}>
                    <h2 className="u-pt-20 u-pb-16">Lihat Semua Fashion Muslim</h2>
                </TabsItem>
                <TabsItem onClick={() => this.changeTab('Beauty & Health')} label="Beauty & Health" styles="box" icon={<IconSpecial styles="i i--medium i__kosmetik"/>}>
                    <h2 className="u-pt-20 u-pb-16">Lihat Semua Beauty & Health</h2>
                </TabsItem>
                <TabsItem onClick={() => this.changeTab('Ibu & Anak')} label="Ibu & Anak" styles="box" icon={<IconSpecial styles="i i--medium i__perlengkapan_bayi" />}>
                    <h2 className="u-pt-20 u-pb-16">Lihat Semua Ibu & Anak</h2>
                </TabsItem>
                <TabsItem onClick={() => this.changeTab('Home & Food')} label="Home & Food" styles="box" icon={<IconSpecial styles="i i--medium i__f_n_b"/>}>
                    <h2 className="u-pt-20 u-pb-16">Lihat Semua Home & Food</h2>
                </TabsItem>
                <TabsItem onClick={() => this.changeTab('Gadget & Komputer')} label="Gadget & Komputer" styles="box" icon={<IconSpecial styles="i i--medium i__gadget"/>}>
                    <h2 className="u-pt-20 u-pb-16">Lihat Semua Gadget & Komputer</h2>
                </TabsItem>
            </Tabs>
            </div>
        );
    }
}

export default MegaMenuPage;
