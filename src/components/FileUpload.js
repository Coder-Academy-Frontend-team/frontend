import React from 'react';
import axios from 'axios';

// File Upload 
import Files from 'react-files'

// CSS
import '../styles/FileUpload.css';

class FileUpload extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      files: []
    }
  };

  onFilesChange = (files) => {
    this.setState({
      files
    }, () => {
      console.log(this.state.files)
    })
  };

  onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  };

  filesRemoveOne = (file) => {
    this.refs.files.removeFile(file)
  };

  filesRemoveAll = () => {
    this.refs.files.removeFiles()
  };

  filesUpload = () => {

    const formData = new FormData()

    Object.keys(this.state.files).forEach((key) => {
      const file = this.state.files[key]
      formData.append(key, new Blob([file], { type: file.type }), file.name || 'file')
    })

    axios.post(`/files`, formData)
      .then(response => window.alert(`${this.state.files.length} files uploaded successfully!`))
      .catch(err => window.alert('Error uploading files :('))
  };

  render () {
    return (
      <div>

        <Files
          ref='files'
          className='files-dropzone-list'
          style={{ height: '100px' }}
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          multiple
          maxFiles={1}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Please upload a profile image here
        </Files>

        <button onClick={this.filesRemoveAll}>Remove All Files</button>
  
        {
          this.state.files.length > 0
            ? <div className='files-list'>
              <ul>{this.state.files.map((file) =>
                <li className='files-list-item' key={file.id}>
                  <div className='files-list-item-preview'>
                    {file.preview.type === 'image'
                      ? <img className='files-list-item-preview-image' src={file.preview.url} alt="profile"/>
                      : <div className='files-list-item-preview-extension'>{file.extension}</div>}
                  </div>
                  <div className='files-list-item-content'>
                    <div className='files-list-item-content-item files-list-item-content-item-1'>{file.name}</div>
                    <div className='files-list-item-content-item files-list-item-content-item-2'>{file.sizeReadable}</div>
                  </div>
                  <div
                    id={file.id}
                    className='files-list-item-remove'
                    onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
                  />
                </li>
              )}</ul>
            </div>
            : null
        }
      </div>
    )
  }
};

export default FileUpload;

