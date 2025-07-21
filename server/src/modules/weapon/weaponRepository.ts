import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class WeaponRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM weapon");

    return rows;
  }

  async create(body: Weapon) {
    console.warn("JE SUIS DANS REPOSITORY");
    const [rows] = await databaseClient.query<Result>(
      "INSERT INTO weapon (name, image) VALUES (?, ?)",
      [body.name, body.image],
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
