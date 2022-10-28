import pandas as pd
import requests
import logging

logging.basicConfig(filename="logs/imaging_studies.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/imagingstudy/insert"
df = pd.read_csv('../Data Generator/output/csv/imaging_studies.csv')
df = df.fillna('')
count = 0;
for index,row in df.iterrows():
    if count < 954932:
        count+=1
        continue
    data={
        "id":row[0],
        "date":row[1],
        "patientid":row[2],
        "encounterid":row[3],
        "seriesudi":row[4],
        "bodysitecode":row[5],
        "bodysitedescription":row[6],
        "modalitycode":row[7],
        "modalitydescription":row[8],
        "instanceid":row[9],
        "sopcode":row[10],
        "sopdescription":row[11],
        "procedurecode":row[12]
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))


