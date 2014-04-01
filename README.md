Reveal-Editor
=============

This is an experimental editor to make revealjs presentation in the web browser without having to write code. It's in *very* early stage of development.

Installation
------------
Reveal-editor is a flask app. You'll need to have python and the dependencies installed to run it.

First clone the repository by doing the following:
```bash
$ git clone git@github.com:sunu/reveal-editor.git
```
Change into the project's directory:
```bash
$ cd reveal-editor
```
Create the Python virtual environment and activate it:
```bash
$ virtualenv env
$ source env/bin/activate
```
Install dependencies:
```bash
$ pip install -r requirements.txt
```
Launch the development server:
```bash
$ python app.py
```
Navigate to [http://127.0.0.1:5000/](http://127.0.0.1:5000/) to see the app in action.

Demo of an earlier version with no save option is at http://tarashish.com/reveal-editor
