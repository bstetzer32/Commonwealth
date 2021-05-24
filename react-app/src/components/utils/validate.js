const USPS = require('usps-webtools');

const usps = new USPS({
  server: 'http://production.shippingapis.com/ShippingAPI.dll',
  userId: '083APPAC4213',
  ttl: 10000 //TTL in milliseconds for request
});

async function validateLocation(location) {
    
        const result = await usps.verify({
                street1: location.address_1,
                street2: location.address_2,
                city: location.city,
                state: location.state,
                zip: location.zip
            }, function(err, address) {
                // console.log(address)
                // return address
                if (address !== null) {
                    return address
                } else {
                    return err
                        // address_1: address.street1,
                        // address_2: address.street2,
                        // city: address.city,
                        // state: address.state,
                        // zip: address.zip
                }
            })
        console.log(result) 
        let validationResult
        // try {
        //     validationResult = validation()
        // } catch (error) {
            
        // }
        // try {
        //     console.log(validationResult)
        // } catch (error) {
            
        // }


}

validateLocation({
    address_1: '1001 Brownstone Drive',
    address_2: '',
    city: 'Jonesboro',
    state: 'arkansas',
    zip: '72404'
})

