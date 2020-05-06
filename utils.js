
function mungeLocation(locationData){
    try {const firstitem = locationData[0];

        return {
            formatted_query: firstitem.display_name,
            latitude: firstitem.lat,
            longitude: firstitem.lon
        };
    } catch (e) {
        return {};
    }    
}



function mungeWeather(weatherData){
    
    try {
        const transformedData = weatherData.map(item => {
            return {
                forecast: item.weather.description,
                time: item.datetime
            };
        
        });
        return transformedData.slice(0, 8);
    } 
    catch (e) {
        return [{}];    
    }    
}

module.exports = {
    mungeLocation,
    mungeWeather
};