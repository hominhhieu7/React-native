import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { DISHES } from '../Shared/dishes';

function RenderDish(props) {
    const dish = props.dish;
    if (dish != null) {
        return (
            <Card
                featuredSubtitle={dish.name}
                image={require('./images/uthappizza.png')}
            >
                <Text style={{ magin: 10 }} >
                    {dish.description}
                </Text>
            </Card>
        );
    } else {
        return (
            <View></View>
        );
    }
}
class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }
    static navigationOptions = {
        title: 'Dish Details'
    }
    render() {
        const dishId = this.props.navigation.getParam('dishId', '');
        return (
            <RenderDish dish={this.state.dishes[+dishId]} />
        );

    };
}
export default Dishdetail;