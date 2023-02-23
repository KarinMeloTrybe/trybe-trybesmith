export default {
  newProduct: 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
  getAllProducts: 'SELECT * FROM Trybesmith.products;',
  newUser: `INSERT INTO Trybesmith.users (username, vocation, level, password)
  VALUES (?, ? ,?, ?);`,
};