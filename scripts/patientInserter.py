import pandas as pd
import requests
import logging
import time

logging.basicConfig(filename="logs/patientinserter.log",format='%(asctime)s %(message)s',filemode='w')
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

URL = "http://localhost:8001/patient/insert"
df = pd.read_csv('../Data Generator/output/csv/patients.csv')
df = df.fillna('')

for index,row in df.iterrows():
    data={
        "id":row[0],
        "birthDate":row[1],
        "deathDate":row[2],
        "SSN":row[3],
        "driversLicence":row[4],
        "passport":row[5],
        "prefix":row[6],
        "first":row[7],
        "last":row[8],
        "suffix":row[9],
        "maiden":row[10],
        "marital":row[11],
        "race":row[12],
        "ethnicity":row[13],
        "gender":row[14],
        "birthplace":row[15],
        "address":row[16],
        "city":row[17],
        "state":row[18],
        "county":row[19],
        "zip":row[20],
        "latitude":row[21],
        "longitude":row[22],
        "healthCareExpenses":row[23],
        "healthCareCoverage":row[24],
        "income":row[25],
    }
    r=requests.post(url = URL,json=data)
    logger.debug(str(r.json()))
