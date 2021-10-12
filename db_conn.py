from flask import Flask, render_template, request
import os
import mysql.connector
from mysql.connector import errorcode
from login_backend import login_blueprint
from signup_backend import signup_blueprint


app = Flask(__name__)




@app.route('/', methods=['GET', 'POST'])
def connect(): 
    try:
        cnx = mysql.connector.connect(user='root', password='',
                              host='127.0.0.1')

        

        cursor = cnx.cursor()

        cursor.execute("CREATE DATABASE IF NOT EXISTS SeniorProject")

        cursor.execute("CREATE TABLE IF NOT EXISTS SeniorProject.Users ( \
  `userid` int(10) NOT NULL AUTO_INCREMENT, \
  `firstName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci, \
  `lastName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, \
  `phone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, \
  `password` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, \
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL, \
  `birthDay` DATE DEFAULT NULL,\
  PRIMARY KEY (`userid`), \
  UNIQUE KEY `phone_UNIQUE` (`phone`), \
  UNIQUE KEY `email_UNIQUE` (`email`), \
  CHECK (`phone` NOT LIKE '%[^0-9]%' AND LENGTH(`phone`) = 10) \
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci")
    
        cursor.close()
        cnx.close()
        return "success"
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            return "Something is wrong with your user name or password"
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            return "Database does not exist"
        else:
            return err

app.register_blueprint(login_blueprint)

app.register_blueprint(signup_blueprint)

if __name__ == '__main__':
    app.run(host='192.168.0.2', 
            port=3000, debug=True)