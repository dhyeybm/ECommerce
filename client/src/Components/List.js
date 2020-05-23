import React,{Component} from "react";
import {Container,ListGroup,ListGroupItem,Button} from "reactstrap";
import {connect} from 'react-redux';
import {getItems,deleteItem,addItem} from '../actions/itemActions';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


class List extends Component
{
	state = {text:"Add to Cart"};
	componentDidMount() {
		this.props.getItems();
		console.log(this.props);
	}
	onAddClick = (_id,name,description,price) => {
		alert("Item Added")
		const newItem = {
			name:name,
			description:description,
			price:price
        }
		this.props.addItem(newItem);
	}
	render() 
	{
		const {items} = this.props.item;
		return(
			<Container>
				{/* <Button 
					color="dark"
					style={{marginBottom:"2rem"}}
					onClick={()=>{
						const name=prompt('Enter Name');
						if(name){
							this.setState(prevState => ({
								items:[...prevState.items,{id:uuid(),name:name}]
							}));
						}
					}
					}>
					Add Item
				</Button> */}
				<ListGroup>
					{items.map(({_id,name,description,price}) => (

							<ListGroupItem className="item" key={_id} keyProp={_id}>
								<Button id="_id"
									color="primary"
									size="sm"
									className="float-right"
									onClick={this.onAddClick.bind(this,_id,name,description,price)}
								>Add to Cart
								</Button>
								<h4>{name}:&emsp;${price}</h4>
                                <p>{description}</p>
								

							</ListGroupItem>
					))}
				</ListGroup>

			</Container>
		)
	}
}
List.propTypes = {
	getItems:PropTypes.func.isRequired,
	item:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	item:state.item
	
});
export default connect(
	mapStateToProps,
	{getItems,deleteItem,addItem}
	)(List);