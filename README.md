# coffee-api

#GET /coffee
> Lists all coffee

#GET /coffee/:id
> Get a coffee by it's ID

#GET /coffee/:name
> Get a coffee by it's name

#GET /coffee/:location
> Get all coffees by location

#GET /coffee/caffieneAbove/:num
> Get all coffees with caffiene greater than :num

#GET /coffee/caffieneBelow/:num
> Get all coffees with caffiene less than :num

#POST /coffee
> Post coffee to warehouse/database

#PUT /coffee
> Edit coffee by :id

#DELETE /coffee/:id
> Delete coffee by :id



#GET /order
> List all orders

#GET /order/:id
> List order by :id

#GET /order/:coffee
> List all orders that have the attribute itemsBought populated with :coffee

#POST /order
> Post order to database

#PUT /order/:id
> Edit order by :id

#PUT /order/:id/pending
> Edit order with :id's status to pending

#PUT /order/:id/shipped
> Edit order with :id's status to shipped

#PUT /order/:id/voided
> Edit order with :id's status to voided

#GET /order/proccessed
> List all orders with a status columm that is not null (!null)