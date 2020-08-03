import React from 'react'
import Dropzone from 'react-dropzone'
import { DropZone } from '../../Components/Molecules'

class DropZonePage extends React.Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
  }
  dragStartHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(event)
  }
  render () {
    return (
      <div>
        <h1 className="title">Uploader</h1>
          <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>

        <h1>Size</h1>
        <br />

        <h2 className="subtitle">Small</h2>
        <DropZone
          icon
          stylesdropzone="dropzone--small"/>
        <code>
        &lt;DropZone icon stylesdropzone="dropzone--small"/&gt;
        </code>
        <br />
        <h2 className="subtitle">Default</h2>
        <DropZone
          icon/>
        <code>
        &lt;DropZone icon/&gt;
        </code>
        <br />
        <h2 className="subtitle">Large</h2>
        <DropZone
          icon
          stylesdropzone="dropzone--large"/>
        <code>
        &lt;DropZone icon stylesdropzone="dropzone--large"/&gt;
        </code>
        <br />
        <h2 className="subtitle">XLarge</h2>
        <DropZone
          icon
          stylesdropzone="dropzone--xlarge"/>
        <code>
        &lt;DropZone icon stylesdropzone="dropzone--xlarge"/&gt;
        </code>
        <br/>
        <h1>Type</h1>
        <br />
        <h2 className="subtitle">Basic</h2>
        <br />
        <DropZone
          icon
          stylesdropzone="dropzone--small"
          note />
        <code>
        &lt;DropZone icon stylesdropzone="dropzone--small" note/&gt;
        </code>
        <br />
        <DropZone
          icon
          stylesdropzone="dropzone--small"/>
        <code>
        &lt;DropZone icon stylesdropzone="dropzone--small"/&gt;
        </code>
        <br />
        <h2 className="subtitle">Basic Button</h2>
        <DropZone
          default
          note />
        <code>
        &lt;DropZone default note/&gt;
        </code>
        <br />
        <h2 className="subtitle">Multiple Upload</h2>
        <DropZone
          icon
          note
          stylesdropzone="dropzone--small multimedia"/>
        <code>
        &lt;DropZone icon stylesdropzone="dropzone--small multimedia"/&gt;
        </code>
        <br />
        <h1>State</h1>
        <br />
        <h2 className="subtitle">Default</h2>
        <br />
        <DropZone
          icon
          stylesdropzone="dropzone--small"/>
        
        <code>
        &lt;DropZone icon stylesdropzone="dropzone--small"/&gt;
        </code>
      </div>
    )
  }
}

export default DropZonePage;
