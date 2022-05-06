# Instructions for this Template of Swagger

## File swagger.js

You don't need change anything in this file.

You can see the end-point

```http
  GET /api-doc
```
Used in the API, and can check the route when the server is on.

## File doc_Title.json

In this file you can change the Title and Description on the swagger ui page, the version or append other url in the "servers" section.

```javascript
"info": {
    "title": "Template",
    "description": "Rauqoz_Description",
    "version": "1.0.0"
},
"servers": [
    {
        "url": "http://localhost:4000"
    }
],
```

## File doc_Schemas.json

In this file you can add all Schemas you want with this example:

```javascript
"template_schema": {
    "type": "object",
    "properties": {
        "text_test": {
            "type": "string",
            "description": "test"
        }
    },
    "example": {
        "text_test": "Test"
    }
}
```

## File doc_Paths.json

In this file you can add your end-points for swagger documentation and referal your schemas in this format:

```javascript
"/": {
    "get": {
        "description": "Template Get",
        "tags": [ "Template Get" ],
        "responses": {
            "200": {
                "description": "Template Get Result",
                "content": {
                    "application/json; charset=utf-8": {
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/template_schema"
                            }
                        }
                    }
                }
            }
        }
    }
}
```

>If you need see the official doc for swagger:

[Documentation](https://swagger.io/specification/)
