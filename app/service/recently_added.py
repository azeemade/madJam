from deepdiff import DeepDiff

# Print the missing character
def recently_added(previous_json, updated_string):
    # Get the differences between the strings
    differences = DeepDiff(previous_json, updated_string, verbose_level=2)

    # Create new tracks list to hold the difference between the previous and the new response
    recently_added  = []
    
    # Loop through the differences to append each new track to the recently_added list
    for track in differences['iterable_item_added'].values():
        recently_added.append(track)
    print('new tracks:', recently_added)
    return recently_added
