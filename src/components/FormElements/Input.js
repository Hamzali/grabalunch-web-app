import React, {useCallback} from 'react';
const Input = ({name, onChange, type='text', value}) => {
	const handleChange = useCallback(e => {
		onChange(e.target.value)
	}, [onChange]);
	return <input name={name} type={type} value={value} onChange={handleChange} onClick={e => e.target.focus()}/>
};

export default Input;
