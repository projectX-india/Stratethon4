import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/procedures.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/procedure/insert"
df = pd.read_csv('../Data Generator/output/csv/procedures.csv')
df = df.fillna('')
count = 0
for index,row in df.iterrows():
    if count < 942165:
        count+=1
        continue
    data={
        "start":row[0],
        "stop":row[1],
        "patientid":row[2],
        "encounterid":row[3],
        "code":row[4],
        "description":row[5],
        "basecost":row[6],
        "reasoncode":row[7],
        "reasondescription":row[8]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))


