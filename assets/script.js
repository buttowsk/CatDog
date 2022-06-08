const cat_url = 'https://aws.random.cat/meow';
const dog_url = 'https://dog.ceo/api/breeds/image/random'
const img = document.getElementById('imagem')


const loadCat = () => {
	const random_photo = fetch(cat_url)
		.then((Response) => Response.json())
		.then((jsonData) => img.src = jsonData.file)
		.catch((e) => console.log('Error: '+e))
};

const loadDog = () => {
	const random_photo = fetch(dog_url)
		.then((Response) => Response.json())
		.then((jsonData) => img.src = jsonData.message)
		.catch((e) => console.log('Error: '+e))
}
