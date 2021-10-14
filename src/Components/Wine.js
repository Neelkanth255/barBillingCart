import React, { Component } from 'react';
import Block from './block'
import './WineStyle.css';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import { DownloadOutlined } from '@ant-design/icons';
import { red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } from '@ant-design/colors';
import { generate, presetPalettes } from '@ant-design/colors';
 
//Lime

import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
import six from './6.jpg';

class Wine extends Component {
    state = 
    {  
        one: {count:0,Name:'8 Pm',price:7.50},
        two: {count:0,Name:'Domaine Serene',price:3.00},
        three: {count:0,Name:'Johny Walker',price:9.25},
        four: {count:0,Name:'Turborg',price:6.00},
        five: {count:0,Name:'Kingfisher',price:4.00},
        six: {count:0,Name:'Breezers',price:8.75}
    }



    
    handleCount1 = (c)=>
    {
        this.setState({one: {count:c,Name:'8 Pm',price:'7.5'}}); 
        this.props.Increment({one: {count:c,Name:'8 Pm',price:'7.5'}});
        // console.log(this.state.one);
    }

    handleCount2 = (c)=>
    {
        this.setState({two: {count:c,Name:'Domaine Serene',price:3.00}});
        this.props.Increment({two: {count:c,Name:'Domaine Serene',price:3.00}});
    }

    handleCount3 = (c)=>
    {
        this.setState({three: {count:c,Name:'Johny Walker',price:9.25}});
        this.props.Increment({three: {count:c,Name:'Johny Walker',price:9.25}});
    }

    handleCount4 = (c)=>
    {
        this.setState({four: {count:c,Name:'Turborg',price:6.00}});
        this.props.Increment({four: {count:c,Name:'Turborg',price:6.00}});
    }

    handleCount5 = (c)=>
    {
        this.setState({five: {count:c,Name:'Kingfisher',price:4.00}});
        this.props.Increment({five: {count:c,Name:'Kingfisher',price:4.00}});
    }

    handleCount6 = (c)=>
    {
        this.setState({six: {count:c,Name:'Breezers',price:8.75}});
        this.props.Increment({six: {count:c,Name:'Breezers',price:8.75}});
        // console.log(this.state);
    }

    render() { 
        return ( 
            <div className="pl-5" id="Major"> 
                <Row>
                    <Col> 
                            <div id="Main" className="border border-dark my-4">
                                <div id="inside">Drinks</div>
                                <div id="inside">Food</div>
                                <div id="inside">Desert</div>
                            </div>
                    </Col>
                    

                </Row>

                

                <Row className="py-3" >
                    <Col id="minor"> <Block name={this.state.one.Name} imge={one} price={this.state.one.price} Identity={this.handleIdentity} count={this.handleCount1}></Block></Col>
                    <Col id="minor" > <Block count={this.handleCount2} name={"Domaine Serene"} imge={two} price={3.00}></Block></Col>
                    
                    
                </Row>

                <Row className="py-3">
                    <Col id="minor"> <Block count={this.handleCount3} name={"Johny Walker"} imge={three} price={9.25}></Block></Col>
                    <Col id="minor"> <Block count={this.handleCount4} name={"Turborg"} imge={four} price={6.00}></Block></Col>
                    
                </Row>

                <Row className="py-3">
                    <Col id="minor"> <Block count={this.handleCount5} name={"Kingfisher"} imge={five} price={4.00}></Block></Col>
                    <Col id="minor"> <Block count={this.handleCount6} name={"Breezers"} imge={six} price={8.75}></Block></Col>
                    
                 </Row>
            </div>
         );
    }
}
 
export default Wine;