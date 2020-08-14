import React, { Component } from 'react';
import { Breadcrumbs } from '../../Components/Molecules';


class BreadcrumbsPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Breadcrumbs</h1>
                <div className="row u-mb-24">
                    <div className="col u-tx-info">
                        Breadcrumbs are placed at the top left corner of the screen, above the page title.
                        Breadcrumbs support up to 4 floor menus
                    </div>
                </div>
                <h1>Type</h1>
                <Breadcrumbs
                    pages={[
                        {
                            name: 'Keranjang Keranjang',
                            link: '/'
                        },
                        {
                            name: 'Pembayaran Keranjang',
                            link: '/'
                        },
                        {
                            name: 'Pembayaran Keranjang',
                            link: '/'
                        },
                        {
                            name: 'Pembayaran Keranjang',
                            link: '/'
                        }
                    ]}
                />
                <pre>
                    <code>
                    &lt;Breadcrumbs<br/>
                    &nbsp;pages=	&#123;[<br/>
                    &nbsp;&nbsp;&#123;<br/>
                    &nbsp;&nbsp;&nbsp;name: &quot;Keranjang Keranjang Keranjang Keranjang&quot;,<br/>
                    &nbsp;&nbsp;&nbsp;link: &quot;/&quot;<br/>
                    &nbsp;&nbsp;&nbsp;&#125;,<br/>
                    &nbsp;&nbsp;&#123;<br/>
                    &nbsp;&nbsp;&nbsp;name: &quot;Pembayaran Keranjang Keranjang Keranjang&quot;,<br/>
                    &nbsp;&nbsp;&nbsp;link: &quot;/&quot;<br/>
                    &nbsp;&nbsp;&#125;<br/>
                    &nbsp;]&#125;<br/>
                    /&gt;<br/>
                </code>
                </pre>
            </div>
        );
    }
}

export default BreadcrumbsPage;