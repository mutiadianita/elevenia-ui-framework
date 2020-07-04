import React from 'react'
import { ModalBox, Button } from '../Components/Atoms'
import bannerImage from '../assets/images/banner.png'
import illustrationImage from '../assets/images/Illustration.svg'
import ovalImage from '../assets/images/Oval.svg'

class ModalBoxPage extends React.Component {
  render () {
    return (
      <div>
        <h1 className="title">Modal Box</h1>
        <h1>Size</h1>
        <div style={{backgroundColor: 'rgba(21,24,35,0.8)', minHeight: '50vh', padding: '24px'}}>
          <h2 className="subtitle u-tx-white">Small</h2>
            <ModalBox
              mobile
              close
              header="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas?"
              modalstyles="u-tx-center"
              actionstyle="u-js-center">
              <Button styles="btn u-tx-info u-bd-light">Lorem</Button>
              <Button styles="btn u-bg-secondary-green u-tx-white">Lorem</Button>
            </ModalBox>
            <br />
            <ModalBox
              mobile
              close
              header="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas?"
              modalstyles="u-tx-center"
              actionstyle="u-js-center u-fx-column">
              <Button styles="btn u-tx-info u-bd-light u-wd-full u-mb-8">Lorem</Button>
              <Button styles="btn u-bg-secondary-green u-tx-white u-wd-full">Lorem</Button>
            </ModalBox>
            <br />
              <ModalBox
                mobile
                close
                header="Lorem ipsum"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas?"
                modalstyles="u-tx-center"
                actionstyle="u-js-center u-fx-column">
                <Button styles="btn u-bg-secondary-green u-tx-white u-wd-full">Lorem</Button>
              </ModalBox>
            <br />
          <ModalBox
            vertical
            close
            header="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida."
            modalstyles="modal--small">
          </ModalBox>
          <code>
            &lt;Modal<br/>
              vertical<br/>
              close<br/>
              header="Lorem ipsum dolor sit amet"<br/>
              content="Lorem ipsum dolor sit amet"<br/>
              modalstyles="modal--small"&gt;<br/>
          &lt;/Modal&gt;
          </code>
          <br/>
          <h2 className="subtitle u-tx-white">Medium (Default)</h2>
          <ModalBox
            vertical
            close
            header="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida, aliquet diam quis, dapibus odio. Proin ac diam egestas, commodo diam id, finibus nulla. Suspendisse lacinia ut orci at accumsan. Donec sollicitudin turpis a dui pellentesque dignissim. Donec nec hendrerit nisl. Vivamus nec risus tortor. Praesent tempor tortor a tellus mattis, ut consequat eros dapibus. Nullam varius finibus rhoncus. Quisque elementum dignissim lectus."
            modalstyles="">
          </ModalBox>
          <code>
            &lt;ModalBox<br/>
              vertical<br/>
              close<br/>
              header="Lorem ipsum dolor sit amet"<br/>
              content="Lorem ipsum dolor sit amet"<br/>
              modalstyles=""&gt;<br/>
            &lt;/ModalBox&gt;
          </code>
          <br/>
          <h2 className="subtitle u-tx-white">Large</h2>
          <ModalBox
            vertical
            type="info"
            close
            header="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida, aliquet diam quis, dapibus odio. Proin ac diam egestas, commodo diam id, finibus nulla. Suspendisse lacinia ut orci at accumsan. Donec sollicitudin turpis a dui pellentesque dignissim. Donec nec hendrerit nisl. Vivamus nec risus tortor."
            modalstyles="modal--large">
          </ModalBox>
          <code>
            &lt;ModalBox<br/>
              vertical<br/>
              type="info"<br/>
              close<br/>
              header="Lorem ipsum dolor sit amet"<br/>
              content="Lorem ipsum dolor sit amet"<br/>
              modalstyles="modal--large"&gt;<br/>
            &lt;/ModalBox&gt;
          </code>
          <br/>
          <h2 className="subtitle u-tx-white">Extra Large</h2>
          <ModalBox
            vertical
            close
            header="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida, aliquet diam quis, dapibus odio. Proin ac diam egestas, commodo diam id, finibus nulla. Suspendisse lacinia ut orci at accumsan. Donec sollicitudin turpis a dui pellentesque dignissim. Donec nec hendrerit nisl. Vivamus nec risus tortor. Praesent tempor tortor a tellus mattis, ut consequat eros dapibus. Nullam varius finibus rhoncus. Quisque elementum dignissim lectus."
            modalstyles="modal--xlarge">
          </ModalBox>
          <code>
            &lt;ModalBox<br/>
              vertical<br/>
              close<br/>
              header="Lorem ipsum dolor sit amet"<br/>
              content="Lorem ipsum dolor sit amet"<br/>
              modalstyles="modal--xlarge"&gt;<br/>
            &lt;/ModalBox&gt;
          </code>
        </div>

        <h1>Type</h1>
        <div style={{backgroundColor: 'rgba(21,24,35,0.8)', minHeight: '50vh', padding: '24px'}}>
        <h2 className="subtitle u-tx-white">Basic Modal</h2>
        <h3 className="u-tx-white u-pb-8">Single Action</h3>
        <ModalBox
          vertical
          header="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida."
          modalstyles="modal--small"
          actionstyle="u-js-end">
          <Button styles="btn u-tx-info u-bd-light">Cancel</Button>
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            header="Lorem ipsum dolor sit amet"<br/>
            content="Lorem ipsum dolor sit amet"<br/>
            modalstyles="modal--small"<br/>
            actionstyle="u-js-end"&gt;<br/>
            &lt;Button styles="btn u-tx-info u-bd-light"&gt;Cancel&lt;/Button&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>
        <ModalBox
          vertical
          close
          header="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida."
          modalstyles="modal--small"
          actionstyle="u-js-end">
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            close<br/>
            header="Lorem ipsum dolor sit amet"<br/>
            content="Lorem ipsum dolor sit amet"<br/>
            modalstyles="modal--small"<br/>
            actionstyle="u-js-end"&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>
        <ModalBox
          vertical
          header="Lorem ipsum…"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing."
          image={ovalImage}
          modalstyles="modal--small u-tx-center"
          actionstyle="u-js-center">
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            header="Lorem ipsum…"<br/>
            content="Lorem ipsum dolor sit amet, consectetur adipiscing."<br/>
          image="/media/Oval.svg"<br/>
            modalstyles="modal--small u-tx-center"<br/>
            actionstyle="u-js-center"&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>
        <ModalBox
          vertical
          header="Lorem ipsum…"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing."
          modalstyles="modal--small u-tx-center"
          actionstyle="u-js-center">
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            header="Lorem ipsum…"<br/>
            content="Lorem ipsum dolor sit amet, consectetur adipiscing."<br/>
            modalstyles="modal--small u-tx-center"<br/>
            actionstyle="u-js-center"&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>

        <h3 className="u-tx-white u-pb-8">Without Title</h3>
        <ModalBox
          vertical
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida."
          modalstyles="modal"
          actionstyle="u-js-end">
          <Button styles="btn u-tx-info u-bd-light">Cancel</Button>
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            content="Lorem ipsum dolor sit amet"<br/>
            modalstyles="modal"<br/>
            actionstyle="u-js-end"&gt;<br/>
            &lt;Button styles="btn u-tx-info u-bd-light"&gt;Cancel&lt;/Button&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>
        <ModalBox
          vertical
          close
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida."
          modalstyles="modal"
          actionstyle="u-js-end">
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            close<br/>
            content="Lorem ipsum dolor sit amet"<br/>
            modalstyles="modal"<br/>
            actionstyle="u-js-end"&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>

        <h2 className="subtitle u-tx-white">Toast Modal</h2>
        <h3 className="u-tx-white u-pb-8">Single Action</h3>
        <ModalBox
          horizontal
          modalstyles="modal--large"
          toastImage={illustrationImage}
          actionstyle="u-js-end">
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
          horizontal<br/>
          modalstyles="modal--large"<br/>
          actionstyle="u-js-end"&gt;<br/>
          &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>
        <h3 className="u-tx-white u-pb-8">Multiple Action</h3>
        <ModalBox
          horizontal
          modalstyles="modal--xlarge"
          toastImage={illustrationImage}
          actionstyle="u-js-end">
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
          <Button styles="btn u-tx-info u-bd-light">Secondary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
          horizontal<br/>
          modalstyles="modal--xlarge"<br/>
          actionstyle="u-js-end"&gt;<br/>
          &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;Button styles="btn u-tx-info u-bd-light"&gt;Secondary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>

        <h3 className="u-tx-white u-pb-8">With drop zone</h3>
        <ModalBox
          vertical
          header="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida."
          upload="true"
          modalstyles="modal--large"
          actionstyle="u-js-end">
          <Button styles="btn u-tx-info u-bd-light">Cancel</Button>
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            header="Lorem ipsum dolor sit amet"<br/>
            content="Lorem ipsum dolor sit amet"<br/>
            upload="true"<br/>
            modalstyles="modal--large"<br/>
            actionstyle="u-js-end"&gt;<br/>
            &lt;Button styles="btn u-tx-info u-bd-light"&gt;Cancel&lt;/Button&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>

        <h3 className="u-tx-white u-pb-8">With banner</h3>
        <ModalBox
          vertical
          header="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida."
          upload="true"
          modalstyles="modal--xlarge"
          seperator
          actionstyle="u-js-end">
          <Button styles="btn u-tx-info u-bd-light">Cancel</Button>
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            header="Lorem ipsum dolor sit amet"<br/>
            content="Lorem ipsum dolor sit amet"<br/>
            upload="true"<br/>
            modalstyles="modal--xlarge"<br/>
            seperator<br/>
            actionstyle="u-js-end"&gt;<br/>
            &lt;Button styles="btn u-tx-info u-bd-light"&gt;Cancel&lt;/Button&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>
        <ModalBox
          vertical
          banner={bannerImage}
          header="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida, aliquet diam quis, dapibus odio. Proin ac diam egestas, commodo diam id, finibus nulla. Suspendisse lacinia ut orci at accumsan. Donec sollicitudin turpis a dui pellentesque dignissim. Donec nec hendrerit nisl. Vivamus nec risus tortor. Praesent tempor tortor a tellus mattis, ut consequat eros dapibus. Nullam varius finibus rhoncus. Quisque elementum dignissim lectus. Proin ac diam egestas, commodo diam id, finibus nulla. Suspendisse lacinia ut orci at accumsan. Donec sollicitudin turpis a dui pellentesque dignissim. Donec nec hendrerit nisl. Vivamus nec risus tortor."
          modalstyles="modal--xlarge u-p-0"
          headerstyle="u-px-24"
          contentstyle="u-px-24"
          seperator
          actionstyle="u-js-end u-px-24 u-pb-24">
          <Button styles="btn u-tx-info u-bd-light">Cancel</Button>
          <Button styles="btn u-bg-secondary-green u-tx-white">Primary</Button>
        </ModalBox>
        <code>
          &lt;ModalBox<br/>
            vertical<br/>
            banner="/media/banner.png"<br/>
            header="Lorem ipsum dolor sit amet"<br/>
            content="Lorem ipsum dolor sit amet"<br/>
            modalstyles="modal--xlarge u-p-0"<br/>
            headerstyle="u-px-24"<br/>
            contentstyle="u-px-24"<br/>
            seperator<br/>
          actionstyle="u-js-end u-px-24 u-pb-24"&gt;<br/>
            &lt;Button styles="btn u-tx-info u-bd-light"&gt;Cancel&lt;/Button&gt;<br/>
            &lt;Button styles="btn u-bg-secondary-green u-tx-white"&gt;Primary&lt;/Button&gt;<br/>
          &lt;/ModalBox&gt;
        </code>
        <br/>

        </div>
        <h1>Mobile</h1>
        <div style={{backgroundColor: 'rgba(21,24,35,0.8)', minHeight: '50vh', padding: '24px'}}>
          {/* <h2 className="subtitle u-tx-white"></h2> */}
            <ModalBox
              mobile
              close
              header="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas?"
              modalstyles="u-tx-center"
              actionstyle="u-js-center">
              <Button styles="btn u-tx-info u-bd-light">Lorem</Button>
              <Button styles="btn u-bg-secondary-green u-tx-white">Lorem</Button>
            </ModalBox>
            <br />
            <ModalBox
              mobile
              close
              header="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas?"
              modalstyles="u-tx-center"
              actionstyle="u-js-center u-fx-column">
              <Button styles="btn u-tx-info u-bd-light u-wd-full u-mb-8">Lorem</Button>
              <Button styles="btn u-bg-secondary-green u-tx-white u-wd-full">Lorem</Button>
            </ModalBox>
            <br />
              <ModalBox
                mobile
                close
                header="Lorem ipsum"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas?"
                modalstyles="u-tx-center"
                actionstyle="u-js-center u-fx-column">
                <Button styles="btn u-bg-secondary-green u-tx-white u-wd-full">Lorem</Button>
              </ModalBox>
            <br />

        </div>

      </div>
    )
  }
}

export default ModalBoxPage;
