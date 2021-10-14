import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import Block from './block';
import Wine from './Wine';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

import 'antd/dist/antd.css';
import { Menu } from 'antd';
import './checkStyle.css';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu; // UNDERSTAND

class CheckOut extends Component {
  state = {
    one: { count: 0, Name: '8 Pm', price: 7.5 },
    two: { count: 0, Name: 'Domaine Serene', price: 3.0 },
    three: { count: 0, Name: 'Johny Walker', price: 9.25 },
    four: { count: 0, Name: 'Turborg', price: 6.0 },
    five: { count: 0, Name: 'Kingfisher', price: 4.0 },
    six: { count: 0, Name: 'Breezers', price: 8.75 },
    openKeys: ['sub1'],
  };

  items = [];
  total = 0;

  handleIncrement = async (obj) => {
    for (let key in this.state) {
      if (key == 'openKeys') {
        continue;
      }

      let val = this.state[key];

      if (val.count != 0) {
        this.items.push(val);
      } // Render
    }

    let key1 = Object.keys(obj)[0];

    console.log('Key of Present Request', key1);

    let vall = obj[key1];
    console.log('Value of Present Reqest', vall);

    let execute = async () => {
      // let k = Object.keys(this.items);
      let counts = 0;
      let len = this.items.length;
      for (let i = 0; i < len; i++) {
        console.log('LOOP');
        console.log('ISSUE2', this.items);
        console.log('Array', this.items[0].Name);
        console.log('New Value', vall.Name);
        try {
          if (this.items[i].Name == vall.Name && vall.count != 0) {
            let index = this.items.indexOf(this.items[i]);
            console.log('INDEX', index);
            this.items[index] = vall;
            counts = counts + 1;
            console.log('REPEAT');
          } else if (this.items[i].Name == vall.Name && vall.count == 0) {
            let index = this.items.indexOf(this.items[i]);
            this.items.splice(index, 1);
            counts = counts + 1;
            console.log('REMOVE');
          }
        } catch (e) {
          console.log('ERROR', e);
        }
      }

      console.log('COUNT IS', counts);

      return new Promise((resolve, reject) => {
        resolve(counts);
      });
    };

    let newFun = (counts) => {
      if (vall.count != 0 && counts == 0) {
        this.items.push(vall);
        console.log('ISSUE', this.items);
      }

      return new Promise((resolve, reject) => {
        resolve(null);
      });
    };

    let totalFun = () => {
      let arr = this.items;
      let len = arr.length;
      let it = 0;
      for (let i = 0; i < len; i = i + 1) {
        it = it + this.items[i].price * this.items[i].count;
      }
      this.total = it;
    };

    let counts = await execute();
    await newFun(counts);
    await totalFun();
    this.setState(obj); //////

    console.log('Items Array', this.items);
    console.log('State', this.state);
  };

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4']; // UNDERSTAND

  onOpenChange = (openKeys) => {
    // UNDERSTAND
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
    }
  };

  render() {
    return (
      <div>
        {/* style={ {marginLeft : '600px', color: 'red' }} */}
        <Row>
          <Col>
            <h6
              className='pa'
              style={{ marginLeft: '600px', marginBottom: '20px' }}
            >
              {' '}
              The Great Table{' '}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Menu
              mode='inline'
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange} // STATE
              style={{ width: 70 }}
            >
              <MailOutlined className='m-4' /> <br></br>
              <AppstoreOutlined
                className='m-4'
                style={{ marginTop: '70px' }}
              />{' '}
              <br></br>
              <SettingOutlined className='m-4' style={{ marginTop: '70px' }} />
            </Menu>
          </Col>

          <Col style={{ marginLeft: '60px' }}>
            <Wine Increment={this.handleIncrement} class='wine'>
              {' '}
            </Wine>
          </Col>

          <Col className='pl-5'>
            <table className='table mt-5' class='table'>
              {this.items.map((c) => {
                return (
                  <tr>
                    {' '}
                    <td id='table'>{c.Name}</td>{' '}
                    <td id='table'>
                      ${c.price} x {c.count}{' '}
                    </td>{' '}
                    <td id='table'> ${c.price * c.count}</td>
                  </tr>
                );
              })}
            </table>

            {(this.items = [])}
          </Col>
        </Row>
        <Row>
          <Col>
            <button id='submit' type='button' class='btn mb-5'>
              Pay $ {this.total}{' '}
            </button>
            {/* {this.total = 0} */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CheckOut;

// for(let i=0;i<1;i++)
// {
//     if(this.state.arr[i].arr2[i] != 0)
//     {
//         this.items.push(this.state.arr[i].arr2[i]);
//     }
// }
// console.log(this.items);
// console.log(this.state.(arr[0]).(arr2[0]));
// console.log(this.items);
//console.log(this.state[arr[0]][arr2[0]]);
