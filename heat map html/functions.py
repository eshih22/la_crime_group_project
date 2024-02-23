from collections import defaultdict
from ipyleaflet import Map, Heatmap, FullScreenControl
from ipywidgets import Dropdown, HTML

# Function to clear existing markers from the map
def clear_markers():
    for layer in m.layers:
        if isinstance(layer, (Heatmap,)):
            m.remove_layer(layer)

# Function to add markers for selected criteria
def add_heatmap(year, precinct, crime_description):
    # Clear existing markers
    clear_markers()
    
    # Filter DataFrame based on selected criteria
    selected_data = top_crimes_df[
        (top_crimes_df['Year'] == year) &
        (top_crimes_df['Precinct'] == precinct) &
        (top_crimes_df['Crime Description'] == crime_description)
    ]
    
    # Extract latitude and longitude data
    locations = selected_data[['Latitude', 'longitude']].values.tolist()
    
    # Create a Heatmap layer
    heatmap_layer = Heatmap(locations=locations, radius=10)
    
    # Add the Heatmap layer to the map
    m.add_layer(heatmap_layer)

# Event handler for dropdowns
def on_dropdown_change(change):
    if change['name'] == 'value':
        year = year_dropdown.value
        precinct = precinct_dropdown.value
        crime_description = crime_dropdown.value
        add_heatmap(year, precinct, crime_description)

# Create a map centered around your area of interest
m = Map(center=(34.052235, -118.243683), zoom=10)

# Fit the bounds of the map
m.fit_bounds([[33.0, -119.0], [35.0, -117.0]])

# Get unique years, precincts, and crime descriptions
unique_years = top_crimes_df['Year'].unique()
unique_precincts = top_crimes_df['Precinct'].unique()
unique_crime_descriptions = top_crimes_df['Crime Description'].unique()

# Create dropdown menus
year_dropdown = Dropdown(options=unique_years, description='Year:')
precinct_dropdown = Dropdown(options=unique_precincts, description='Precinct:')
crime_dropdown = Dropdown(options=unique_crime_descriptions, description='Crime:')

year_dropdown.observe(on_dropdown_change)
precinct_dropdown.observe(on_dropdown_change)
crime_dropdown.observe(on_dropdown_change)

# Display the dropdown menus and the map
display(year_dropdown, precinct_dropdown, crime_dropdown, m)
#heatmap to use
