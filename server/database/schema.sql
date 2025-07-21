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
  ('Runetracer', 'https://www.mandatory.gg/wp-content/uploads/mandatory-vampire-survivors-armes-Runetracer.png');
