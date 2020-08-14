import React, { Component } from 'react';
import { Tabs, TabsItem, Accordion, IconSpecial } from '../../Components/Atoms';

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
          <TabsItem onClick={() => this.changeTab('Fashion Wanita')} label="Fashion Wanita" styles="box" icon={<IconSpecial styles="i i--medium i__fashion_wanita" />}>
            <ul>
              <h2 className="u-pt-20 u-pb-16">Lihat Semua Fashion Wanita</h2>
              <li>
                <Accordion label="Gaun & Terusan">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Gaun</a></li>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Terusan</a></li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion label="Atasan">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Atasan</a></li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion label="Batik">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Batik</a></li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion label="Pakaian tidur & pakaian dalam">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Pakaian Tidur</a></li>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Pakaian Dalam</a></li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion label="Pakaian wanita plus size">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Pakaian Wanita Plus Size</a></li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion label="Rok">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Rok</a></li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion label="Jeans">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Jeans</a></li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion label="Celana">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Celana</a></li>
                  </ul>
                </Accordion>
              </li>
              <li>
                <Accordion label="Sweater & cardigan">
                  <ul>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Sweater</a></li>
                    <li><a href="https://wwww.elevenia.co.id" className="u-tx-info">Cardigan</a></li>
                  </ul>
                </Accordion>
              </li>
            </ul>
          </TabsItem>
          <TabsItem onClick={() => this.changeTab('Fashion Pria')} label="Fashion Pria" styles="box" icon={<IconSpecial styles="i i--medium i__fashion_pria" />}>
            <h2 className="u-pt-20 u-pb-16">Lihat Semua Fashion Pria</h2>
          </TabsItem>
          <TabsItem onClick={() => this.changeTab('Fashion Muslim')} label="Fashion Muslim" styles="box" icon={<IconSpecial styles="i i--medium i__fashion_muslim" />}>
            <h2 className="u-pt-20 u-pb-16">Lihat Semua Fashion Muslim</h2>
          </TabsItem>
          <TabsItem onClick={() => this.changeTab('Beauty & Health')} label="Beauty & Health" styles="box" icon={<IconSpecial styles="i i--medium i__kosmetik" />}>
            <h2 className="u-pt-20 u-pb-16">Lihat Semua Beauty & Health</h2>
          </TabsItem>
          <TabsItem onClick={() => this.changeTab('Ibu & Anak')} label="Ibu & Anak" styles="box" icon={<IconSpecial styles="i i--medium i__perlengkapan_bayi" />}>
            <h2 className="u-pt-20 u-pb-16">Lihat Semua Ibu & Anak</h2>
          </TabsItem>
          <TabsItem onClick={() => this.changeTab('Home & Food')} label="Home & Food" styles="box" icon={<IconSpecial styles="i i--medium i__f_n_b" />}>
            <h2 className="u-pt-20 u-pb-16">Lihat Semua Home & Food</h2>
          </TabsItem>
          <TabsItem onClick={() => this.changeTab('Gadget & Komputer')} label="Gadget & Komputer" styles="box" icon={<IconSpecial styles="i i--medium i__gadget" />}>
            <h2 className="u-pt-20 u-pb-16">Lihat Semua Gadget & Komputer</h2>
          </TabsItem>
        </Tabs>
      <code>
        &lt;Tabs activeTab=&123;this.state.activeTab&125; styles="box u-bg-white" type="vertical"&gt; <br/>
        &nbsp;&lt;TabsItem onClick=&123;() =&gt; this.changeTab('Fashion Wanita')&125; label="Fashion Wanita" styles="box" icon=&123;&lt;IconSpecial styles="i i--medium i__fashion_wanita" /&gt;&125;&gt; <br/>
        &nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;h2 className="u-pt-20 u-pb-16"&gt;Lihat Semua Fashion Wanita&lt;/h2&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Gaun & Terusan"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Gaun&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Terusan&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Atasan"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Atasan&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Batik"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Batik&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Pakaian tidur & pakaian dalam"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Pakaian Tidur&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Pakaian Dalam&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Pakaian wanita plus size"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Pakaian Wanita Plus Size&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Rok"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Rok&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Jeans"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Jeans&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Celana"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Celana&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Accordion label="Sweater & cardigan"&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Sweater&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href="https://wwww.elevenia.co.id" className="u-tx-info"&gt;Cardigan&lt;/a&gt;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Accordion&gt; <br/>
        &nbsp;&nbsp;&nbsp;&lt;/li&gt; <br/>
        &nbsp;&nbsp;&lt;/ul&gt; <br/>
        &nbsp;&lt;/TabsItem&gt; <br/>
        &nbsp;&lt;TabsItem onClick=&123;() =&gt; this.changeTab('Fashion Pria')&125; label="Fashion Pria" styles="box" icon=&123;&lt;IconSpecial styles="i i--medium i__fashion_pria" /&gt;&125;&gt; <br/>
        &nbsp;&nbsp;&lt;h2 className="u-pt-20 u-pb-16"&gt;Lihat Semua Fashion Pria&lt;/h2&gt; <br/>
        &nbsp;&lt;/TabsItem&gt; <br/>
        &nbsp;&lt;TabsItem onClick=&123;() =&gt; this.changeTab('Fashion Muslim')&125; label="Fashion Muslim" styles="box" icon=&123;&lt;IconSpecial styles="i i--medium i__fashion_muslim" /&gt;&125;&gt; <br/>
        &nbsp;&nbsp;&lt;h2 className="u-pt-20 u-pb-16"&gt;Lihat Semua Fashion Muslim&lt;/h2&gt; <br/>
        &nbsp;&lt;/TabsItem&gt; <br/>
        &nbsp;&lt;TabsItem onClick=&123;() =&gt; this.changeTab('Beauty & Health')&125; label="Beauty & Health" styles="box" icon=&123;&lt;IconSpecial styles="i i--medium i__kosmetik" /&gt;&125;&gt; <br/>
        &nbsp;&nbsp;&lt;h2 className="u-pt-20 u-pb-16"&gt;Lihat Semua Beauty & Health&lt;/h2&gt; <br/>
        &nbsp;&lt;/TabsItem&gt; <br/>
        &nbsp;&lt;TabsItem onClick=&123;() =&gt; this.changeTab('Ibu & Anak')&125; label="Ibu & Anak" styles="box" icon=&123;&lt;IconSpecial styles="i i--medium i__perlengkapan_bayi" /&gt;&125;&gt; <br/>
        &nbsp;&nbsp;&lt;h2 className="u-pt-20 u-pb-16"&gt;Lihat Semua Ibu & Anak&lt;/h2&gt; <br/>
        &nbsp;&lt;/TabsItem&gt; <br/>
        &nbsp;&lt;TabsItem onClick=&123;() =&gt; this.changeTab('Home & Food')&125; label="Home & Food" styles="box" icon=&123;&lt;IconSpecial styles="i i--medium i__f_n_b" /&gt;&125;&gt; <br/>
        &nbsp;&nbsp;&lt;h2 className="u-pt-20 u-pb-16"&gt;Lihat Semua Home & Food&lt;/h2&gt; <br/>
        &nbsp;&lt;/TabsItem&gt; <br/>
        &nbsp;&lt;TabsItem onClick=&123;() =&gt; this.changeTab('Gadget & Komputer')&125; label="Gadget & Komputer" styles="box" icon=&123;&lt;IconSpecial styles="i i--medium i__gadget" /&gt;&125;&gt; <br/>
        &nbsp;&nbsp;&lt;h2 className="u-pt-20 u-pb-16"&gt;Lihat Semua Gadget & Komputer&lt;/h2&gt; <br/>
        &nbsp;&lt;/TabsItem&gt; <br/>
        &lt;/Tabs&gt; <br/>
      </code>
      </div>
    );
  }
}

export default MegaMenuPage;
