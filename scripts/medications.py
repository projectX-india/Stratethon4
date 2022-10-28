import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/medications.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/medication/insert"
df = pd.read_csv('../Data Generator/output/csv/medications.csv')
df = df.fillna('')

for index,row in df.iterrows():
    data={
        "start":row[0],
        "stop":row[1],
        "patientid":row[2],
        "payerid":row[3],
        "encounterid":row[4],
        "code":row[5],
        "description":row[6],
        "basecost":row[7],
        "payercoverage":row[8],
        "dispenses":row[9],
        "totalcost":row[10],
        "reasoncode":row[11],
        "reasondescription":row[12]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))


