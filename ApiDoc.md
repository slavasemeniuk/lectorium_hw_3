# API Documentation



### Item

| Property   | Type   |           |
|:---------- | ------ | --------- |
| name       | string | mandatory |
| age        | number | optional  |
| identifier | uuid   | mandatory |

## Endpoints



### Get items

**Path:** /items

**Method:** GET



**Response**

```json
[
    {
        "name": "Test",
        "age": 44,
        "identifier": "12af12b0-2182-11ea-ab79-ff8327ef83ce"
    },
    {
        "name": "Slava",
        "age": 24,
        "identifier": "f19e6990-2181-11ea-ab79-ff8327ef83ce"
    }
]
```



### Get item

**Path:** /items/:item-id

**Method:** GET

**Response**

```json
{
    "name": "Test",
    "age": 44,
    "identifier": "12af12b0-2182-11ea-ab79-ff8327ef83ce"
}
```



### Create item

**Path:** /items

**Method:** POST

**Request**

```json
{
    "name": "Slave",
    "age": 24
}	
```

**Response**

```json
{
    "name": "Slava",
    "age": 24,
    "identifier": "f19e6990-2181-11ea-ab79-ff8327ef83ce"
}
```



### Delete item

**Path:** /items/:item-id

**Method:** DELETE




