import React, { Component } from 'react';
import { Tabs, TabsItem, Box,IconSpecial } from '../Components/Atom';

class TabsPage extends Component {
    state = {
      activeTab: 'Beauty/ Health'
    }

    changeTab = activeTab => {
      this.setState({ activeTab })
    }

    render() {
        return (
            <div>
                <h1 className="title">Tabs</h1>
                <h1>Tabs Default</h1>
                <Tabs activeTab={this.state.activeTab} className="box u-bg-white" type="line">
                    <TabsItem onClick={() => this.changeTab('Fashion')} label="Fashion">
                        <p className="u-p-20">Fashion Content</p>
                    </TabsItem>
                    <TabsItem onClick={() => this.changeTab('Beauty/ Health')} label="Beauty/ Health">
                        <p className="u-p-20">Beauty/ Health Content</p>
                    </TabsItem>
                    <TabsItem onClick={() => this.changeTab('Babies/ Kids')} label="Babies/ Kids">
                        <p className="u-p-20">Babies/ Kids Content</p>
                    </TabsItem>
                    <TabsItem onClick={() => this.changeTab('Home/ Food')} label="Home/ Food">
                        <p className="u-p-20">Home/ Food Content</p>
                    </TabsItem>
                    <TabsItem onClick={() => this.changeTab('Gadget/ Komputer')} label="Gadget/ Komputer">
                        <p className="u-p-20">Gadget/ Komputer Content</p>
                    </TabsItem>
                </Tabs>
                <code>
                &lt;Tabs styles="" type="line"&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Fashion"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Fashion Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Beauty/ Health"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Beauty/ Health Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Babies/ Kids"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Babies/ Kids Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Home/ Food"&gt;<br/>
                    &nbsp;&nbsp;&lt;Box styles="box u-p-16">Home/ Food Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Gadget/ Komputer"&gt;<br/>
                    &nbsp;&nbsp;&lt;Box styles="box u-p-16">Gadget/ Komputer Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &lt;/Tabs&gt;
                </code>
                <br/>
                <h1>Tabs Vertical</h1>
                  <Tabs className="box u-bg-white" type="vertical">
                      <TabsItem label="Fashion" styles="box u-p-16" icon={<IconSpecial styles="i i--medium i__kosmetik"/>}>
                          <p >Fashion Content</p>
                      </TabsItem>
                      <TabsItem label="Beauty/ Health" icon={<IconSpecial styles="i i--medium i__perlengkapan_bayi" />}>
                          <p>Beauty/ Health Content</p>
                      </TabsItem>
                      <TabsItem label="Babies/ Kids" icon={<IconSpecial styles="i i--medium i__perlengkapan_bayi" />}>
                          <p>Babies/ Kids Content</p>
                      </TabsItem>
                      <TabsItem label="Home/ Food" icon={<IconSpecial styles="i i--medium i__perlengkapan_bayi" />}>
                          <p>Home/ Food Content</p>
                      </TabsItem>
                      <TabsItem label="Gadget/ Komputer" icon={<IconSpecial styles="i i--medium i__perlengkapan_bayi" />}>
                          <p>Gadget/ Komputer Content</p>
                      </TabsItem>
                  </Tabs>
                <h1>Tabs Logo</h1>
                <Tabs className="box u-bg-white" type="logo">
                    <TabsItem label="Fashion">
                        <Box styles="box u-p-16">Fashion Content</Box>
                    </TabsItem>
                    <TabsItem label="Beauty/ Health">
                        <Box styles="box u-p-16">Beauty/ Health Content</Box>
                    </TabsItem>
                    <TabsItem label="Babies/ Kids">
                        <Box styles="box u-p-16">Babies/ Kids Content</Box>
                    </TabsItem>
                    <TabsItem label="Home/ Food">
                        <Box styles="box u-p-16">Home/ Food Content</Box>
                    </TabsItem>
                    <TabsItem label="Gadget/ Komputer">
                        <Box styles="box u-p-16">Gadget/ Komputer Content</Box>
                    </TabsItem>
                </Tabs>
                <code>
                &lt;Tabs styles="" type="logo"&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Fashion"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Fashion Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Beauty/ Health"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Beauty/ Health Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Babies/ Kids"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Babies/ Kids Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Home/ Food"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Home/ Food Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Gadget/ Komputer"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Gadget/ Komputer Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &lt;/Tabs&gt;
                </code>
                <br/>
                <h1>Tabs Fitted</h1>
                <Tabs className="box u-bg-white" type="fitted">
                    <TabsItem label="Fashion">
                        <Box styles="box u-p-16">Fashion Content</Box>
                    </TabsItem>
                    <TabsItem label="Beauty/ Health">
                        <Box styles="box u-p-16">Beauty/ Health Content</Box>
                    </TabsItem>
                    <TabsItem label="Babies/ Kids">
                        <Box styles="box u-p-16">Babies/ Kids Content</Box>
                    </TabsItem>
                    <TabsItem label="Home/ Food">
                        <Box styles="box u-p-16">Home/ Food Content</Box>
                    </TabsItem>
                    <TabsItem label="Gadget/ Komputer">
                        <Box styles="box u-p-16">Gadget/ Komputer Content</Box>
                    </TabsItem>
                </Tabs>
                <code>
                &lt;Tabs styles="" type="fitted"&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Fashion"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Fashion Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Beauty/ Health"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Beauty/ Health Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Babies/ Kids"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Babies/ Kids Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Home/ Food"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Home/ Food Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &nbsp;&nbsp;&lt;TabsItem label="Gadget/ Komputer"&gt;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Box styles="box u-p-16">Gadget/ Komputer Content&lt;/Box&gt;<br/>
                &nbsp;&nbsp;&lt;/TabsItem&gt;<br/>
                &lt;/Tabs&gt;
                </code>
            </div>
        );
    }
}

export default TabsPage;
