from flask import Flask
import joblib
import numpy as np
from enum import Enum
from flask_cors import CORS

with open("./model/similarity.pkl",'rb') as file:
    similarity = joblib.load(file)
with open("./data.pkl",'rb') as file:
    data = joblib.load(file)
# with open("./model/Events.pkl",'rb') as file:
#     Events = pickle.load(file)
# Continent = pickle.load(open("./model/Continent.pkl",'rb'))

from flask import Flask,request, jsonify,render_template

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/predict",methods=['POST'])
def predict():
    
    features = [str(x) for x in request.form.values()]
    for i in range(len(features)):
        if features[i].isdigit():
            features[i] = int(features[i])
    input = str(features[1])
    print(features)
    res = []
    if int(features[0])+1 == 1:
        index = data[data['continent'] == input].index[0]
        distance = sorted(list(enumerate(similarity[index])),reverse = True, key = lambda vector:vector[1])
        for i in distance[0:5]:
            temp = [str(data.iloc[i[0]].country),str(data.iloc[i[0]].city),str(data.iloc[i[0]].keywords),str(data.iloc[i[0]].event_cost)]
            print(data.iloc[i[0]].country)
            print(data.iloc[i[0]].city)
            print(data.iloc[i[0]].keywords)
            print(data.iloc[i[0]].event_cost)
            print("\n")
            res.append(temp)
            print("result",res)
        
    elif int(features[0])+1 == 2:
        index = data[data['country'] == input].index[0]
        distance = sorted(list(enumerate(similarity[index])),reverse = True,key = lambda vector:vector[1])
        for i in distance[0:5]:
            temp = [str(data.iloc[i[0]].continent),str(data.iloc[i[0]].city),str(data.iloc[i[0]].keywords)]
            print(data.iloc[i[0]].continent)
            print(data.iloc[i[0]].city)
            print(data.iloc[i[0]].keywords)
            print("\n")
            res.append(temp)
            print("result",res)
    elif int(features[0])+1 == 3:
        index = data[data['keywords'] == input].index[0]
        distance = sorted(list(enumerate(similarity[index])),reverse = True,key=lambda vector:vector[1])
        for i in distance[0:5]:
            temp = [str(data.iloc[i[0]].continent),str(data.iloc[i[0]].country),str(data.iloc[i[0]].city),str(data.iloc[i[0]].event_cost)]
            print(data.iloc[i[0]].continent)
            print(data.iloc[i[0]].country)
            print(data.iloc[i[0]].city)
            print(data.iloc[i[0]].event_cost)
            print("\n")
            res.append(temp)
            print("result",res)
    
    else:
        print("invalid")
    
    return res
    
    # if output == 1:
    #     return render_template('index.html', prediction_text = "Good")
    # else:
    #     return render_template('index.html',prediction_text ="bad")

if __name__ == '__main__':
    app.run(debug=True)