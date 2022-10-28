import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/allergies.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/allergy/insert"
df = pd.read_csv('../Data Generator/output/csv/allergies.csv')
df = df.fillna('')

for index,row in df.iterrows():
    data={
        "start":row[0],
        "stop":row[1],
        "patientid":row[2],
        "encounterid":row[3],
        "code":row[4],
        "system":row[5],
        "description":row[6],
        "type":row[7],
        "category":row[8],
        "reaction1":row[9],
        "description1":row[10],
        "severity1":row[11],
        "reaction2":row[12],
        "description2":row[13],
        "severity2":row[14]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))
