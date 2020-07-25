import React, { Component } from 'react';
import SearchBar from '../../Components/Molecules/Search';

class SearchBarPage extends Component {

    render() {
        return (
            <div>

                <h1 className='title'>Search Bar</h1>
                <h1>Normal</h1>
                <div style={{ backgroundColor: '#9C9DA6', height: '500px', padding: '12px' }} >

                    <SearchBar placeholderText="Placeholder"/>
                    
                </div>
                <code>
                    &lt;SearchBar<br />
                    inputText=&#123;this.state.inputText&#125;<br />
                    change=&#123;this.handleChange&#125;<br />
                    isSmall=&#123;false&#125;<br />
                    recents=&#123;this.state.recents&#125;<br />
                    suggests=&#123;this.state.suggests&#125;<br />
                    click=&#123;(e) => this.handleSearch(e)&#125;<br />
                    deleteable=&#123;false}<br />
                    /&gt;
                </code>
                <h2 className="u-my-12">Props Description</h2>
                <ul className="list-page">
                    <li><span className="u-tx-primary">inputText</span> - pass the input value from inputText state</li>
                    <li><span className="u-tx-primary">change</span> - handle changes from input</li>
                    <li><span className="u-tx-primary">isSmall</span> - toggle between normal and small searchbar</li>
                    <li><span className="u-tx-primary">recents</span> - pass the state contains the list of recent search array</li>
                    <li><span className="u-tx-primary">suggests</span> - pass the state contains the list of suggested search array</li>
                    <li><span className="u-tx-primary">deleteable</span> - enable delete function to delete selected array from recent list </li>
                </ul>
                <div className='u-my-40'></div>

                <h1>Small</h1>
                <div style={{ height: 'auto', padding: '12px' }} >
                    <SearchBar type='small'/>
                    
                </div>
                <code>
                    &lt;SearchBar<br />
                    inputText=&#123;this.state.inputText&#125;<br />
                    change=&#123;this.handleChange&#125;<br />
                    isSmall=&#123;false&#125;<br />
                    /&gt;
                </code>
                <h2 className="u-my-12">Props Description</h2>
                <ul className="list-page">
                    <li><span className="u-tx-primary">inputText</span> - pass the input value from inputText state</li>
                    <li><span className="u-tx-primary">change</span> - handle changes from input</li>
                    <li><span className="u-tx-primary">isSmall</span> - toggle between normal and small searchbar</li>
                </ul>
                <div style={{ height: 'auto', padding: '12px' }} >
                    <SearchBar type='mobile' icon="i__search"/>
                    
                </div>
            </div>



        )
    }
}

export default SearchBarPage;