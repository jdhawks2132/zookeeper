const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

jest.mock("fs");

describe("Creating a new Zookeeper", () => {
  it("should create a new Zookeeper", () => {
    const zookeeper = createNewZookeeper(
      { name: "Darlene", id: "jhgdja3ng2" },
      zookeepers
    );

    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("jhgdja3ng2");
  });
});

describe("Filtering by query", () => {
  it("should filter by a query string", () => {
    const startingZookeepers = [
      {
        id: "3",
        name: "Erica",
        age: 24,
        favoriteAnimal: "penguin",
      },
    ];

    const updatedZookeepers = filterByQuery(
      { favoriteAnimal: "penguin" },
      startingZookeepers
    );

    expect(updatedZookeepers.length).toEqual(1);
  });
});

describe("Finding by ID", () => {
  it("should find by ID", () => {
    const startingZookeepers = [
      {
        id: "3",
        name: "Erica",
        age: 24,
        favoriteAnimal: "penguin",
      },
    ];

    const result = findById("3", startingZookeepers);

    expect(result.name).toBe("Erica");
  });
});

describe("Validating Zookeeper", () => {
  it("should return false if any data is missing", () => {
    const zookeeper = {
      id: "3",
      name: "Erica",
      age: 24,
      favoriteAnimal: "penguin",
    };

    const invalidZookeeper = {
      id: "3",
      name: "Erica",
      favoriteAnimal: "penguin",
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
  });
});
