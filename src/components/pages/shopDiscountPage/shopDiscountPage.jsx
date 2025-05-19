import React, { Component } from "react";
import { TITLE } from "../../../const";

import Table from "../../table";
import "./shopDiscountPage.css";

class shopDiscountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopList: [],
    };
  }

  componentDidMount() {
    fetch("https://csess.su.hkust.edu.hk/api/shops.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ shopList: data }));
  }

  render() {
    return (
      <div>
        <title>{`Shop Discount | ${TITLE}`}</title>
        <div className="shopDiscount">
          <div className="container">
            <h1 className="pageHeader">Shop Discount</h1>
            <div>
              <p>
                本會一直致力為會員爭取各間商舖的優惠及福利，各會員只需於光顧時出示本會會員卡，即可享有優惠。以下為現時提供優惠之商舖名單：
              </p>
              <p>
                Our society strive our best to provide best welfare to our
                member. Discount would be offered when you present CSESS
                membership card upon payment. The following is the company list
                that provides discount:
              </p>
            </div>
            <Table
              keys={[
                { id: "name", display: "Company Name" },
                { id: "type", display: "Type" },
                { id: "address", display: "Address" },
                { id: "discount", display: "Discount" },
              ]}
              data={this.state.shopList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default shopDiscountPage;
