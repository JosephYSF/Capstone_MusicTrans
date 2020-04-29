from flask import Flask, render_template, request
from record import get_audio
from terminate import terminate
from transition import transition

app = Flask(__name__)

input_file_name = "input6.wav"
input_file_path = "/Users/sf/Desktop/RU/Capstone/SourceCode/Web/resource/"
input_path = input_file_path + input_file_name
@app.route('/record', methods=['GET'])
def record():
    get_audio(input_path)
    return "recordend"


@app.route('/stop', methods=['GET'])
def stop():
    terminate()
    return "stopend"


@app.route('/trans', methods=['GET'])
def tran():
    transition(input_path)
    # "/Users/sf/Desktop/RU/Capstone/SourceCode/Web/resource/xiaoxingxing.wav"
    return "transend"


@app.route('/')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()
