import React, { Component } from 'react';
import { Accordion } from '../Components/Atom';

class AccordionPage extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Accordion</h1>
        <Accordion label="Lorem Ipsum Sit Doloran">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas harum hic eveniet, porro dolores autem accusantium eum, rerum ab voluptatum dolor perspiciatis deleniti libero fugiat sed aperiam vitae quisquam non.
        </Accordion>
        <Accordion label="Lorem Ipsum Sit Doloran">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Rerum sunt, quae adipisci tempore quibusdam odio beatae mollitia esse! Expedita velit et corrupti
          </p>
          <p>
            dolore nihil distinctio voluptas laboriosam, molestiae dolor officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Rerum sunt, quae adipisci tempore quibusdam odio beatae mollitia esse! Expedita velit et corrupti
          </p>
          <p>
            dolore nihil distinctio voluptas laboriosam, molestiae dolor officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Rerum sunt, quae adipisci tempore quibusdam odio beatae mollitia esse! Expedita velit et corrupti
          </p>
          <p>
            dolore nihil distinctio voluptas laboriosam, molestiae dolor officia?
          </p>
        </Accordion>
        <Accordion label="Lorem Ipsum Sit Doloran">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas harum hic eveniet, porro dolores autem accusantium eum, rerum ab voluptatum dolor perspiciatis deleniti libero fugiat sed aperiam vitae quisquam non.
        </Accordion>
      </div>
    );
  }
}

export default AccordionPage;