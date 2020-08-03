import React from 'react'
import { Modal, Button } from '../../Components/Atoms'

class ModalPage extends React.Component {

	constructor() {
		super();
		this.state = {
			isShowing: false
		}
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
	}
	render() {
		return (
			<div>
				<h1 className="title">Modal</h1>
				<h1>Example of modal clickable with Button</h1>
				<p>Click button below to open modal</p>
				<br/>
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
				<br/>
				<code>
				constructor() &#123; <br/>
				&nbsp;super(); <br/>
				&nbsp;this.state = &#123; <br/>
				&nbsp;&nbsp;isShowing: false <br/>
				&nbsp;&#125; <br/>
				&#125; <br/>
 				<br/>
				openModalHandler = () =&gt; &#123; <br/>
				&nbsp;&nbsp;this.setState(&#123; <br/>
				&nbsp;&nbsp;&nbsp;isShowing: true <br/>
				&nbsp;&nbsp;&#125;); <br/>
				&#125; <br/>
 				<br/>
				closeModalHandler = () =&gt; &#123; <br/>
				&nbsp;&nbsp;this.setState(&#123; <br/>
				&nbsp;&nbsp;&nbsp;isShowing: false <br/>
				&nbsp;&nbsp;&#125;); <br/>
				&#125; <br/>
				handleChildClick = (event) =&gt; &#123; <br/>
				&nbsp;&nbsp;event.preventDefault(); <br/>
				&nbsp;event.stopPropagation(); <br/>
				&#125; <br/>
				render() &#123; <br/>
				&nbsp;return ( <br/>
				&nbsp;&nbsp;&lt;div&gt; <br/>
				&nbsp;&nbsp;&lt;Button label="test" styles="btn btn--small u-bg-primary u-tx-white" click=&#123;this.openModalHandler&#125;&gt;Open Modal&lt;/Button&gt; <br/>
				&nbsp;&nbsp;&lt;div onClick=&#123;this.closeModalHandler&#125; className=&#123;"back-drop " + (this.state.isShowing ? 'show' : '')&#125;&gt; <br/>
				&nbsp;&nbsp;&nbsp;&lt;Modal onClick=&#123;this.handleChildClick&#125; <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;vertical <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;header="Lorem ipsum dolor sit amet" <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida." <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;show=&#123;this.state.isShowing&#125; <br/>
				&nbsp;&nbsp;&nbsp;&nbsp;close=&#123;this.closeModalHandler&#125;&gt; <br/>
				&nbsp;&nbsp;&nbsp;&lt;/Modal&gt; <br/>
				&nbsp;&nbsp;&lt;/div&gt; <br/>
				&nbsp;&lt;/div&gt; <br/>
				&nbsp;); <br/>
				&#125; <br/>
				</code>
			</div>
		);
	}
}

export default ModalPage;
