export default {
  newProduct: 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
  getAllProducts: 'SELECT * FROM Trybesmith.products;',
  newUser: `INSERT INTO Trybesmith.users (username, vocation, level, password)
  VALUES (?, ? ,?, ?);`,
  IdUser: 'SELECT * FROM Trybesmith.users WHERE id = ?;',
  getAllOrders: `SELECT orders.id,
   orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds FROM Trybesmith.
   orders AS orders INNER JOIN
   Trybesmith.products AS products ON products.order_id = orders.id GROUP BY orders.id;`,
  getUserLogin: 'SELECT * FROM Trybesmith.users WHERE username = ?;',
  getAllUsers: 'SELECT * FROM Trybesmith.users WHERE username = ?;',
  newPostOrder: 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
  updateProducts: 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
};