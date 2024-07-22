from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data['name']
    message = f'Hello, {name}! Welcome to the application.'
    return jsonify({'message': message})

if __name__ == '__main__':
    app.run(debug=True)
