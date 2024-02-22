# la_crime_group_project
Group Project - LA Crime 
![image](https://github.com/eshih22/la_crime_group_project/assets/146681542/77fb3d76-60f7-4fd8-9d1f-391cada4e4d2)

## A study into the correlation between Covid-19 and LA Crime Rates, January 2020 to October 2023

Our hypothesis is that the crime rate will decrease starting March 16,2020 as businesses in California start to close-down as a result of the  shutdown in response to Covid-19 Outbreak, and then begin increasing as restrictions are lifted with Covid-19 eventually ending (per CDC) on May 11, 2023.

## Dataset Overview
The dataset we used was downloaded via Kaggle - 
Los Angeles Crime Data from 2020 to 2023

The dataset provides comprehensive information about crime incidents reported in Los Angeles from January 2020 to June 2023. It includes details such as the type of crime, date and time of occurrence, location, and other relevant attributes. The dataset is sourced from the Los Angeles Police Department and offers valuable insights into crime patterns and trends in the city.

### Here are the 28 Columns in our dataset along with a brief description:

* 'DR_NO':	Division of Records Number: Official file number made up of a 2 digit year, area ID, and 5 digits.
* 'Date Rptd':	Date reported - MM/DD/YYYY.
* 'DATE OCC':	Date of occurence - MM/DD/YYYY.
* 'TIME OCC':	In 24 hour military time.
* 'AREA':	The LAPD has 21 Community Police Stations referred to as Geographic Areas within the department. These Geographic Areas are sequentially numbered from 1-21.
* 'AREA NAME':	The 21 Geographic Areas or Patrol Divisions are also given a name designation that references a landmark or the surrounding community that it is responsible for. For example 77th Street Division is located at the intersection of South Broadway and 77th Street, serving neighborhoods in South Los Angeles.
* 'Rpt Dist No':	A four-digit code that represents a sub-area within a Geographic Area. All crime records reference the "RD" that it occurred in for statistical comparisons. Find LAPD Reporting Districts on the LA City GeoHub at http://geohub.lacity.org/datasets/c4f83909b81d4786aa8ba8a74ab
* 'Crm Cd':	Crime code for the offence committed.
* 'Crm Cd Desc':	Definition of the crime.
* 'Vict Age':	Victim Age (years)
* 'Vict Sex':	Victim's sex: F: Female, M: Male, X: Unknown.
* 'Vict Descent':	Victim's descent:
A - Other Asian
B - Black
C - Chinese
D - Cambodian
F - Filipino
G - Guamanian
H - Hispanic/Latin/Mexican
I - American Indian/Alaskan Native
J - Japanese
K - Korean
L - Laotian
O - Other
P - Pacific Islander
S - Samoan
U - Hawaiian
V - Vietnamese
W - White
X - Unknown
Z - Asian Indian
* 'Premis Cd':	Code for the type of structure, vehicle, or location where the crime took place.
* 'Premis Desc':	Definition of the 'Premis Cd'.
* 'Weapon Used Cd':	The type of weapon used in the crime.
* 'Weapon Desc':	Description of the weapon used (if applicable).
* 'Status Desc':	Crime status.
* 'Crm Cd 1':	Indicates the crime committed. Crime Code 1 is the primary and most serious one. Crime Code 2, 3, and 4 are respectively less serious offenses. Lower crime class numbers are more serious.
* 'Crm Cd 2':	May contain a code for an additional crime, less serious than Crime Code 1.
* 'Crm Cd 3':	May contain a code for an additional crime, less serious than Crime Code 1.
* 'Crm Cd 4':	May contain a code for an additional crime, less serious than Crime Code 1.
* 'LOCATION':	Street address of the crime.
* 'Cross Street':	Cross Street of rounded Address
* 'LAT': Latitude of the crime location.
* 'LON':	Longtitude of the crime location.

## Preparing the Data 
Upon downloading the dataset, we immediately took the following steps to clean the data:

* Checked for missing values in each column
* Checked for duplicate values
* Filled N/A values with 'unknown'
* Converted date columns to date/time format
* Created new columns for Year and Month to aid analysis
* Dropped columns which were deemed unnecessary to analysis
* Renamed all columns and checked for spelling and grammatical errors

![image](https://github.com/eshih22/la_crime_group_project/assets/146681542/fcbcb50f-5e37-4ab0-83ad-1dc91b81a93a)


Now we are ready to identify the areas we wish to analyse in this project:

* 1.Has the overall crime rate increased, decreased, or remained stable across different categories (violent, property, etc.)
 
* 2.If so, which crimes have increased / decreased the most since Covid began?

* 3.Are there specific neighborhoods or communities with higher crime rates than others?
  
* 4.Are there any demographic groups disproportionately represented as victims or perpetrators of crime?

* 5.Are there any specific years or periods in the dataset that saw significant changes in crime rates? 
 
* 6.Do spatial patterns differ across different crime categories?

We will answer these questions using a variety of tools including Python, Javascript, Leaflet and Folium.



### Eric -
*My analysis in answering qustions 1 & 2 aims to determine whether the overall crime rate increased, decreased, or remained stable across various categories. Additionally, it seeks to identify specific crime categories most affected by the pandemic, with the goal of contributing to public awareness and understanding of how unprecedented events, like the pandemic, influence crime dynamics.


### Stacie - 
My analysis regarding spatial patterns was to determine whether there was a difference in the level of crime rate based on geography in various crime categories. Initially, I started with the entire data set and was able to see two clear areas in LA that have the highest crime rate in every category tracked. Due to the volume of data, I then broke down the data set into the top 5 crime categories. Those same two areas are still top contenders which remained consistent throughout the pandemic.
![image](https://github.com/eshih22/la_crime_group_project/assets/146681542/5aec970b-03a9-4bb6-9726-d8d6bed73657)


### Michéal - 
In analyzing this dataset with regard to upticks in crime during certain years or periods, I focused initially on crimes committed by hour, by day, by month amd by year. I then broke the dataset down further and examined month to month changes in crime, performing linear regression and  the Pearson correlation coefficiency between Month and Change in crime counts to determine any relationships between crime increases or decreases and the month of the year. Using Folium, I produced a heatmap showing top 5 crimes committed in LA County, with a dropdown menu to toggle between years.
Leaflet and Javascript were also used to produce a map of LA County showing all 21 precincts with markers containing Total Crime information per year along with a dropdown for the user to switch and view figures on an annual basis.



### Tasnia - 








