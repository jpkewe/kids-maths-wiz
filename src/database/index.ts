import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, 'kids_maths_wiz.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
  );
`);

export interface Profile {
  id: number;
  name: string;
}

const createProfile = (name: string): number => {
  const stmt = db.prepare('INSERT INTO profiles (name) VALUES (?)');
  const result = stmt.run(name);
  return result.lastInsertRowid as number;
};

const getAllProfiles = (): Profile[] => {
  const stmt = db.prepare('SELECT * FROM profiles');
  return stmt.all() as Profile[];
};

const getProfileById = (id: number): Profile | undefined => {
  const stmt = db.prepare('SELECT * FROM profiles WHERE id = ?');
  return stmt.get(id) as Profile | undefined;
};

const updateProfile = (id: number, name: string): void => {
  const stmt = db.prepare('UPDATE profiles SET name = ? WHERE id = ?');
  stmt.run(name, id);
};

const deleteProfile = (id: number): void => {
  const stmt = db.prepare('DELETE FROM profiles WHERE id = ?');
  stmt.run(id);
};


export {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
};

export default db;