import React from 'react';
import { View} from 'react-native';
import { Card, Text } from 'react-native-elements';


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
function Dishdetail(props){
    return(
        <RenderDish dish= {props.dish} />
    );
}
export default Dishdetail;