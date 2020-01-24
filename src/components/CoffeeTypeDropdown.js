import React from "react";
import styles from "../styles/CoffeeTypeDropdown.module.css";

// const coffeeType = ["Cappucino", "Latte", "Espresso", "Macchiatto"]

class CoffeeTypeDropdown extends React.Component {
  // state = {
  //   cafesList: [],
  //   coffeeTypeSearch:'Coffee Type ',
  //   cafeSearch:' ',
  //   displayMenu: false
  // }

  showDropDownMenu = e => {
    e.preventDefault();
    // this.setState({displayMenu: true}, () => {
    //   document.addEventListener('click', this.hideDropDownMenu);
    // });

    this.props.setDisplayMenu(true);
    const callThis = () => {
      document.addEventListener("click", this.hideDropDownMenu);
    };
    callThis();
  };

  hideDropDownMenu = e => {
    // this.setState({displayMenu:false}, () => {
    //   document.removeEventListener('click', this.hideDropDownMenu);
    // });

    this.props.setDisplayMenu(false);
    const callThis = () => {
      document.removeEventListener("click", this.hideDropDownMenu);
    };
    callThis();
  };

  getCoffeeType = e => {
    console.log(e.currentTarget.getAttribute("value"));
    // this.setState({coffeeTypeSearch: e.currentTarget.getAttribute("value")});
    this.props.setCoffeeTypeSearch(e.currentTarget.getAttribute("value"));
  };

  listCoffeeType = () => {};

  renderDropDown() {
    return (
      <div className={styles.dropdown}>
        <div className={styles.button} onClick={this.showDropDownMenu}>
          {this.props.coffeeTypeSearch}
        </div>
        {this.props.displayMenu ? (
          <ul>
            <li onClick={this.getCoffeeType} value="Cappucino">
              Cappuccino
            </li>
            <li onClick={this.getCoffeeType} value="Latte">
              Latte
            </li>
            <li onClick={this.getCoffeeType} value="Espresso">
              Espresso
            </li>
            <li onClick={this.getCoffeeType} value="Macchiato">
              Macchiatto
            </li>
            <li onClick={this.getCoffeeType} value="Americano">
              Americano
            </li>
          </ul>
        ) : null}
      </div>
    );
  }

  render() {
    return this.renderDropDown();
  }
}

export default CoffeeTypeDropdown;
