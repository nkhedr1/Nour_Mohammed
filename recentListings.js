/*
Pseudo code:

1. Assuming the listings are an array of objects containing the name, address, and date of the listings we get the listings array.
2. If the array is empty it returns an array with a string ["No lists provided"].
3. Set an empty dictionary for the recent listings and an empty array for the final results.
4. Loop through the listings array and check if there is no current listing in the dictionary with the key as the address.
   If there is no current object with that key then create a new object in the dictionary with the key as the address, and the value as an array consiting of [date, name].
   Else if the object contains a key with the current address of the listing. 
      If the date in the current listing is larger than the date in the object in the dictionary, replace tha value of that object to be the [date, name] of the current listing.
5. Iterate through the dictionary and push each name of the object to the final results array.
6. Return the final results array.

Space and runtime complexity:

The runtime complexity of this code is O(n), where n is the number of listings in the input array. This is because the code iterates through the input array only once, and performs constant-time operations (such as object property access, comparison, and assignment) during each iteration.

The space complexity of this code is O(m), where m is the number of unique addresses in the input array. This is because the code uses an object (recentListingsObject) to store the most recent listing for each address, which can potentially have up to m key-value pairs. Additionally, the code uses an array (recentListingsNames) to store the names of the most recent listings, which can have up to m elements. Therefore, the space used by the code scales with the number of unique addresses in the input array, rather than the total number of listings.
*/

function getRecentListings(listings) {
  if (listings.length === 0) return ["No lists provided"]

  let recentListingsObject = {};
  let recentListingsNames = []

  for (let i = 0; i < listings.length; i++) {
    if (!recentListingsObject[listings[i].address]) {
      recentListingsObject[listings[i].address] = [listings[i].date, listings[i].name]
    }
    else {
      if (listings[i].date > recentListingsObject[listings[i].address][0]) {
        recentListingsObject[listings[i].address] = [listings[i].date, listings[i].name]
      }
    }
    
  }
  for (let listing in recentListingsObject) {
    recentListingsNames.push(recentListingsObject[listing][1])
  }
  return recentListingsNames
 
}


// Example usage:
const listings = [
  { name: 'L4', address: '123 kings road', date: 2022 },
  { name: 'L1', address: '123 kings road', date: 2020 },
  { name: 'L2', address: '20 queen road', date: 1990 },
  { name: 'L3', address: '20 queen road', date: 1992 }
];


console.log(getRecentListings(listings));
console.log(getRecentListings([]));
