from flask import Flask, Response, request
from flask_cors import CORS
import os, subprocess

app = Flask(__name__)
CORS(app) #Cross origin to accept request from angular client

@app.route('/notes/<username>', methods=['GET'])
def getnotes(username):
    
    os.chdir("../client-notes")
    #open file and read the data
    notefile = open(username, 'a+')
    notesdata = notefile.read()
    notefile.close()
    os.chdir("../flask-app")
    # send the read data as response of type text/plain
    return Response(notesdata, mimetype="text/plain")

@app.route('/post/<username>', methods=['POST'])
def writenotes(username):
    
    os.chdir("../client-notes")
    #open/ create file and write data from client POST method
    notefile = open(username, 'w+')
    data = request.get_data()
    notefile.write(str(data))
    return Response(data, mimetype="text/plain")

if __name__ == "__main__":
    app.run(debug=True)