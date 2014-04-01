import os
import zipfile

from flask import Flask, send_from_directory
from flask import render_template
from flask import request

from utils import generate_unique_filename, zipdir

app = Flask(__name__, static_url_path='')

ROOT = os.path.dirname(os.path.realpath(__file__))

from jinja2 import Environment, PackageLoader
env = Environment(
    loader=PackageLoader('app', 'slide_template'))


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/save', methods=['POST'])
def save():
    data = request.form.to_dict()
    template = env.get_template('index.html')
    html = template.render(slides=data['html'])

    unique_filename = generate_unique_filename()

    if not os.path.exists('tmp'):
        os.makedirs('tmp')
    tmp_path = os.path.join(ROOT, 'tmp')
    filepath = os.path.join(tmp_path, unique_filename)

    zipf = zipfile.ZipFile(filepath, 'w')
    zipdir('slides', zipf)
    zipf.writestr('slides/index.html', html)
    zipf.close()
    return send_from_directory(tmp_path,
                               unique_filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
