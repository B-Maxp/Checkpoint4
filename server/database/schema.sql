CREATE TABLE weapon (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(120) NOT NULL UNIQUE,
  image VARCHAR(250)
);

INSERT INTO weapon (name, image)
VALUES
  ('Whip', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Whip.png'),
  ('Magic Wand', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Magic-Wand.png'),
  ('Knife', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Knife.png'),
  ('Axe', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Axe.png'),
  ('Cross', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Cross.png'),
  ('King Bible', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-King-Bible.png'),
  ('Fire Wand', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Fire-Wand.png'),
  ('Garlic', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Garlic.png'),
  ('Santa Water', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Santa-Water.png'),
  ('Runetracer', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Runetracer.png'),
  ('Lightning Ring', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Lightning-Ring.png'),
  ('Pentagram', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Pentagram.png'),
  ('Peachong', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Peachone.png'),
  ('Ebony Wings', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Ebony-Wings.png'),
  ('Phiera Der Tuphello', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Phiera-Der-Tuphello.png'),
  ('Eight The Sparrow', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Eight-The-Sparrow.png'),
  ('Gatti Amari', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Gatti-Amari.png'),
  ('Song of Mana', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Song-of-Mana.png'),
  ('Shadow Pinion', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Shadow-Pinion.png'),
  ('Clock Lancet', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Clock-Lancet.png');
