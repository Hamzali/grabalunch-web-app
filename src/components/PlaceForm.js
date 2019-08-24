import React from 'react';
import Form from "./Form";
import Input from "./FormElements/Input";

function PlaceForm({onSubmit}) {
	return <>
		<h1>Add Restaurant</h1>
		<Form onSubmit={onSubmit}>
			<Input name='name'/>
			<Input name='description'/>
		</Form>
	</>;
}

export default PlaceForm;
