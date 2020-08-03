import React from 'react';
import { Pagination } from '../../Components/Molecules';

class PaginationPage extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Pagination</h1>
        <h1>Page 1-5</h1>
        <Pagination
          className="u-mb-20"
          innerRange={2}
          outerRange={0}
          onChange={page => console.log(page)}
          total={10}
        />
        <code>
          &lt;Pagination <br />
          &nbsp;className="u-mb-20" <br />
          &nbsp;innerRange=&#123;2&#125; <br />
          &nbsp;outerRange=&#123;0&#125; <br />
          &nbsp;onChange=&#123;page =&gt; console.log(page)&#125; <br />
          &nbsp;total=&#123;10&#125; <br />
          /&gt; <br />
        </code>
        <h1>Page 1-10</h1>
        <Pagination
          className="u-mb-20"
          onChange={page => console.log(page)}
          total={10}
          activePage={5}
        />
        <code>
          &lt;Pagination <br />
          &nbsp;className="u-mb-20" <br />
          &nbsp;onChange=&#123;page =&gt; console.log(page)&#125; <br />
          &nbsp;total=&#123;10&#125; <br />
          &nbsp;activePage=&#123;5&#125; <br />
          /&gt; <br />
        </code>
        <h1>Page 1-20</h1>
        <Pagination
          className="u-mb-20"
          innerRange={2}
          outerRange={2}
          onChange={page => console.log(page)}
          total={20}
          activePage={9}
        />
        <code>
          &lt;Pagination <br />
          &nbsp;className="u-mb-20" <br />
          &nbsp;innerRange=&#123;2&#125; <br />
          &nbsp;outerRange=&#123;2&#125; <br />
          &nbsp;onChange=&#123;page =&gt; console.log(page)&#125; <br />
          &nbsp;total=&#123;20&#125; <br />
          &nbsp;activePage=&#123;9&#125; <br />
          /&gt; <br />
        </code>
      </>
    )
  }
}

export default PaginationPage;