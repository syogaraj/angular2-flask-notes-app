from flask import Flask, Response, request
import os, subprocess

app = Flask(__name__)

@app.route('/notes/<username>', methods=['GET'])
def getnotes(username):
    os.chdir("../client-notes")
    notefile = open(username, 'a+')
    notesdata = notefile.read()
    notefile.close()
    print "Data:",notesdata
    os.chdir("../flask-app")
    return Response(notesdata, mimetype="text/plain")

@app.route('/post/<username>', methods=['POST'])
def writenotes(username):
    os.chdir("../client-notes")
    notefile = open(username, 'w+')
    data = request.get_data()
    print data
    notefile.write(str(data))
    return "File written"

if __name__ == "__main__":
    app.run(debug=True)