### login

apit POST "http://localhost:8888/api/v1/user/login" "./test/user/login.json"

### Test login admin

apit POST "http://localhost:8888/api/v1/user/login" "./test/user/login.json"

### Test save address

apit PUT "http://localhost:8888/api/v1/user/save-address" "./test/user/address.json" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzMzOTA3MiwiZXhwIjoxNjk3NDI1NDcyfQ.ASXzq7MggaM3FgiXra0IKYG1rZaz-m5VBubCl1DtjwM

#### result

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzI5MjE1NiwiZXhwIjoxNjk3Mzc4NTU2fQ.f2EmwCt_bFJiRLNVvLngNYAc8_ZghHjOG7L6XXMkw4E

### get all product

apit GET "http://localhost:8888/api/v1/product/" "" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzI5MjE1NiwiZXhwIjoxNjk3Mzc4NTU2fQ.f2EmwCt_bFJiRLNVvLngNYAc8_ZghHjOG7L6XXMkw4E"
"

#### return

[{"sold":0,"color":[],"\_id":"65211b6a95cd91ad05e7601e","ratings":[{"star":5,"comment":"hsjk","postedby":"651ff97c5d6dd3031d5cfa31","_id":"652963e30dd946cd3a047012"}],"updatedAt":"2023-10-13T15:39:41.730Z","totalrating":"5","images":[]}]%

### TEST UPLOAD PRODUCT IMAGE

apif "http://localhost:8888/api/v1/product/upload/65211b6a95cd91ad05e7601e" "./mywallpaper.jpg" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzI5MjE1NiwiZXhwIjoxNjk3Mzc4NTU2fQ.f2EmwCt_bFJiRLNVvLngNYAc8_ZghHjOG7L6XXMkw4E"

### Test upload

apif "http://localhost:8888/api/v1/upload/" "./mywallpaper.jpg" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzI5MjE1NiwiZXhwIjoxNjk3Mzc4NTU2fQ.f2EmwCt_bFJiRLNVvLngNYAc8_ZghHjOG7L6XXMkw4E"

### Test create cart

apit POST "http://localhost:8888/api/v1/user/cart" "./test/user/cart.json" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzMzOTA3MiwiZXhwIjoxNjk3NDI1NDcyfQ.ASXzq7MggaM3FgiXra0IKYG1rZaz-m5VBubCl1DtjwM

### Test get cart

apit GET "http://localhost:8888/api/v1/user/getcart" "" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzMzOTA3MiwiZXhwIjoxNjk3NDI1NDcyfQ.ASXzq7MggaM3FgiXra0IKYG1rZaz-m5VBubCl1DtjwM"

### Test create order

apit POST "http://localhost:8888/api/v1/user/cart/create-order" "./test/user/order.json" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzMzOTA3MiwiZXhwIjoxNjk3NDI1NDcyfQ.ASXzq7MggaM3FgiXra0IKYG1rZaz-m5VBubCl1DtjwM"

### Test get orders

apit GET "http://localhost:8888/api/v1/user/get-orders" "" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzMzOTA3MiwiZXhwIjoxNjk3NDI1NDcyfQ.ASXzq7MggaM3FgiXra0IKYG1rZaz-m5VBubCl1DtjwM"

### Test update status

apit PUT "http://localhost:8888/api/v1/user/order/update-status/652b6f21febc7d18f86218c4" "./test/user/status.json" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWZmOTdjNWQ2ZGQzMDMxZDVjZmEzMSIsImlhdCI6MTY5NzMzOTA3MiwiZXhwIjoxNjk3NDI1NDcyfQ.ASXzq7MggaM3FgiXra0IKYG1rZaz-m5VBubCl1DtjwM"
