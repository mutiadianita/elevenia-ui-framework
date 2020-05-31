import React from 'react';
import { Pagination } from '../Components/Atom';

class PaginationPage extends React.Component {
  render(){
    return (
      <>
        <h1>Pagination</h1>
        <Pagination
          className="u-mb-20"
          innerRange={2}
          outerRange={0}
          onChange={page => console.log(page)}
          total={10}
          />
        <Pagination
          className="u-mb-20"
          onChange={page => console.log(page)}
          total={10}
          activePage={5}
          />
        <Pagination
          className="u-mb-20"
          innerRange={2}
          outerRange={2}
          onChange={page => console.log(page)}
          total={20}
          activePage={9}
        />
      </>
    )
  }
}

export default PaginationPage;