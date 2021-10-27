conn = Mongo();

db = conn.getDB("admin");

db.createUser(
  {
    user: "root",
    pwd: passwordPrompt(), // or cleartext password
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)

db.adminCommand( { shutdown: 1 } )
