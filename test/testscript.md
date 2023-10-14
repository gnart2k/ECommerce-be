### login

apit POST "http://localhost:8888/api/v1/user/login" "./test/user/login.json"

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
