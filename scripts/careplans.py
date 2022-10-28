import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/careplans.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/careplan/insert"
df = pd.read_csv('../Data Generator/output/csv/careplans.csv')
df = df.fillna('')
for index,row in df.iterrows():
    data={
        "id":row[0],
        "start":row[1],
        "stop":row[2],
        "patientid":row[3],
        "encounterid":row[4],
        "code":row[5],
        "description":row[6],
        "reasoncode":row[7],
        "reasondescription":row[8]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))


