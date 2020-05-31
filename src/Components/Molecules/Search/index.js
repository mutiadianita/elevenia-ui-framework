import React, { Component } from 'react';
import { RegularSearch, SmallSearch, MobileSearch } from './SearchBar';
import axios from 'axios';
import OutsideClickHandler from 'react-outside-click-handler';

class index extends Component {

  state = {
    isShowList: false,
    inputText: '',
    suggests: [],
    recents: [
      { title: "recent 1" },
      { title: "recent 2" },
      { title: "recent 3" },
      { title: "recent 4" }
    ] || this.props.recent,
    typing: false,
    typingTimeout: 0,
  }

  handleClickOutside = (event) => {
    this.setState({
      isShowList: false
    });
  }

  showList = () => {
    this.setState({
      isShowList: true
    });
  }

  handleSearch = (e) => {
    let choice = e.target.value;
    this.setState({
      isShowList: false,
      inputText: choice
    })
  }

  doSearch = () => {

    const searchInput = this.state.inputText;
    if (searchInput.length === 0) {
      this.setState({
        suggests: []
      });
    }
    else {
      const newKeyword = 'http://192.168.10.215/laravel/public/autosuggest/' + searchInput;
      axios.get(newKeyword)
        .then(res => {
          this.setState({
            suggests: res.data.keyword.data,
          });
        })
        .then(this.setState({ showResult: true }))
        .catch(error => {
          console.log(error.res)
        });
    }
  }

  handleChange = event => {

    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      inputText: event.target.value,
      typing: false,
      typingTimeout: setTimeout(function () {
        self.doSearch(self.state.inputText);
      }, 500)
    });

  }

  render() {

    const { type } = this.props;

    switch (type) {
      case "small":
        return (
          <SmallSearch
            handleChange={this.handleChange}
            placeholderText={this.props.placeholderText}
          />
        )
      case "mobile":
        return (
          <OutsideClickHandler
            onOutsideClick={() => {
              this.handleClickOutside()
            }}>
            <MobileSearch
              handleChange={this.handleChange}
              placeholderText={this.props.placeholderText}
              {...this.props}
            />
          </OutsideClickHandler>
        )
      default:
        return (
          <OutsideClickHandler
            onOutsideClick={() => {
              this.handleClickOutside()
            }}>
            <RegularSearch
              suggests={this.state.suggests}
              recents={this.state.recents}
              showList={this.showList}
              isShowList={this.state.isShowList}
              handleChange={this.handleChange}
              placeholderText={this.props.placeholderText}
            />
          </OutsideClickHandler>
        )
    }
  }
}

export default index;
