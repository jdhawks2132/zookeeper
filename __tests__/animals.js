const fs = require('fs');
const {
	filterByQuery,
	findById,
	createNewAnimal,
	validateAnimal,
} = require('../lib/animals');
const { animals } = require('../data/animals');

jest.mock('fs');

describe('Creating a new Animal', () => {
	it('should create a new Animal', () => {
		const animal = createNewAnimal(
			{ name: 'Darlene', id: 'jhgdja3ng2' },
			animals
		);

		expect(animal.name).toBe('Darlene');
		expect(animal.id).toBe('jhgdja3ng2');
	});
});

describe('Filtering by query', () => {
	it('should filter by a query string', () => {
		const startingAnimals = [
			{
				id: '3',
				name: 'Erica',
				diet: 'omnivore',
				species: 'cat',
				personalityTraits: ['sweet', 'energetic', 'intelligent'],
			},
		];

		const updatedAnimals = filterByQuery({ species: 'cat' }, startingAnimals);

		expect(updatedAnimals.length).toEqual(1);
	});
});

describe('Finding by ID', () => {
	it('should find by ID', () => {
		const startingAnimals = [
			{
				id: '3',
				name: 'Erica',
				diet: 'omnivore',
				species: 'cat',
				personalityTraits: ['sweet', 'energetic', 'intelligent'],
			},
		];

		const result = findById('3', startingAnimals);

		expect(result.name).toBe('Erica');
	});
});

describe('Validating personality traits', () => {
  it('should return an error if no personality traits are provided', () => {
    const animal = {
      id: '3',
      name: 'Erica',
      diet: 'omnivore',
      species: 'cat',
    };

    const invalidAnimal = validateAnimal(animal);

    expect(invalidAnimal).toBe(false);
  });
});


