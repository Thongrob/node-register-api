const conn = require('../configuration/db_conention')
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let fname = req.body.fname;
  let lname = req.body.lname;
  let phone = req.body.phone;

  //Hash password with Bcrypt
  bcrypt.hash(password, saltRounds, function(err, hash) {
    
    //Protect SQL injection
    conn.execute('INSERT INTO users (email, password, fname, lname, phone) VALUES(?, ?, ?, ?, ?)', 
      [email, hash, fname, lname ,phone], 
      (err, results, fields) => {
        if(err) {
          res.json({
            status : "Error",
            message: err
          })
          return
        }
        res.json({
          status: "success",
          data: results
        })
      }
    )
  });      
}