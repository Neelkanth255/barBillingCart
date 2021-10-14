import React, { Component } from 'react';
import './blockStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';



class Block extends Component {
  state = {
    count: 0,
    priceB: this.props.price, // Parent
    Name: this.props.name, // Parent
    img: this.props.imge, // Parent
  };

  handlePlus = async (e) => {
    // console.log(this.state.count);
    e.persist();
    // console.log(e.target);
    await this.setState({ count: this.state.count + 1 });
    // await this.props.Identity(e.target);
    await this.props.count(this.state.count);
  };

  handleMinus = async (e) => {
    // console.log(this.state.count);
    if (this.state.count >= 1) {
      await this.setState({ count: this.state.count - 1 });
    }
    await this.props.count(this.state.count);
  };

  // handleDisplay = (e)=>
  // {
  //     e.target.style.background = 'red';
  //     console.log("HOVVERING");
  // }

  render() {
    return (
      <div className='p-4 ' class='Item'>
        <img src={this.state.img} height='120' width='120' />
        <div id='m1'>
          <pre id='info' className='pl-3'>
            <b>{this.state.Name}</b> <br></br>$ {this.state.priceB}
          </pre>

          <div className='pt-4   '>
            <button
              onClick={this.handleMinus}
              name='Minus'
              class='button'
              className='btn border rounded-0 bg-white m-1'
              type='button'
            >
              -
            </button>
            <button
              class='button'
              className='btn border rounded-0 bg-white'
              type='button'
              disabled
            >
              {this.state.count}
            </button>
            <button
              onClick={this.handlePlus}
              name='Plus'
              class='button'
              className='btn border  rounded-0 bg-white m-1'
              type='button'
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
