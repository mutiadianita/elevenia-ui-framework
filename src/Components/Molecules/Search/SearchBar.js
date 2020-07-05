import React from 'react';
import { InputGroup, Button, Textfield, Icon } from '../../Atoms';

const RegularSearch = (props) => {
  return (
    <form className={`search`} onFocus={props.showList}>
      <InputGroup styles="icon-right">
        <Textfield
          styles="input-control"
          type="text"
          name=""
          placeholder={props.placeholderText}
          value={props.inputText}
          autoComplete={true} disabled={false} readonly={false} required={false}
          change={props.handleChange}
          onkeydown={props.onkeydown}
        />
        <InputGroup.Append>
        <Icon iwidth="i i--large" name="search" width="24" height="24" fill="#70727D" class="search" />
        </InputGroup.Append>
      </InputGroup>
      {
        props.isShowList
          ? (
            <div className={`search__list u-mt-8`}>
              {List({ ...props })}
            </div>
          )
          : null
      }
    </form>
  )
}

const SmallSearch = (props) => {
  return (
    <form className={`search search-small`}>
      <InputGroup styles="icon-left">
        <InputGroup.Prepend>
          <Button styles={`btn u-p-0 i i__search`}></Button>
        </InputGroup.Prepend>
        <Textfield
          styles="input-control"
          type="text"
          name=""
          placeholder={props.placeholderText}
          value={props.inputText}
          autoComplete={true} disabled={false} readonly={false} required={false}
          change={props.handleChange}
          onkeydown={props.onkeydown}
        />
      </InputGroup>
    </form>
  )
}

const MobileSearch = (props) => {
  return (
    <form className={`search search-mobile`} onFocus={props.showList}>
      <InputGroup styles="icon-left">
        <InputGroup.Prepend>
          <Button styles={`btn u-p-0 i ${props.icon}`}></Button>
        </InputGroup.Prepend>
        <Textfield
          styles="input-control"
          type="text"
          name=""
          placeholder={props.placeholderText}
          value={props.inputText}
          autoComplete={true} disabled={false} readonly={false} required={false}
          change={props.handleChange}
          onkeydown={props.onkeydown}
        />
      </InputGroup>
      {
        props.isShowList
          ? (
            <div className={`search__list u-mt-8`}>
              {List({ ...props })}
            </div>
          )
          : null
      }
    </form>
  )
}

const List = (props) => {

  let list = props.suggests.length === 0 ? props.recents : props.suggests;

  return (
    <ul>
      {
        list.map(
          (result, index) => (
            <li className='search__list-item' key={index}>
              <button className='search__link' onClick={props.click} href={result.url} value={result.title}>{result.title}</button>
              {props.deleteable
                ? <i className='search__delete' onClick={props.isFocus}>X</i>
                : null
              }
            </li>
          )
        )
      }
    </ul>
  )
}

export { RegularSearch, SmallSearch, MobileSearch, List };
