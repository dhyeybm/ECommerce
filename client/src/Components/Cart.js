import React,{Component} from "react";
import {Container,ListGroup,ListGroupItem,Button} from "reactstrap";
import {connect} from 'react-redux';
import {getCart,deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


class Cart extends Component
{
	componentDidMount() {
		this.props.getCart();
		console.log(this.props);
	}
	onDeleteClick = (id) => {
		this.props.deleteItem(id);
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

							<ListGroupItem className="item" key={_id}>
								<Button
									color="danger"
									size="sm"
									className="float-right"
									onClick={this.onDeleteClick.bind(this,_id)}
								>&times;
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
Cart.propTypes = {
	getCart:PropTypes.func.isRequired,
	item:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	item:state.item
	
});
export default connect(
	mapStateToProps,
	{getCart,deleteItem}
	)(Cart);