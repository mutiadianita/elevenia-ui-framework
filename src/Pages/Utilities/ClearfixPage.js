import React from 'react'

class ClearfixPage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">Clearfix</h1>
                <p>Clearfix is additionan class for clearfix</p>
                <ul className="list-page">
                    <li>
                        <p className="u-tx-primary u-p-12 u-mb-8">u-clearfix</p>
                    </li>
                </ul>   
                <code>
                &lt;div className="u-clearfix"&gt;&lt;/div&gt;
                </code>
            </div>
        )
    }
}

export default ClearfixPage;
