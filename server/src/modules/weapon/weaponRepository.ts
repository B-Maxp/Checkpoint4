import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class WeaponRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM weapon");

    return rows;
  }

  async readById(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM weapon WHERE id = ?",
      [id],
    );

    return rows[0];
  }

  async create(body: Weapon) {
    const [rows] = await databaseClient.query<Result>(
      "INSERT INTO weapon (name, image) VALUES (?, ?)",
      [body.name, body.image],
    );

    return rows.affectedRows;
  }

    async update(body: Weapon, id: string) {
    const [rows] = await databaseClient.query<Result>(
      "UPDATE weapon SET name = ?, image = ? WHERE id = ?",
      [body.name, body.image, id],
    );

    return rows.affectedRows;
  }

  async delete(id: string) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM weapon WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new WeaponRepository();
