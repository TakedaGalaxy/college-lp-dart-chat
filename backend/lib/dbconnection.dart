import 'package:sqlite3/sqlite3.dart';
import 'user.dart';

class DBConnection {
  late Database _db;

  DBConnection() {
    try {
      _db = sqlite3.openInMemory();
      _createUser();
      _createMessage();
    } catch (err) {
      print('Error: $err');
      return;
    }
  }

  void _createUser() {
    _db.execute('''
      CREATE TABLE User(
        name VARCHAR(50) PRIMARY KEY,
        password VARCHAR(50) NOT NULL
      );
      ''');
  }

  void _createMessage() {
    _db.execute('''
      CREATE TABLE Message(
        user VARCHAR(50) NOT NULL,
        timestamp VARCHAR(50) NOT NULL,
        type VARCHAR(50) NOT NULL,
        text VARCHAR(50) NOT NULL
      );
      ''');
  }

  void insertUser(User user) {
    _db.execute('INSERT INTO User(name, password) VALUES(?, ?)',
        [user.name, user.password]);
  }

  void updateUserPassword(User user) {
    _db.execute('UPDATE User SET password = ? WHERE user = ?',
        [user.password, user.name]);
  }

  User selectUser(String user) {
    if (user == "") throw FormatException("Usuário inválido");

    final ResultSet set =
        _db.select("SELECT * FROM User WHERE name = ?", [user]);

    if (set.isNotEmpty) {
      final Row row = set.first;
      return User(row['name'], row['password']);
    } else {
      throw Exception("Usuário não encontrado");
    }
  }
}
