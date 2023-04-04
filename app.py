from os import stat
from flask import Flask, render_template, request, url_for, redirect
import pickle

app = Flask(__name__)
mymodel = pickle.load(open("./RandomForest.pkl", "rb"))  # load model


@app.route('/')  # url binding
def loadhome():
    return render_template("homepage.html")


@app.route('/form', methods=['GET', 'POST'])
def form():
    return render_template("prediction.html")


@app.route('/prediction', methods=['GET', 'POST'])
def prediction():
    return redirect(url_for('form'))


@app.route('/submit', methods=['POST'])  # url binding
def user():
    #'N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'
    N = request.form["N"]
    P = request.form["P"]
    K = request.form["K"]
    temperature = request.form["temperature"]
    humidity = request.form["humidity"]
    ph = request.form["ph"]
    rainfall = request.form["rainfall"]
    # Education, Applicant Income, CoapplicantIncome, LoanAmount, Loan_Amount_Term, Credit_History, dependents(4), property(3)

    arrayofinputs = [[float(N), float(P), float(K), float(
        temperature), float(humidity), float(ph), float(rainfall)]]
    y = mymodel.predict(arrayofinputs)
    
    return render_template("result.html", output="The recommended crop for the soil type is "+y)


if __name__ == '__main__':
    app.run(debug=True, port=8000)
