const { cars } = require("../models");

class carsRepository {
  static async getCars() {
    const getCars = cars.findAll();

    return getCars;
  }

  static async createCars({ name, price, size, photo }) {
    const createCars = cars.create({
      name,
      price,
      size,
      photo,
    });
    return createCars;
  }

  static async getById({ id }) {
    const getByCarsId = await cars.findOne({
      where: {
        id,
      },
    });
    return getByCarsId;
  }

  static async updateCarsById({ id, name, price, size, photo }) {
    const updateCarsById = cars.update(
      {
        name,
        price,
        size,
        photo,
      },
      {
        where: {
          id,
        },
      }
    );
    return updateCarsById;
  }

  static async deleteCarsById({ id }) {
    // let deletedUsers = {};
    const deleteCarsById = cars.destroy({
      where: { id },
    });
    // users = deletedUsers;
    return deleteCarsById;
  }
}

module.exports = carsRepository;
