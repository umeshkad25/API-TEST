import {test,expect} from '@playwright/test';

test('my method',async ({request})=>{

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzMjAyLCJlbWFpbCI6InVtZXNoMTIzQGV4YW1wbGUuY29tIiwiaWF0IjoxNzg0MTA0MzAwLCJleHAiOjE3ODQ3MDkxMDB9.nRZ94GEJBpaZpXTVuTM-VPAvG-M96xBqjuRQcANjiYs';
    const myResponse = await request.get('https://api.eventhub.rahulshettyacademy.com/api/events?category=Conference&city=Bangalore&search=summit&page=1&limit=10',
        {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
    );
 
    console.log(await myResponse.body);

});