const GetProductos = async () => {
	const url = 'https://rickandmortyapi.com/api/character/?page=19'
	const res = await fetch(url) 
	const data = await res.json() 

	return data;
};
export default GetProductos; 
