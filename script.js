// Initialize the map with a given center and zoom level
var map = L.map('mapid', {
    center: [38.79067602900888, -90.47923106215619],
    zoom: 16
});

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create an HTML element for the custom icon
var customIconHtml = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuUlEQVR4nMWaa4iWRRTHf6vbxc1LF1IrLRZB6LJafcqkLUGym+YHIyoqKqKLlgUZXaDoghYUCAWVFBVBBkliQREVlmaFfaiEDCq7GbVe2nLdNF3djQP/gWE477zPI/s87w9eXs45M3NmnsvMmTMPlKMduBRYDqwDtgC9wACwB9gG/AC8BzwBzAJGNGjrU+BbYD4t4CtgqORvU4O24jLrgc66BjFOTv8DHgRmRx1JOzcPWArslzw2M5AB/W8HZtYxkNPl8DunM43knyVPddoLZc8Bvo8u0rlUzMVy9kGm46n8ueRup7247NF654aAHmAyFXKTHL2a6Xgqr5Z8pdNeWnYUsFG6d6mQh+RkaaYzqfyc5MVOe2lZYxLwj/RzqIhn5WBRpjOp/LAz+EZlA/dI/zEV8YbzmDQbyO2SV5QYyBigHxgEplABH8nx7ExnUvlqyW+VGIjxmmx3UwHfqPEzSwzkkmjBKzOQ62WzyWLY+UmNn5LpTCrPkGyhSJmBnCHbj1TAn2p8fKRbr/m/kXyq6vzmtDcoW5tjO062/ZlY7ZDpU+OjS9SZqDp/ObYDso10bG3AvkPwV4gQN1kEXJQjVcc6lRI6eniDgezVXbM2hpW/5dimx6KMVR2rm7JXNq+j42XbQQV8rca7StTpUh2rm/KvbB2O7TLZNlDhyv54iTqPqo7VTdmdeQeel83ComHHru5B7QTjtSQX9ocVeppjDzGV7XNiRkc2r96w8JQc7ATOy5SboW3vkLbFHr2yH5Po75Q+nsaHncOAVdEcf5dTZlE0I60BjmjQ1k6VsTUj0AH8If3lVMxIJRbCgmaBYeA26cz2dJOpervKHh/p7pVuY4OFshKuinZ0gR7prilQP5SdINkesfC4XUiNjJJTe/kDe6QzWzPSR+vJqvchjZgkx1sj3VbpzJajTdmTQT1+J0QXYSY1M12OLbxPQ32z5Rijcha/GfdJfp8WMEvO10a6tdKZLcfk5G5+IXkBLeAKOX8z0q0q2KFpyd3sdWaw2rhVzl+IdCuku6VJ3W6V+0Ryv+SJtIAH5HxZpFsmndlyzFW5dyR/KXkuLSCEK0si3RLpzJbjWpWzJIPxWCbbUjkvy/mNTjbSbDnuULlnkhmwp84VPbDGiYnmRzFWkaylhfmBX6qOeBuxwVnAujPpn5jlTt4q3GGLfmtlsxyf5qRxvPRPzCsqd0Oku86ZzmvhVzk+OdJ1SmfnIjnedh7LszPb4krZ5uS5JjgRsUc4C7nAyWXtoGb6nKxKyJrsalJ3kxOTWVoonFrVSjj7a092kGH3mGOLyk1x6g5QMwfleESyexxSFrFI+tXC9/Ru9lEz+5wEW4d0lnzLscvJoIT0qr17tbLbOXoeV/CqhvSrPU4Bm8aHdMJbKyF5cGKkO6ngrHXAeb8uku5DWrQgxjPP9IILYtjWHhXpFkr3EjWzzjl9nVMwgRAS4sc6x20LqZkXndhoccFwPMxa4cOA9igx10XNhFB8ZaRbWfCqfqZy50teIHkzLaBT6Zx+fWsyVTPZYIEvfcLdtI9zzgJ+l3wzLSLcgfj3eoF685x6tu2tfVMVsCMAC8lt3bCffadS9Mzvfh2S2mnxI8maUpr/AS9p2Ewj3+mhAAAAAElFTkSuQmCC">';
    
// Create a custom icon using the HTML content
var customIcon = L.divIcon({
    html: customIconHtml,
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -37]
});

// Create an array of restaurant data
var restaurants = [
    {
        name: "Restaurant 1",
        location: [38.79094275623704, -90.47764836657578],
        description: "La Belle Vie"
    },
    {
        name: "Restaurant 2",
        location: [38.79138125689113, -90.47731419594638],
        description: "Course Coffee Roasters"
    },
    {
        name: "Restaurant 3",
        location: [38.79187990278788, -90.47706385604162],
        description: "Bike Stop Bakery"
    },
    {
        name: "Restaurant 4",
        location: [38.790766978165095, -90.47795858940495],
        description: "Le Good News Brewery"
    },
    {
        name: "Restaurant 5",
        location: [38.788365651199236, -90.47892329578266],
        description: "Sha's Coffee Bean"
    }
];

// Loop through the restaurant data and create markers with custom popups
restaurants.forEach(function(restaurant) {
    var marker = L.marker(restaurant.location, { icon: customIcon }).addTo(map);
    marker.bindPopup("<b>" + restaurant.name + "</b><br>" + restaurant.description).openPopup();
});
