CREATE TABLE crime_la (
    Report_Date DATE NOT NULL,
    Occurence_Date DATE NOT NULL,
    Precinct VARCHAR NOT NULL,
    Reporting_District_Number INT,
    Crime_Description VARCHAR,
    Victim_Age INT,
    Victim_Sex VARCHAR,
    Victim_Descent VARCHAR,
    Premises_Description VARCHAR,
    Weapon_Description VARCHAR,
    Crime_Status_Description VARCHAR,
    Primary_Crime_Code VARCHAR,
    Crime_Location VARCHAR,
    Latitude FLOAT,
    Longitude FLOAT
);