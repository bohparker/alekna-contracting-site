from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/basement-remodel')
def basement_remodel():
    return render_template('basement-remodel.html')

@app.route('/kitchen-remodel')
def kitchen_remodel():
    return render_template('kitchen-remodel.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == "__main__":
    app.run()