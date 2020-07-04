import React from 'react'
import { Icon } from './'
import uploadImage from '../../assets/images/ic_large_upload.svg'

class ModalBox extends React.Component {

  render () {

    return (
      <div>
        {this.props.mobile && (
          <div className={`modal modal--mobile ${this.props.modalstyles}`}>
          {this.props.close && (
            <Icon iwidth="i i--large" name="cancel" width="24" height="24" fill="#70727D" class="cancel" />
          )}
          {this.props.banner && (
            <div className="banner">
              <img src={this.props.banner} className={`image ${this.props.bannerstyle}`} alt={this.props.alt}/>
            </div>
          )}
          {this.props.header && (
            <div type={this.props.type} className={`header ${this.props.headerstyle}`}>
              <h2>{this.props.header}</h2>
            </div>
          )}
          <div className={`content ${this.props.contentstyle}`}>
            <p>
              {this.props.image && (
                <img src={this.props.image} className={`image ${this.props.actionstyle}`} alt={this.props.alt}/>
              )}
            </p>
            <p>{this.props.content}</p>

            {this.props.upload && (
              <div>
                <div className="u-tx-center upload">
                  <img src={uploadImage} alt="upload"/>
                  <p className="desc">Drag & drop or <span>Browser</span></p>
                  <p className="subdesc">Lorem ipsum dolor sit amet JPG, PNG, PDF with maximum size 500 Kb</p>
                </div>
              </div>
            )}
            {this.props.seperator && (
              <div className="line"></div>
            )}
          </div>
          {this.props.children && (
            <div className={`action u-fx-row ${this.props.actionstyle}`}>
              {this.props.children}
            </div>
          )}
          </div>
        )}
        {this.props.vertical && (
          <div className={`modal ${this.props.modalstyles}`}>
          {this.props.close && (
            <Icon iwidth="i i--large" name="cancel" width="24" height="24" fill="#70727D" class="cancel" />
          )}
          {this.props.banner && (
            <div className="banner">
              <img src={this.props.banner} className={`image ${this.props.bannerstyle}`} alt={this.props.alt} />
            </div>
          )}
          {this.props.header && (
            <div type={this.props.type} className={`header ${this.props.headerstyle}`}>
              <h2>{this.props.header}</h2>
            </div>
          )}
          <div className={`content ${this.props.contentstyle}`}>
            <p>
              {this.props.image && (
                <img src={this.props.image} className={`image ${this.props.actionstyle}`} alt={this.props.alt}/>
              )}
            </p>
            <p>{this.props.content}</p>

            {this.props.upload && (
              <div>
                <div className="u-tx-center upload">
                  <img src={uploadImage}  alt="upload"/>
                  <p className="desc">Drag & drop or <span>Browser</span></p>
                  <p className="subdesc">Lorem ipsum dolor sit amet JPG, PNG, PDF with maximum size 500 Kb</p>
                </div>
              </div>
            )}
            {this.props.seperator && (
              <div className="line"></div>
            )}
          </div>
          {this.props.children && (
            <div className={`action u-fx-row ${this.props.actionstyle}`}>
              {this.props.children}
            </div>
          )}
          </div>
        )}
        {this.props.horizontal && (
          <div className={`modal modal__list u-fx-row u-al-items-center ${this.props.modalstyles}`}>
            <div className="u-al-self-center">

              <img src={this.props.toastImage} alt={this.props.alt}/>

            </div>
            <div>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum orci sodales eros sodales egestas. Donec eu neque gravida.</p>
            </div>
            <div>
              <div className={`action u-fx-row ${this.props.actionstyle}`}>
                {this.props.children}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ModalBox;
