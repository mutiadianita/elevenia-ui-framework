import React from 'react'
import { Modal, Button } from '../../Components/Atoms'

class ModalPage extends React.Component {

  constructor() {
		super();

		this.state = {
			isShowing: false
		}
    // this.nodeElement = document.getElementByTagName('body')
	}

	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	}

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	}
  handleChildClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('test');
  }

	render () {
		return (
			<div>
        <Button label="test" styles="btn btn--small u-bg-primary u-tx-white" click={this.openModalHandler}>Open Modal</Button>
        <div onClick={this.closeModalHandler} className={"back-drop " + (this.state.isShowing ? 'show' : '')}>
          <Modal onClick={this.handleChildClick}
            vertical
            header="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida."
            show={this.state.isShowing}
            close={this.closeModalHandler}>
          </Modal>
        </div>
			</div>
		);
	}
}

export default ModalPage;
