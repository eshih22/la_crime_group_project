# app.py

from flask import Flask, render_template, request, jsonify
import pandas as pd
import json

app = Flask(__name__)

# Load data into a Pandas DataFrame
top_crimes_df = pd.read_csv('/Users/staciesauer/Desktop/Bootcamp Analysis Projects/Project 3/top_crimes.csv')

# Define a route to serve the index.html file
@app.route('/')
def index():
    # Extract unique years, precincts, and crime descriptions from the DataFrame
    unique_years = top_crimes_df['Year'].unique().tolist()
    unique_precincts = top_crimes_df['Precinct'].unique().tolist()
    unique_crime_descriptions = top_crimes_df['Crime Description'].unique().tolist()
    
    # Pass the extracted data to the HTML template
    return render_template('index.html', unique_years=unique_years, unique_precincts=unique_precincts, unique_crime_descriptions=unique_crime_descriptions)

@app.route('/update_heatmap', methods=['POST'])
def update_heatmap():
    # Extract data from the form
    year = request.form['year']
    precinct = request.form['precinct']
    crime_description = request.form['crime_description']
    
    # Filter DataFrame based on selected criteria
    filtered_data = top_crimes_df[(top_crimes_df['Year'] == int(year)) & 
                                  (top_crimes_df['Precinct'] == precinct) & 
                                  (top_crimes_df['Crime Description'] == crime_description)]
    
    # Extract latitude and longitude columns
    heatmap_data = filtered_data[['Latitude', 'longitude']].values.tolist()
    
    # Return heatmap data as JSON
    return jsonify(heatmap_data=heatmap_data)

if __name__ == '__main__':
    app.run(debug=True)
