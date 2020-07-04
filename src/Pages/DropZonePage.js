import React from 'react'
import Dropzone from 'react-dropzone'
import { DropZone } from '../Components/Atoms'

class DropZonePage extends React.Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
  // Do something with files
  }
  dragStartHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(event)
  }
  render () {
    return (
      <div>
        <h1 className="title">Drop Zone</h1>
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
                    <p>Try dropping some files here, or click to select files to upload.</p>
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
        <br />
        <h2 className="subtitle">Default</h2>
        <DropZone
          icon/>
        <br />
        <h2 className="subtitle">Large</h2>
        <DropZone
          icon
          stylesdropzone="dropzone--large"/>
        <br />
        <h2 className="subtitle">XLarge</h2>
        <DropZone
          icon
          stylesdropzone="dropzone--xlarge"/>
          <br />
        <h1>Type</h1>
        <br />
        <h2 className="subtitle">Basic</h2>
        <br />
        <DropZone
          icon
          stylesdropzone="dropzone--small"
          note />
        <br />
        <DropZone
          icon
          stylesdropzone="dropzone--small"/>
        <br />
        <h2 className="subtitle">Basic Button</h2>
        <DropZone
          default
          note />
        <br />
        <h2 className="subtitle">Multiple Upload</h2>
        <DropZone
          icon
          note
          stylesdropzone="dropzone--small multimedia"/>
        <br />
        <h1>State</h1>
        <br />
        <h2 className="subtitle">Default</h2>
        <br />
        <DropZone
          icon
          stylesdropzone="dropzone--small"/>
      </div>
    )
  }
}

export default DropZonePage;
