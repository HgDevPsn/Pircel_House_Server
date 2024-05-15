
function HouseService() {}

HouseService.prototype.getAllHouses = function() {
  return new Promise(function(resolve, reject) {
   fetch('https://wizard-world-api.herokuapp.com/houses')
   .then(response => {
    console.log("all House", response);
    return response.json();
   }).then((houses) => {
     resolve(houses);
   })
  });
};

HouseService.prototype.getHouseByName = function(name) {
  return new Promise(function(resolve, reject) {
    fetch('https://wizard-world-api.herokuapp.com/houses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }
        return response.json();
      })
      .then(houses => {
        if (name) {
          var foundHouse = houses.filter(house => house.name.toLowerCase().includes(name.toString().toLowerCase()));
          resolve(foundHouse);
          console.log(foundHouse, "services fetched houses");
        } else {
          resolve(houses);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = HouseService;