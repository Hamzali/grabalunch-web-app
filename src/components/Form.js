import React, {useCallback, useReducer} from "react";
import Button from "../views/Button";

const FORM_ACTIONS = {
	INPUT_CHANGE: 'INPUT_CHANGE'
};

const handlers = {
	[FORM_ACTIONS.INPUT_CHANGE]: (state, payload) => {
		const {name, value} = payload;
		return {
			...state,
			[name]: value
		};
	}
};

function reducer(state, action) {
	const {type, payload} = action;
	const handler = handlers[type];
	if (handler) {
		return handler(state, payload);
	}
	return state;
}

const initial = {};
function Form({onSubmit, children}) {
	const  [state, dispatch] = useReducer(reducer, initial);
	const handleSubmit = useCallback(e => {
		e.preventDefault();
		onSubmit(state);
	}, [onSubmit, state]);
	return <form onSubmit={handleSubmit} style={{zIndex: 10}}>
		{React.Children.map(children, InputElement => {
			const {name} = InputElement.props;
			if (name == null) {
				return InputElement;
			}
			const onChange = val => dispatch({type: FORM_ACTIONS.INPUT_CHANGE, payload: {name, value: val}});
			const value = state[name] || '';
			return React.cloneElement(InputElement, {...InputElement.props, onChange, value})
		})}
		<Button type='submit'>Submit</Button>
	</form>
}

export default Form;
