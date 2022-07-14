
# mongo-api-node

An Api being developed in nodeJs with mongoDb.


## API Reference - Developed So Far...

### 1. `Gets you all the bills from the Mongo`

```http
  GET ~ /bills
```

### 2. `Gets you the bill of 'id' passed`

```http
  GET ~ /bill/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### 3. `Stores the bill with the passed params to the Mongo`

```http
  POST ~ /addBill
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `billDate`      | `Date` |  date of the bill issued |
| `paidDate`      | `Date` |  date of the bill when paid |
| `unitConsumed`      | `Number` |  **Required** |
| `amount`      | `Number` |  **Required** |


### 4. `Updates the bill with the id passed`

```http
  PUT ~ /bill/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `billDate`      | `Date` |  date of the bill issued |
| `paidDate`      | `Date` |  date of the bill when paid |
| `unitConsumed`      | `Number` |  **Required** |
| `amount`      | `Number` |  **Required** |


### 5. `Deletes the bill with the id passed from Mongo`

```http
  DELETE ~ /bill/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Error Handling

Errors are still to be tackled, so don't try with your tweaks right now :) with the
deployed link (till it gets completed) as it will break the server :( 

Though You can run according to the API Reference above